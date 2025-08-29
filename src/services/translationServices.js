import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function translateText(text, targetLanguage) {
  if (!text || !targetLanguage) {
    throw new Error("Text and target language are required");
  }
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `Translate the following text to ${targetLanguage}: "${text}"`;
    const result = await model.generateContent(prompt);
    const translation = await result.response.text();
    return translation.trim();
  } catch (error) {
    throw new Error(`Translation failed: ${error.message}`);
  }
}
