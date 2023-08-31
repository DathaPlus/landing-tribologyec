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
    TRIBOLOGY_BACKEND: 'https://adminwp.tribologyec.com',
    TOKEN_BACKEND:
      'Basic Y2tfMzQ0ZGEwMDM4YzVmMzkyZjJmMGEzNjViM2M5ZWVjYmI3ODc1MmE0Zjpjc19iNDkwNDYxYjY1MDA0Yjg1Nzk2NThlNDkwMzM1OTU0M2FmZmM3MzY4',
  },
};

module.exports = nextConfig;
