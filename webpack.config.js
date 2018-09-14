const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const classProps = require('@babel/plugin-proposal-class-properties');

module.exports = {
    // entry: ['./node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js', './src/index.js'],
    entry: './src/index.js',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    output: {
        filename: 'bundle-[hash:6].js',
        path: path.resolve(__dirname, 'dist')
    },
    // devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        // compress: true,
        // port: 9016
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [ {
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }],
            },
            {
                 test: /\.js$/,
                 exclude: /node_modules/,
                 loader: 'babel-loader',
                 query: {
                    presets: ['@babel/preset-env']                    
                }
             }
        ]
   }
};