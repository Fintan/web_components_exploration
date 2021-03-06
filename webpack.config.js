const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
// const classProps = require('@babel/plugin-proposal-class-properties');

module.exports = {
    // entry: ['./node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js', './src/index.js'],
    entry: ['@babel/polyfill', './src/index.js'],
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CopyWebpackPlugin([
            { from: './src/model/q1.json', to: './' },
            { from: './src/model/q2.json', to: './' },
            { from: './src/model/q3.json', to: './' }
        ])
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
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, 
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
                 // exclude: /node_modules/,
                 loader: 'babel-loader',
                 query: {
                    presets: ['es2015', 'stage-2'] ,
                    plugins: ['transform-decorators-legacy']                   
                }
             }
        ]
   }
};