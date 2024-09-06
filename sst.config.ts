import { SSTConfig } from 'sst';
import { App, NextjsSite } from 'sst/constructs';
import {Certificate, ICertificate} from "aws-cdk-lib/aws-certificatemanager";
import {SsrDomainProps} from "sst/constructs/SsrSite";

export default {
  config(_input) {
    return {
      name: 'landing-tribologyec',
      region: 'us-east-1',
    };
  },
  stacks(app: App) {
    app.stack(function ({ stack }): void {

      const arnCertificate =
          "arn:aws:acm:us-east-1:136597708042:certificate/d4e08816-9553-4a6c-ae50-e0a9962391b8";

      const aws_domain_certificate: SsrDomainProps = {
        isExternalDomain: true,
        domainName: "tribologyec.com",
        alternateNames: ["www.tribologyec.com"],
        cdk: {
          // @ts-ignore
          certificate: Certificate.fromCertificateArn(
              stack,
              `tribologyec_${stack.stage}_AWS_Certificate`,
              arnCertificate,
          ) as ICertificate,
        },
      };
      const site: NextjsSite = new NextjsSite(stack, 'site',{
        customDomain: aws_domain_certificate,
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
