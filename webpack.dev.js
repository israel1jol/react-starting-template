const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { ProvidePlugin } = require("webpack");



module.exports = {
    mode:"development",
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname, "dist"),
        filename:"bundle.js",
        assetModuleFilename:"[name][ext]"
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:[
                    {
                        loader:"babel-loader",
                        options:{
                            presets:["@babel/preset-env", "@babel/preset-react"],
                            cacheDirectory:true
                        }
                    }
                ]
            },
            {
                test:/.scss$/,
                use:[
                    "style-loader",
                    "css-loader", 
                    "sass-loader"
                ]
            }
        ]
    },
    devServer:{
        "static":{
            directory:"/dist/"
        }
    },
    plugins:[
        new htmlWebpackPlugin({
            template:"./public/index.html"
        }),
        new ProvidePlugin({
            React:"react"
        })
    ]
}