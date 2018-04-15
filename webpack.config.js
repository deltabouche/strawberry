const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    // The standard entry point and output config
    entry: {
        index: "./wpsrc/js/index.ts",
        style: "./wpsrc/css/index.scss"
    },
    output: {
        filename: "./.tmp/dist/javascripts/[name].js"
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
          }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
              use: [{
                loader: "css-loader",
              }, {
                loader: "sass-loader",
                options: {
                  includePaths: [path.resolve(__dirname, "./node_modules/compass-mixins/lib")]
                }
              }]
            })
          }
        ],
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js', '.css', '.scss' ]
    },
    // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
    plugins: [
        new ExtractTextPlugin("./.tmp/dist/stylesheets/index.css")
    ]
};
