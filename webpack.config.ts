import path from 'path';
import webpack from 'webpack';

import {buildPlugins} from "./config/build/buildPlugins";
import {buildLoaders} from "./config/build/buildLoaders";
import {buildResolvers} from "./config/build/buildResolvers";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildPaths} from "./config/build/types/config";


// const config: webpack.Configuration = {
//     mode: 'development',
//     entry: path.resolve(__dirname, 'src', 'index.ts'),
//     output: {
//         filename: '[name].[fullhash].js',
//         path: path.resolve(__dirname, 'build'),
//         clean: true
//     },
//     module: {
//         rules: buildLoaders(),
//     },
//     resolve: buildResolvers(),
//     plugins: buildPlugins(),
//
// };


const paths: BuildPaths = {
    build: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    html: path.resolve(__dirname, 'public', 'index.html')
}


const mode = 'development';
const isDev = mode === 'development';
const config: webpack.Configuration = buildWebpackConfig({
    mode: 'development',
    paths: paths,
    isDev
})

export default config;
