module.exports = {
    plugins: {
        'postcss-flexbugs-fixes': {},
        'postcss-preset-env': {
            autoprefixer: {
                flexbox: 'no-2009',
            },
            stage: 3,
            features: {
                'custom-properties': false,
            },
        },
        'postcss-pxtorem': {
            // replace: false,
            propList: ['*', '!font*', '!line*'],
            // unitPrecision: 75,
            rootValue: 75,
            mediaQuery: false,
            minPixelValue: 2
        }
    },
}