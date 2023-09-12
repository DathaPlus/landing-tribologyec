import { SSTConfig } from 'sst';
import { NextjsSite } from 'sst/constructs';
import { SsrDomainProps } from 'sst/constructs/SsrSite';
import { Certificate } from 'aws-cdk-lib/aws-certificatemanager';

export default {
  config(_input) {
    return {
      name: 'landing-tribologyec',
      region: 'us-east-1',
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const aws_domain_certificate: SsrDomainProps = {
        isExternalDomain: true,
        domainName: 'www2.tribologyec.com',
        cdk: {
          certificate: Certificate.fromCertificateArn(
            stack,
            'tribologyec_AWS_Certificate',
            'arn:aws:acm:us-east-1:136597708042:certificate/ae3fc89a-529b-418f-8608-58b6428fc6de',
          ),
        },
      };

      const site = new NextjsSite(stack, 'site', {
        edge: true,
        customDomain: aws_domain_certificate,
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
