module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/blog',
        destination: 'https://lucaslorenzop.notion.site/lucaslorenzop/Writing-Index-5ddfe015112e4ba286dedfe5d9fb24d0/',
        permanent: true,
      },
    ]
  },
}
