import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";
// import { sayHello } from "./functions/say-hello/resource";
import { listEC2 } from "./functions/listEC2/resource";
import * as iam from "aws-cdk-lib/aws-iam";

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
export const backend = defineBackend({
  auth,
  data,
  listEC2,
});

const lambdaFunction = backend.listEC2.resources.lambda;
lambdaFunction.addToRolePolicy(
  new iam.PolicyStatement({
    actions: ["ec2:DescribeInstances", "s3:ListAllMyBuckets"],
    resources: ["*"],
  })
);
