/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = ''
let isUnoptimized = true

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
  isUnoptimized = false
}

const nextConfig = {
	assetPrefix: assetPrefix,
	basePath: basePath,
	output: "export",
	images: { unoptimized: isUnoptimized },
    webpack(config) {
        config.resolve.extensionAlias = {
            ".js": [".js", ".ts"],
            ".jsx": [".jsx", ".tsx"],
        };
        return config;
    },
}

module.exports = nextConfig
