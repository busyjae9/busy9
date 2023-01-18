const withMdx = require("@next/mdx")

const mdx = withMdx({
  extension: /\.mdx?$/,

  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

const nextConfig = mdx({
  // Append the default value with md extensions
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["media-exp1.licdn.com"],
  },
})

module.exports = nextConfig
