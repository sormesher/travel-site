var path = require('path');

module.exports = {
	entry: "./app/assets/scripts/App.js",
	output: {
		path: path.resolve(__dirname,"./app/temp/scripts"),
		filename: "App.js"
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				},
				test: /\.js$/, /* Tell webpack to only apply babel-loader to javascript files */ 
				exclude: /node_modules/ /* Only need to include our own javascript files */
			}
		]
	}
}