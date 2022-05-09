const path = require("path");

const securityHeaders = [
  {
    key: "Cache-Control",
    value: "public, s-maxage=600, stale-while-revalidate=6000",
  },
];

module.exports = {
  reactStrictMode: false,
  trailingSlash: true,
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  eslint: {
    dirs: ["pages", "src"], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    apiEndpoint: process.env.REACT_APP_API_ENDPOINT,
    rootDomains: process.env.REACT_APP_ROOT_DOMAIN,
    apiUploadImage: process.env.REACT_APP_API_UPLOAD_IMG,
    gtmId: process.env.REACT_APP_GTM_ID,
  },
  images: {
    domains: [
      "vinhcara.com",
      "api.quan1229.com",
      "mediafile.quan1229.com",
      "mediafile.vinhcara.com",
    ],
    formats: ["image/webp"],
  },

  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};
