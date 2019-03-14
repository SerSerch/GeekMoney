const path = require('path'),
    HTMLplugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    UglifyJsPlugin = require("uglifyjs-webpack-plugin"),
    OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"),
    // tinyPngWebpackPlugin = require('tinypng-webpack-plugin'),
    SpriteLoaderPlugin = require( 'svg-sprite-loader/plugin' );

module.exports = {
    entry:{
        main: path.resolve(__dirname, 'src', 'index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'dist'),
        proxy: {
            '/api': {
                target: 'https://floating-woodland-16538.herokuapp.com/api',
                pathRewrite: {'^/api' : ''},
                changeOrigin: true,
                secure: false,
            }
        }
    },
    module:{
        rules :[
            {
                test:/\.jsx?$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(gif|png|jpe?g)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[hash].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(svg)$/,
                use: [
                    {
                        loader: 'svg-sprite-loader',
                        options: {
                            extract: true,
                            spriteFilename: 'img/sprite-[hash:6].svg'
                        }
                    },
                    {
                        loader: 'svgo-loader',
                        options: {
                            plugins: [
                                { removeTitle: true },
                                { convertColors: { shorthex: false } },
                                { convertPathData: false }
                            ]
                        }
                    },
                    'svg-transform-loader',
                ]
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias:{
            components: path.resolve(__dirname, 'src', 'Components'),
            containers: path.resolve(__dirname, 'src', 'Containers'),
            actions: path.resolve(__dirname, 'src', 'actions'),
            reducers: path.resolve(__dirname, 'src', 'reducers'),
            layouts: path.resolve(__dirname, 'src', 'layouts'),
            efi: path.resolve(__dirname, 'src', 'efi'),
        }
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
    },
    plugins :[
        new HTMLplugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        // new tinyPngWebpackPlugin({
        //     key:""
        // }),
        new SpriteLoaderPlugin(),
    ],
};