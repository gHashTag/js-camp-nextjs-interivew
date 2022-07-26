/**
 * @type {import('next').NextConfig}
 **/
const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/
})
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx', 'tsx']
})
