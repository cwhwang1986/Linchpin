const path = require('path');
const webpack = require('webpack')
const PATHS = {
  app: path.join(__dirname, 'app/init.jsx'),
  build: path.join(__dirname, 'build')
};

module.exports = {
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
