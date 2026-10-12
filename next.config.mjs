/** @type {import('next').NextConfig} */
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/").pop();

const nextConfig = {
  output: "export",
  basePath: process.env.GITHUB_ACTIONS && repositoryName ? `/${repositoryName}` : "",
  trailingSlash: true,
};

export default nextConfig;
