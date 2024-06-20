import { SSTConfig } from 'sst';
import { App, NextjsSite } from 'sst/constructs';
import { SsrDomainProps } from 'sst/constructs/SsrSite';
import { Certificate } from 'aws-cdk-lib/aws-certificatemanager';
import { Distribution } from 'aws-cdk-lib/aws-cloudfront';

export default {
  config(_input) {
    return {
      name: 'landing-tribologyec',
      region: 'us-east-2',
    };
  },
  stacks(app: App) {
    app.stack(function ({ stack }): void {
      // const aws_domain_certificate: SsrDomainProps = {
      //   isExternalDomain: true,
      //   domainName: 'www3.tribologyec.com',
      //   cdk: {
      //     // @ts-ignore
      //     certificate: Certificate.fromCertificateArn(
      //       stack,
      //       'tribologyec_AWS_Certificate',
      //       'arn:aws:acm:us-east-1:136597708042:certificate/04e14c48-fab8-4198-baa7-81abc8854067',
      //     ),
      //   },
      // };

      // @ts-ignore
      const site: NextjsSite = new NextjsSite(stack, 'site', {
        // edge: true,
        // customDomain: aws_domain_certificate,
        cdk: {
          distribution: Distribution.fromDistributionAttributes(
            stack,
            "ExistingDistribution",
            {
              distributionId: "E37KJ6EEOIGLYM",
            },
          ),
        },
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
