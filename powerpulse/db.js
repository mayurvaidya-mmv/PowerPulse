import {
    DynamoDBClient,
    ScanCommand
} from "@aws-sdk/client-dynamodb";

const db = new DynamoDBClient({
    region: "ap-south-1"
});

export async function getMeterData() {

    const command = new ScanCommand({
        TableName: "meterData"
    });

    const response = await db.send(command);

    return response.Items;
}