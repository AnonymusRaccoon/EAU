const path = require("path");
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: [
        "./src/ts/index.ts",
        "./src/ts/Carousel.ts"
    ],
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist/js")
    },
    mode: "production",
    target: "electron-renderer"
};