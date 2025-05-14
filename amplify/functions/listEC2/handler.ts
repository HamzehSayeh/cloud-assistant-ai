import { Context } from 'aws-lambda';
import { EC2Client, DescribeInstancesCommand } from '@aws-sdk/client-ec2';
import { S3Client, ListBucketsCommand } from '@aws-sdk/client-s3';

const ec2Client = new EC2Client({});
const s3Client = new S3Client({});

const listEC2Instances = async () => {
  const data = await ec2Client.send(new DescribeInstancesCommand({}));
  const instances = data.Reservations?.flatMap(reservation =>
    reservation.Instances?.map(instance => instance.InstanceId) ?? []
  ) ?? [];

  return instances.length > 0
    ? `Your EC2 instances are: ${instances.join(', ')}.`
    : `You don't have any running EC2 instances.`;
};

const listS3Buckets = async () => {
  const data = await s3Client.send(new ListBucketsCommand({}));
  const buckets = data.Buckets?.map(bucket => bucket.Name) ?? [];

  return buckets.length > 0
    ? `Your S3 buckets are: ${buckets.join(', ')}.`
    : `You don't have any S3 buckets.`;
};

// ✅ This is required by Lambda
export const handler = async (event: any, context: Context) => {
  try {
    let responseText = '';

    if (event.sessionState?.intent?.name === 'ListEC2Instances') {
      responseText = await listEC2Instances();
    } else if (event.sessionState?.intent?.name === 'ListS3Buckets') {
      responseText = await listS3Buckets();
    } else {
      throw new Error('Unknown intent');
    }

    return {
      sessionState: {
        dialogAction: { type: 'Close' },
        intent: {
          name: event.sessionState.intent.name,
          state: 'Fulfilled',
        },
      },
      messages: [
        {
          contentType: 'PlainText',
          content: responseText,
        },
      ],
    };
  } catch (error: any) {
    return {
      sessionState: {
        dialogAction: { type: 'Close' },
        intent: {
          name: event.sessionState?.intent?.name ?? 'UnknownIntent',
          state: 'Failed',
        },
      },
      messages: [
        {
          contentType: 'PlainText',
          content: `An error occurred: ${error.message}`,
        },
      ],
    };
  }
};
