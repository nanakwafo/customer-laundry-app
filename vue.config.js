module.exports = {
    "transpileDependencies": [
        "vuetify"
    ],

    pluginOptions: {

    },
    devServer: {
        proxy: {
            '/auth': {
                target: 'http://3.16.196.105:8088',
                pathRewrite: { '^/auth': '' }
            },
            '/customerresource': {
                target: 'http://3.16.196.105:8088',
                pathRewrite: { '^/customerresource': '' }
            }
        }

    },
    transpileDependencies: [
        'vuetify',

    ]
}