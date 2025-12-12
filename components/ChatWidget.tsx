import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hi! I am the portfolio assistant. Ask me anything about my work!' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await sendMessageToGemini(messages, userMsg);

    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-hand">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-brand-paper text-slate-800 rounded-lg shadow-2xl overflow-hidden border-4 border-slate-800 transform transition-all duration-300 origin-bottom-right">
          <div className="bg-brand-blue p-4 flex justify-between items-center border-b-4 border-slate-800">
            <h3 className="font-display text-white text-xl tracking-wide">Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-brand-yellow transition-colors">
              <X size={24} />
            </button>
          </div>
          
          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-white">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.role === 'user' 
                      ? 'bg-brand-blue text-white rounded-br-none' 
                      : 'bg-gray-200 text-slate-800 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-none flex items-center">
                  <Loader2 className="animate-spin text-brand-blue" size={20} />
                  <span className="ml-2 text-sm text-gray-500">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-3 bg-gray-50 border-t-2 border-gray-200 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 px-3 py-2 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-brand-blue font-sans"
            />
            <button 
              type="submit" 
              disabled={isLoading}
              className="bg-brand-blue text-white p-2 rounded-lg hover:bg-brand-dark transition-colors disabled:opacity-50"
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'scale-0' : 'scale-100'} transition-transform duration-200 bg-brand-yellow text-brand-blue p-4 rounded-full shadow-lg border-4 border-white hover:scale-110 flex items-center justify-center`}
      >
        <MessageCircle size={32} strokeWidth={2.5} />
      </button>
    </div>
  );
};

export default ChatWidget;