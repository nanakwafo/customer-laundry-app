module.exports = {
    "transpileDependencies": [
        "vuetify"
    ],

    pluginOptions: {

    },
    devServer: {
        proxy: 'http://localhost:8088',
        port: 8081
    },
    transpileDependencies: [
        'vuetify',

    ]
}