const withOffline = require('next-offline')

const nextConfig = {
    exportTrailingSlash: true,
    exportPathMap: function () {
        return {
            '/': { page: '/' }
        };
    },
    webpack (config, options) {
        config.module.rules.push({
            test: /\.graphql$/,
            exclude: /node_modules/,
            use: [options.defaultLoaders.babel, { loader: 'graphql-let/loader' }],
        })

        config.module.rules.push({
            test: /\.graphqls$/,
            exclude: /node_modules/,
            loader: 'graphql-tag/loader',
        })

        return config
    },
}

module.exports = withOffline(nextConfig)