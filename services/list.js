import handler from "./libs/handler-api";
import dynamoDb from "./libs/dynamodb-api";


export const main = handler(async (event, context) => {
  const params = {
    TableName: process.env.tableName,

    // // 'KeyConditionExpression' defines the condition for the query
    // // - 'userId = :userId': only return items with matching 'userId'
    // //   partition key
    // KeyConditionExpression: "userId = :userId",
    //
    // // 'ExpressionAttributeValues' defines the value in the condition
    // // - ':userId': defines 'userId' to be the id of the author
    // ExpressionAttributeValues: {
    //   ":userId": "123",
    // },
  };

  const result = await dynamoDb.scan(params);
  return result.Items;
});
