// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "img.freepik.com",
//       },
//     ],
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        protocol: "https",
        hostname: "fra.cloud.appwrite.io", // ✅ Allow Appwrite file previews
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "100mb",
    },
  },
};

export default nextConfig;
