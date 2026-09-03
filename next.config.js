/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // ESLint has never been part of this project's dependency set; the checked-in
  // .eslintrc is editor-only configuration.
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config) {
    // Next ships its own rule that swallows .svg via next-image-loader. Hand the
    // extension over to SVGR instead so `import Logo from "./logo.svg"` keeps
    // returning a React component, and keep `?url` imports working as URLs.
    const imageLoaderRule = config.module.rules.find(
      (rule) => rule && rule.test instanceof RegExp && rule.test.test(".svg")
    );

    if (imageLoaderRule) {
      imageLoaderRule.exclude = /\.svg$/i;
      config.module.rules.push({
        ...imageLoaderRule,
        test: /\.svg$/i,
        exclude: undefined,
        resourceQuery: /url/,
      });
    }

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: { not: [/url/] },
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
