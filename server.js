// server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/generate-quiz", async (req, res) => {
  try {
    const { topic, count } = req.body;

    // Validate inputs
    const numQuestions = Math.min(Math.max(parseInt(count) || 10, 1), 30);
    const quizTopic = topic || "Web Development";

    const prompt = `Generate a JSON array of exactly ${numQuestions} multiple-choice quiz questions on the topic "${quizTopic}".
Each object in the array MUST strictly follow this JSON structure:
{
  "question": "Question text here",
  "correct": "Correct answer choice",
  "wrongs": ["Wrong choice 1", "Wrong choice 2", "Wrong choice 3"]
}
Do not include any Markdown formatting or extra text outside the raw JSON output.`;

    // Calling OpenAI API (or substitute with Gemini/Groq API)
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        response_format: { type: "json_object" },
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    const content = JSON.parse(data.choices[0].message.content);

    // Normalize format to ensure array response
    const questionsArray = content.questions || content;

    return res.json({ success: true, questions: questionsArray });
  } catch (error) {
    console.error("AI Generation Error:", error);
    return res.status(500).json({ success: false, error: "Failed to generate quiz questions." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
