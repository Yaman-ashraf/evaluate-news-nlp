import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { GenerateSW } from 'workbox-webpack-plugin';

export default {
    entry: './src/client/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'main.js',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html',
        }),
        new GenerateSW(),
    ],
    devServer: {
        port: 3003,
        allowedHosts: 'all',
    },
};
