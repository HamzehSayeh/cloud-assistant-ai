import {
  type ClientSchema,
  a,
  defineData,
} from "@aws-amplify/backend";

import { listEC2 } from "../functions/listEC2/resource";

const schema = a.schema({
  CloudAiAssistant: a
    .query()
    .arguments({ content: a.string() })
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(listEC2)),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
