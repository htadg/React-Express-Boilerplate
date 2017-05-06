var webpack = require('webpack'),
		webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    webpackconfig = require('./webpack.dev.config.js'),
    webpackcompiler = webpack(webpackconfig)


function useWebpackMiddleware(app) {
    app.use(webpackDevMiddleware(webpackcompiler, {
        publicPath: webpackconfig.output.publicPath,
        stats: {
            colors: true,
            chunks: false,
            'errors-only': true
        },
				hot: true,
				headers: { 'Access-Control-Allow-Origin': '*' }
    }))
    app.use(webpackHotMiddleware(webpackcompiler, {
        log: console.log
    }))
 
    return app
}
 
module.exports = {
    useWebpackMiddleware: useWebpackMiddleware
}