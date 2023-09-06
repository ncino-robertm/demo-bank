/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

const nextConfig = {
	assetPrefix: assetPrefix,
	basePath: basePath,
	output: "export",
    webpack(config) {
        config.resolve.extensionAlias = {
            ".js": [".js", ".ts"],
            ".jsx": [".jsx", ".tsx"],
        };
        return config;
    },
}

module.exports = nextConfig
