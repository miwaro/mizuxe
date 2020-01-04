const path = require('path');

module.exports = {
	mode: 'production',
	entry: [ './scss/bootstrap.scss', './scss/style.scss' ],
	output: {
		path: path.resolve(__dirname, 'css')
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].css'
						}
					},
					{
						loader: 'extract-loader'
					},
					{
						loader: 'css-loader?-url'
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	}
};
