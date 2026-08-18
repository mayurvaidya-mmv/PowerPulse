import {
    BedrockRuntimeClient,
    InvokeModelCommand
} from "@aws-sdk/client-bedrock-runtime";

import { getMeterData } from "./db.js";

const client = new BedrockRuntimeClient({
    region: "us-east-1"
});

async function run() {

    const data = await getMeterData();

    const text = JSON.stringify(data.slice(0, 10));

    const prompt =
        "Analyze this smart meter data:\n" +
        text +
        "\nGive short summary.";

    const body = JSON.stringify({
        prompt: prompt,
        max_gen_len: 300,
        temperature: 0.5
    });

    const command = new InvokeModelCommand({
        modelId: "meta.llama3-8b-instruct-v1:0",
        contentType: "application/json",
        body: body
    });

    const response = await client.send(command);

    const result =
        new TextDecoder().decode(response.body);

    console.log(result);

}

run();