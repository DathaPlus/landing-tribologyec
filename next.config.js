/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, '/src/sass/styles')],
  },
  experimental: {
    serverActions: true,
  },
  env: {
    BASE_PATH_WORDPRESS_BACKEND: 'https://adminwp.tribologyec.com',
    TOKEN_WOOCOMMERCE_BACKEND:
      'Basic Y2tfMzQ0ZGEwMDM4YzVmMzkyZjJmMGEzNjViM2M5ZWVjYmI3ODc1MmE0Zjpjc19iNDkwNDYxYjY1MDA0Yjg1Nzk2NThlNDkwMzM1OTU0M2FmZmM3MzY4',
    TOKEN_WORDPRESS_BACKEND: "Basic YmFja2VuZE1hbmFnZXI6MExXQiBybWU4IFgyTWcgYktRbyB6dU5FIHB1SjQ="
  },
};

module.exports = nextConfig;
