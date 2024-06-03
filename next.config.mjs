import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    // modify and return the package
    // config.optimization = {
    //   ...config.optimization,
    //   usedExports: true
    // };
    return config;
  },
  experimental: {
    optimizePackageImports: ['./barrel-package']
  }
  // modularizeImports: {
  //   './barrel-package': {
  //     transform: './barrel-package/{{member}}',
  //     preventFullImport: true,
  //   },
  // }
};

export default withBundleAnalyzer(nextConfig);
