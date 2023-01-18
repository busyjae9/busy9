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
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://kisdelov.github.io/busy9"
      : "",
  images: {
    loader: "imgix",
    path: "https://kisdelov.github.io/busy9",
  },
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    }
  },
})

module.exports = nextConfig
