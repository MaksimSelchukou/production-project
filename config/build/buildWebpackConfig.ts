import webpack from "webpack";
import {BuildOptions} from "./types/config";
import path from "path";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";


export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
    const {mode,paths} = options
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: '[name].[fullhash].js',
            path: paths.build,
            clean: true
        },
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
        plugins: buildPlugins(options),
    };
}