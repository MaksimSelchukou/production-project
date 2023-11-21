import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    const txtLoader = {
        test: /\.txt$/,
        use: 'raw-loader'
    }

    return [
        txtLoader,
        typescriptLoader,
    ]
}