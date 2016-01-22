var webpack = require("webpack");
var path = require('path');

module.exports = {
	entry: "./app.js",
	output: {
		path: __dirname + "/output",
		filename: "bundle.js"
	},
	devServer: {
		hot: true,
		inline: true
	},
	
	plugins: [
		new webpack.HotModuleReplacementPlugin(),

	],
	module: {
		loaders: [
			{ test: /\.css$/, loader: "style-loader!css-loader" },
			{ test: /\.js$/, exclude: [/bower_components/, /node_modules/], loader: "babel-loader"}
		]
	}
}