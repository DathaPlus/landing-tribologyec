import { StackContext, StaticSite } from "sst/constructs";

export function TrybologyStack({ stack }: StackContext) {
    const site = new StaticSite(stack, "gatsby", {
        path: "packages/frontend",
        buildOutput: "public",
        buildCommand: "npm run build",
        errorPage: "404.html",
        environment: {
            TEST: "HELLO_WORLD"
        },
    });

    stack.addOutputs({
        SiteUrl: site.url
    });
}