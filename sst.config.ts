import { SSTConfig } from 'sst';
import { App, NextjsSite } from 'sst/constructs';
import { SsrDomainProps } from 'sst/constructs/SsrSite';
import { Certificate } from 'aws-cdk-lib/aws-certificatemanager';

export default {
  config(_input) {
    return {
      name: 'landing-tribologyec',
      region: 'us-east-2',
    };
  },
  stacks(app: App) {
    app.stack(function ({ stack }): void {
      const aws_domain_certificate: SsrDomainProps = {
        isExternalDomain: true,
        domainName: 'www3.tribologyec.com',
        cdk: {
          // @ts-ignore
          certificate: Certificate.fromCertificateArn(
            stack,
            'tribologyec_AWS_Certificate',
            'arn:aws:acm:us-east-2:242256376257:certificate/fc991100-c098-46bb-98c9-8558a802f17c',
          ),
        },
      };

      const site: NextjsSite = new NextjsSite(stack, 'site', {
        // edge: true,
        customDomain: aws_domain_certificate,
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
