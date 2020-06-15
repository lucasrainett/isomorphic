import {Configuration} from "webpack";


export default {
    mode: "production",
    optimization:{
        minimize: false
    },
    entry: "./src/client/index.ts",
    resolve: {
        extensions: [".ts"]
    },
    output:{
        libraryTarget: "global"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader"
            }
        ]
    }
} as Configuration