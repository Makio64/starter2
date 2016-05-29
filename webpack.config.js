var webpack = require("webpack");

var isProduction = process.argv.indexOf("-p") > -1
var plugins = [
	new webpack.ProvidePlugin({
		dat: "dat",
		page: "page",
		isMobile: "isMobile"
	}),
	new webpack.LoaderOptionsPlugin({
	  minimize: isProduction,
	  debug: !isProduction
	}),
	new webpack.optimize.CommonsChunkPlugin({children: true, async: true, filename: "commons.js"})
]
if(isProduction){
	plugins.push(new webpack.optimize.OccurrenceOrderPlugin())
	plugins.push(new webpack.optimize.UglifyJsPlugin({comments:false, compress:{warnings: false} }))
} else {
	plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = {
	devtool: isProduction?false:'cheap-module-eval-source-map',
	entry: __dirname+(isProduction?"/src/js/Preloader":"/src/js/Main") ,
	output: {
		path: __dirname+(isProduction?"/":"")+'build/'+(isProduction?"bin/":""),
		filename: 'bundle.js',
		chunkFilename: "[id].bundle.js",
		publicPath: isProduction?'./bin/':'/bin/'
	},
	module: {
		loaders: [
			{ test: /\.json$/, loader: 'json' },
			{ test: /\.jsx?$/, exclude:[/node_modules|vendors/], loader:'babel', query: {presets:['es2015-native-modules', 'stage-0']} },
			{ test: /\.vue$/, loader: 'vue' }
		],
	},
	vue: {
		cssSourceMap:!isProduction
	},
	resolve: {
		extensions:['','.json','.js','.vue'],
		root:[
			__dirname+'src/js/',
			__dirname+'src/vue/',
			__dirname+'static/data/',
			__dirname+'static/vendors/'
		],
		alias: {
			dat: 		__dirname+'/static/vendors/'+"dat.gui.js",
			page: 		__dirname+'/static/vendors/'+"page.js",
			isMobile: 	__dirname+'/static/vendors/'+"isMobile.js",
		}
	},
	devServer: {
		open:true,
		compress:true,
		contentBase: ['./static','./build'],
		port:9000,
		hot:true,
		inline:true,
		noInfo:false,
		stats: { colors: true }
	},
	plugins:plugins
};
