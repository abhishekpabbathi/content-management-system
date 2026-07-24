const HtmlWebpackPlugin=require("html-webpack-plugin");
const path=require("path");

module.exports={
entry:"./src/index.jsx",

output:{
path:path.resolve(__dirname,"dist"),
filename:"bundle.js"
},

devServer:{
static:path.resolve(__dirname),
port:3002,
open:true,
hot:true,
historyApiFallback:true
},

plugins:[new HtmlWebpackPlugin({template:"./index.html"})],

module:{
rules:[
{
test:/\.(js|jsx)$/,
exclude:/node_modules/,
use:"babel-loader"
},
{
test:/\.css$/,
use:["style-loader","css-loader","postcss-loader"]
}
]
},

resolve:{
extensions:[".js",".jsx"]
}

};
