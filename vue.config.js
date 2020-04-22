module.exports = {
    "transpileDependencies": [
        "vuetify"
    ],

    pluginOptions: {

    },
    devServer: {
        proxy: {
            '/auth': {
                target: 'http://localhost:8088/',
                pathRewrite: { '^/auth': '' }
            },
            '/customerresource': {
                target: 'http://localhost:8088/',
                pathRewrite: { '^/customerresource': '' }
            }
        }

    },
    transpileDependencies: [
        'vuetify',

    ]
}