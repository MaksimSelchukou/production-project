
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin'


const config: webpack.Configuration = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
        filename: '[name].[fullhash].js',
        path: path.resolve(__dirname, 'build'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.txt$/,
                use: 'raw-loader'
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html')}),
        new webpack.ProgressPlugin(),
    ],

};

export default config;









// module.exports = {
//     mode: 'development',
//     entry: path.resolve(__dirname, 'src', 'index.ts'),
//     output: {
//         filename: '[name].[fullhash].js',
//         path: path.resolve(__dirname, 'build'),
//         clean: true
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.txt$/,
//                 use: 'raw-loader'
//             },
//             {
//                 test: /\.tsx?$/,
//                 use: 'ts-loader',
//                 exclude: /node_modules/,
//             },
//         ],
//     },
//     resolve: {
//         extensions: ['.tsx', '.ts', '.js'],
//     },
//     plugins: [
//         new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html')}),
//         new webpack.ProgressPlugin(),
//     ],
// };