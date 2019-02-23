const path = require("path")
const webpack = require("webpack")

const port = parseInt(process.env.PORT) || 5000

/************************************************************/
/* Base configuration                                       */
/************************************************************/

const baseConfig = {
	output: {
		path: path.resolve(__dirname, "./build"),
		filename: "[name].bundle.js",
		sourceMapFilename: "[file].map"
	},
	externals: [ "express", "ejs" ],
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
						loader: "url-loader",
						options: {
							limit: 1000
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
			},
			{
				test: /.asc$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].asc"
						}
					}
				]
			}
		]
	}
}


/************************************************************/
/* Targets                                                  */
/************************************************************/

//This will be the script which is included in the index.html
const runtime = () => Object.assign({ }, baseConfig, {
	target: "web",
	entry: {
		runtime: path.resolve("src/runtime.js")
	},
	output: {
		path: path.resolve("build/static"),
		filename: "[name].bundle.js",
		sourceMapFilename: "[file].map"
	}
})

//This target will be exposed by this package, that either node
//or browser applications can require it.
const index = () => Object.assign({ }, baseConfig, {
	target: "node",
	entry: {
		index: path.resolve("src/index.js")
	},
	output: {
		path: path.resolve("build"),
		filename: "index.js",
		sourceMapFilename: "index.map",
		libraryTarget: "umd",
		library: "homepage"
	},
	node: {
		__dirname: false,
		__filename: false
	}
})

/************************************************************/
/* Decorators                                               */
/************************************************************/

//extend the configuration by all production settings
const production = config => Object.assign({ }, config(), {
	mode: "production",
	plugins: [
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify("production")
		})
	]
})

//extend the configuration by all development settings
const development = config => Object.assign({ }, config(), {
	mode: "development",
	devServer: {
		historyApiFallback: true,
		stats: "errors-only",
		host: process.env.HOST,
		port,
		compress: true,
		overlay: true,
		hot: true,
		contentBase: path.resolve(__dirname, "build/static"),
		proxy: {
			"/api": {
				"target": "https://localhost:6000",
				secure: false
			}
		}
	},
	devtool: "source-map",
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
})

//choose according to environment
module.exports = env => {
	if (env === "production") {
		return [ production(index), production(runtime) ]
	} else {
		return [ development(runtime) ]
	}
}
