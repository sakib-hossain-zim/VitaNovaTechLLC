import * as uuid from "uuid";
import handler from "./libs/handler-api";
import dynamoDb from "./libs/dynamodb-api";


export const main = handler(async (event, context) => {
  // const data = JSON.parse(event.body);
  // console.log(data);
  const params = {
    TableName: process.env.tableName,
    Item: {
      surrogateId: uuid.v1(),  // A unique uuid
      userId: "123",
      content: event.body,  // Parsed from request body
      createdAt: Date.now(), // Current Unix timestamp

    },
  };

  await dynamoDb.put(params);

  return params.Item;
});
