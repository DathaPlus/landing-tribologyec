import { StackContext, StaticSite } from "sst/constructs";

export function TrybologyStack({ stack }: StackContext) {
    const site = new StaticSite(stack, "GatsbySite", {
        path: "packages/frontend",
        buildOutput: "public",
        buildCommand: "npm run build",
        environment: {
            TEST: "HELLO_WORLD"
        },
    });

    stack.addOutputs({
        SiteUrl: site.url
    });
}