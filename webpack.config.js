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
	resolve: {
		alias: {
			src: path.resolve(__dirname, './src/'),
			assets: path.resolve(__dirname, './src/assets/'),
			components: path.resolve(__dirname, './src/components')
		}
	},
	devServer: {
		contentBase: path.join(__dirname, '/build'),
		compress: true,
		open: true,
		overlay: true,
		stats: 'errors-only',
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
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
				exclude: /favicon\.ico$/,
				loader: 'file-loader',
				options: {
				name: 'static/[name].[hash:8].[ext]',
				},
			},
			// A special rule for favicon.ico to place it into build root directory.
			{
				test: /favicon\.ico$/,
				loader: 'file-loader',
				options: {
				name: '[name].[ext]',
				},
			},

		]
	}
};