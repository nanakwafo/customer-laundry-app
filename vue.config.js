module.exports = {
    "transpileDependencies": [
        "vuetify"
    ],

    pluginOptions: {

    },
    devServer: {
        proxy: {
            '/auth': {
                target: 'http://api.kwafonanadev.co.uk:8088',
                pathRewrite: { '^/auth': '' }
            },
            '/customerresource': {
                target: 'http://api.kwafonanadev.co.uk:8088',
                pathRewrite: { '^/customerresource': '' }
            }
        }

    },
    transpileDependencies: [
        'vuetify',

    ]
}