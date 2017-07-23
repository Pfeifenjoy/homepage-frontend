const path = require("path")
const webpack = require("webpack")


const baseConfig = {
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
	}
}


// targets
const runtime = () => Object.assign({ }, baseConfig, {
	entry: {
		runtime: path.resolve("src/runtime.js")
	},
	output: {
		path: path.resolve("build/static"),
		filename: "[name].bundle.js",
		sourceMapFilename: "[file].map"
	}
})

const index = () => Object.assign({ }, baseConfig, {
	target: "node",
	entry: {
		index: path.resolve("src/index.js")
	},
	output: {
		path: path.resolve("build"),
		filename: "homepage.js",
		sourceMapFilename: "homepage.map",
		library: "homepage",
		libraryTarget: "umd"
	}
})

// decorators
const production = config => Object.assign({ }, config(), {
	plugins: [
		new webpack.optimize.UglifyJsPlugin
	]
})

const development = config => Object.assign({ }, config(), {
	devServer: {
		historyApiFallback: true,
		stats: 'errors-only',

		host: process.env.HOST,
		port: 3000,
		compress: true,
		overlay: true,
		hot: true,
		contentBase: path.resolve(__dirname, "build")
	},
	devtool: "source-map",
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	]
})

module.exports = env => {
	if (env === 'production') {
		return [production(runtime), production(index)]
	}

	return development(runtime)
}
