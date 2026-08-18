import { BedrockRuntimeClient, ConverseCommand } from "@aws-sdk/client-bedrock-runtime";

const client = new BedrockRuntimeClient({ region: "ap-south-1" });
const MODEL_ID = "arn:aws:bedrock:ap-south-1:559050245586:inference-profile/global.anthropic.claude-haiku-4-5-20251001-v1:0";

async function test() {
  try {
    const command = new ConverseCommand({
      modelId: MODEL_ID,
      system: [{ text: "You are a test." }],
      messages: [{ role: "user", content: [{ text: "Hello" }] }],
      inferenceConfig: { maxTokens: 4000 }
    });
    const response = await client.send(command);
    console.log("SUCCESS:", response.output.message.content[0].text);
  } catch (err) {
    console.error("ERROR:", err.message);
    if (err.name) console.error("Error Name:", err.name);
  }
}
test();
