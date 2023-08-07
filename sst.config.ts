import { SSTConfig } from "sst";
import { TrybologyStack } from "./stacks/TrybologyStack";

export default {
  config(_input) {
    return {
      name: "trybologyec-frontend",
      region: "us-east-2",
    };
  },
  stacks(app) {
    app.stack(TrybologyStack);
  }
} satisfies SSTConfig;
