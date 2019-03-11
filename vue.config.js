// vue.config.js
module.exports = {
    devServer: {
        port: 3000,
    },
    build: {
        index: path.resolve(__dirname, '../../src/main/resources/static/index.html'),
        assetsRoot: path.resolve(__dirname, '../../src/main/resources/static')
    }
}