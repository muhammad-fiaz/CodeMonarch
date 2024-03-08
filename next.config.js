const withPWA = require('next-pwa');

const withMDX = require('@next/mdx')(
    // Optionally provide remark and rehype plugins

    {
        // If you use remark-gfm, you'll need to use next.config.js
        // as the package is ESM only
        // https://github.com/remarkjs/remark-gfm#install
        remarkPlugins: [],
        rehypePlugins: [],
        // If you use `MDXProvider`, uncomment the following line.
        providerImportSource: "@mdx-js/react",
        extension: /\.(md|mdx)$/,

    }
)

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure `pageExtensions` to include MDX files
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    // Optionally, add any other Next.js config below
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['**.github.com'],
    },
    pwa: {
        dest: "public",
        register: true,
        disable: process.env.NODE_ENV === 'development',
        skipWaiting: true,
    },
}

module.exports = withMDX(nextConfig)