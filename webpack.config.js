'use strict';

const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let templates = [];
let dir = 'src';
let files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.match(/\.pug$/)) {
    let filename = file.substring(0, file.length - 4);
    templates.push(
      new HtmlWebpackPlugin({
        template: dir + '/' + filename + '.pug',
        filename: filename + '.html'
      })
    );
  }
});
console.log('Pages are: ');
console.log(templates);

module.exports = {
	target: 'web',
	mode: 'development',
	entry: './src/index.js',
	output: {
	path: path.resolve(__dirname, 'dist'),
	filename: 'main.bundle.js'
	},
	plugins: [
		...templates,
		new HtmlWebpackPlugin()
	],
	module: {
		rules: [
			{
				test: /\.pug$/,
				include: path.join(__dirname, 'src'),
				loaders: [
					'pug-loader?pretty=true'
				]
			},
		]
	}
};