/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.GITHUB_ACTIONS ? "/balansami" : "",
  trailingSlash: true,
};

export default nextConfig;
