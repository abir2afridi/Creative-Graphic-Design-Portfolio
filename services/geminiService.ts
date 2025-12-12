import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the interactive portfolio assistant for a Creative Graphic Designer named Chamodya.
Your persona is friendly, creative, slightly quirky, and professional.
The visual style of the website is hand-drawn, blue, and playful.

Details about Chamodya:
- Role: Graphic Designer & Illustrator.
- Experience: Over 5 years.
- Education: BBA (Hons) in Marketing.
- Passion: Creating visually stunning designs that resonate with audiences.
- Services: Logo Design, Flyer Design, Poster Design, Brochure Design, Social Media Post Design, Business Card Design, Motion Poster Design.
- Tools Used: Adobe Illustrator (Ai), Adobe Photoshop (Ps), Adobe Premiere Pro (Pr), Adobe After Effects (Ae), Adobe InDesign (Id).
- Contact: Email (tchama333@gmail.com), Phone (+94 77 976 7548).
- Platforms: Fiverr, Freelance, Kwork.

Instructions:
- Keep answers concise and helpful (under 50 words usually).
- If asked about prices, say "Pricing depends on the project scope! Please use the contact section to send me a direct message."
- Encourage the user to scroll down to see the portfolio work.
- Use emojis occasionally.
`;

export const sendMessageToGemini = async (history: { role: string; text: string }[], newMessage: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error("API Key not found");
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // Transform history to Gemini format if needed, but for simple content generation
    // passing the context in the prompt or using a chat session is best.
    // Here we use a chat session.
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "I'm drawing a blank! Try asking again.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Oops! My creative juices are running low (Connection Error). Please try again later.";
  }
};