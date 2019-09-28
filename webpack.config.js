'use strict';

const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let templates = [];
const dir = './src/pages';
let files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.match(/\.pug$/)) {
    let filename = file.substring(0, file.length - 4);
    templates.push(
      new HtmlWebpackPlugin({
        template: dir + '/' + filename + '.pug',
		filename: filename + '.html',
		inject: true
      })
    );
  }
});

module.exports = {
	target: 'web',
	mode: 'development',
	entry: './src/index.js',
	output: {
	path: path.resolve(__dirname, 'build'),
	filename: 'main.bundle.js'
	},
	devServer: {
		contentBase: path.join(__dirname, '/build'),
		compress: true,
		port: 9000
	},
	plugins: [
		...templates
	],
	module: {
		rules: [
			{
				test: /\.pug$/,
				include: path.join(__dirname, './src'),
				loaders: [
					'pug-loader?pretty=true'
				]
			},
			{
				test: /\.styl$/,
				loader: 'style-loader!css-loader!stylus-loader'
			},
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
		]
	}
};