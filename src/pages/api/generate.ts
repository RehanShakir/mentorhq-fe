import { Configuration, OpenAIApi } from "openai";
import type { NextApiRequest, NextApiResponse } from "next";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message:
          "OpenAI API key not configured, please follow instructions in README.md",
      },
    });
    return;
  }

  const messages = req.body.prompt;
  const temperature = req.body.temperature || 0.6;
  const model = req.body.model || "gpt-3.5-turbo";
  const system = req.body.system || undefined;

  if (system) {
    messages.push({ role: "system", content: system });
  }

  console.log("messages", messages);

  try {
    const response = await openai.createChatCompletion({
      model,
      messages,
      temperature: parseInt(temperature),
      // stream: true,
    });

    const modelReply = response?.data?.choices?.[0]?.message?.content;

    res.status(200).json({ result: modelReply });
  } catch (error: any) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: "An error occurred during your request.",
        },
      });
    }
  }
}
