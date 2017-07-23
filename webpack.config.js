const path = require("path")
const webpack = require("webpack")


const baseConfig = {
	entry: {
		index: path.resolve("src/index.js")
	},
	output: {
		path: path.resolve(__dirname, "./build"),
		filename: "[name].bundle.js",
		sourceMapFilename: "[file].map"
	},
	resolve: {
		alias: {
			"react": "inferno-compat",
			"react-dom": "inferno-compat"
		}
	},
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				include: [
					path.resolve(__dirname, "./src")
				],
				loader: "babel-loader"
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192
						}
					}
				]
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]"
						}
					}
				]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	]
}

const productionConfig = () => baseConfig

const developmentConfig = () => Object.assign({ }, baseConfig, {
	devServer: {
		historyApiFallback: true,
		stats: 'errors-only',

		host: process.env.HOST,
		port: 3000,
		compress: true,
		overlay: true,
		hot: true,
		contentBase: path.resolve(__dirname, "build")
	}
})

module.exports = env => {
	if (env === 'production') {
		return productionConfig();
	}

	return developmentConfig();
}
