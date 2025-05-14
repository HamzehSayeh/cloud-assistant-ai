import { defineFunction } from '@aws-amplify/backend';

export const listEC2 = defineFunction({
  name: 'listEC2',
  entry: './handler.ts',
});
