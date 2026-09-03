/** @type {import('next').NextConfig} */
const isGithubPagesExport = process.env.GITHUB_PAGES_EXPORT === "true";
const repoName = "crisp";

const nextConfig = {
  reactStrictMode: true,
  ...(isGithubPagesExport && {
    output: "export",
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
    images: { unoptimized: true },
    trailingSlash: true,
  }),
};

export default nextConfig;
