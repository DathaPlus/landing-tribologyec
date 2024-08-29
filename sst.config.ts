import { SSTConfig } from 'sst';
import { App, NextjsSite } from 'sst/constructs';

export default {
  config(_input) {
    return {
      name: 'landing-tribologyec',
      region: 'us-east-1',
    };
  },
  stacks(app: App) {
    app.stack(function ({ stack }): void {


      const site: NextjsSite = new NextjsSite(stack, 'site');

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
