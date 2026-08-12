const firebaseConfig = {
  apiKey: "AQ.Ab8RN6LoxsPnbn1c0Vpx7KmDqP3QfYH780w51ak5-HEddw-45g",
  authDomain: "smart-edu-chat.firebaseapp.com",
  databaseURL: "https://smart-edu-chat-default-rtdb.firebaseio.com",
  projectId: "smart-edu-chat",
  storageBucket: "smart-edu-chat.firebasestorage.app",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AQ.Ab8RN6I9VSMl2DWYCtq8n9S-7ulAYxTUSIMxrOK3AhV6KtVyFg" });

const response = await ai.models.generateContent({
  model: "gemini-3.6-flash",
  contents: "O'zbek tilida salom ayting",
});
console.log(response.text);