import handler from "./libs/handler-api";
import dynamoDb from "./libs/dynamodb-api";


export const main = handler(async (event, context) => {
  const params = {
    TableName: process.env.tableName,
    // 'Key' defines the partition key and sort key of the item to be fetched
    Key: {
      surrogateId: event.pathParameters.id, // The unique id of the surrogate we are trying to fetch
      userId: "123",
    },
  };


  const result = await dynamoDb.get(params);
  if(!result.Item) {
    console.log(params);
    throw new Error("Item not found in database");
  }


  // Return the fetched item
  return result.Item;

});
