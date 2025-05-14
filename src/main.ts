import { type Schema } from '../amplify/data/resource'
import { Amplify } from "aws-amplify"
import { generateClient } from "aws-amplify/api"
import amplifyConfig from '../amplify_outputs.json';

Amplify.configure(amplifyConfig)

const client = generateClient<Schema>()

client.queries.sayHello({
  name: "Amplify",
})