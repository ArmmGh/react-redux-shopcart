const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
});
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "index.css",
    disable: process.env.NODE_ENV === "development"
});


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index.bundle.js'
    },
    module: {
        rules: [{
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                            loader: "css-loader"
                        },
                        {
                            loader: "sass-loader"
                        }
                    ],
                    // use style-loader in development 
                    fallback: "style-loader"
                })
            },
            {
                test: /\.jsx?/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
        ]
    },
    plugins: [HtmlWebpackPluginConfig, extractSass],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
}