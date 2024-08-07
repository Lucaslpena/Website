module.exports = {
    reactStrictMode: true,
    transpilePackages: ['three'],
    webpack: (config, {isServer}) => {
        config.module.rules.push({
            test: /\.(glsl|vs|fs|vert|frag)$/,
            exclude: /node_modules/,
            use: [
                'raw-loader',
            ]
        });

        return config;
    },
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
