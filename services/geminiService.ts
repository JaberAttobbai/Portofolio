import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { HERO_DATA, ABOUT_TEXT, EXPERIENCE_DATA, PROJECTS_DATA, SKILLS_DATA } from '../constants';

// Construct a system prompt based on the resume data
const SYSTEM_INSTRUCTION = `
You are a helpful and professional AI assistant for the portfolio website of ${HERO_DATA.name}.
Your goal is to answer questions about ${HERO_DATA.name}'s experience, skills, and projects based strictly on the provided context below.

Context:
- Name: ${HERO_DATA.name}
- Title: ${HERO_DATA.title}
- Tagline: ${HERO_DATA.tagline}
- About: ${ABOUT_TEXT}
- Experience: ${JSON.stringify(EXPERIENCE_DATA)}
- Projects: ${JSON.stringify(PROJECTS_DATA)}
- Skills: ${JSON.stringify(SKILLS_DATA)}
- Contact Email: jabermahyoub@gmail.com

Guidelines:
1. Be concise, professional, and friendly.
2. If asked about contact info, suggest the email provided.
3. If asked something outside this context, politely say you only know about ${HERO_DATA.name}'s professional background.
4. Keep answers short (under 3 sentences) unless asked for details.
5. Emphasize their expertise in ${SKILLS_DATA.slice(0, 3).map(s => s.name).join(', ')}.
`;

let chatSession: Chat | null = null;

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY is not set in environment variables.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const initializeChat = (): Chat | null => {
  const ai = getAiClient();
  if (!ai) return null;

  try {
    chatSession = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
    return chatSession;
  } catch (error) {
    console.error("Failed to initialize chat:", error);
    return null;
  }
};

export const sendMessageStream = async function* (message: string) {
  if (!chatSession) {
    // Attempt to re-initialize if lost
    chatSession = initializeChat();
    if (!chatSession) {
      yield "I'm sorry, I can't connect to the AI service right now. Please check the API configuration.";
      return;
    }
  }

  try {
    const resultStream = await chatSession.sendMessageStream({ message });
    
    for await (const chunk of resultStream) {
      const c = chunk as GenerateContentResponse;
      if (c.text) {
        yield c.text;
      }
    }
  } catch (error) {
    console.error("Error sending message:", error);
    yield "Sorry, I encountered an error while processing your request.";
  }
};
