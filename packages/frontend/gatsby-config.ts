import type { GatsbyConfig } from 'gatsby';
import { resolve } from 'path';

const __src = resolve(__dirname, 'src');

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': resolve(__src, 'components'),
          '@utils': resolve(__src, 'utils'),
          '@helpers': resolve(__src, 'helpers'),
          '@hooks': resolve(__src, 'hooks'),
          '@interfaces': resolve(__src, 'interfaces'),
          '@styles': resolve(__src, 'styles'),
          '@data': resolve(__src, 'data'),
          '@assets': resolve(__src, '..', 'static'),
          '@validation': resolve(__src, 'validation')
        },
        extensions: ['js', 'jsx', 'ts', 'tsx'],
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
        theme: 'tribologyec',
        font: 'Montserrat',
      },
    },
  ],
};

export default config;
