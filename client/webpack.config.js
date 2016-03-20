const path = require('path');
const webpack = require('webpack')
const TARGET = process.env.npm_lifecycle_event;
const merge = require('webpack-merge');


const PATHS = {
  app: path.join(__dirname, 'app/init.jsx'),
  build: path.join(__dirname, 'build')
};

const common = {
	entry: {
		app: PATHS.app
	},
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    resolve: {
       extensions: ['', '.js', '.jsx']
     },
    devtool: 'source-map',
    module: {
        loaders: [
        	{ 
        		test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
        		loaders: ['babel?cacheDirectory']
        	},
            {
                test: /\.css$/,
                loaders: ['style', 'css'],
                include: [path.join(__dirname, 'app/css/')]
            }
        ],
        noParse: [
            'app/third-party/*.js',
            'node_modules/*'
        ]
    },
};

if (TARGET === 'start' || !TARGET) {
    module.exports = merge(common, {
        devServer: {
            contentBase: PATHS.build,
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,
            stats: 'errors-only',
            host: process.env.HOST,
            port: process.env.PORT || 3000
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    });
}