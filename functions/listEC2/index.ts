import { Context } from 'aws-lambda';

export const handler = async (event: any, context: Context) => {
  console.log('Received event:', JSON.stringify(event, null, 2));

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello from listEC2 Lambda!' }),
  };
};
