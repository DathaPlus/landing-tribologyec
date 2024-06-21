import { SSTConfig } from 'sst';
import { App, NextjsSite } from 'sst/constructs';
import { Distribution, IDistribution } from 'aws-cdk-lib/aws-cloudfront';

export default {
  config(_input) {
    return {
      name: 'landing-tribologyec',
      region: 'us-east-2',
    };
  },
  stacks(app: App) {
    app.stack(function ({ stack }): void {

      const existingDistribution: IDistribution = Distribution.fromDistributionAttributes(
          stack,
          "ExistingDistribution",
          {
            distributionId: "E34LRVBAGVE72Y",
            domainName: "d2auihfh7j1fox.cloudfront.net"
          },
        );

      const site: NextjsSite = new NextjsSite(stack, 'site', {
        cdk: {
          // @ts-ignore
          distribution: existingDistribution
        },
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
