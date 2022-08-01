const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const resolveRelativePath = (relativePath) => path.resolve(__dirname, relativePath);
const itRadioURL = "https://it-radio.ru/";

module.exports = (env) => {
    const isDevelopment = !env.production;

    return {
        mode: isDevelopment ? "development" : "production",
        entry: {
            player: resolveRelativePath("./src/player.js"),
        },
        output: {
            clean: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: "it-radio",
                template: resolveRelativePath("./src/index.html"),
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    // exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                        },
                    },
                },
            ],
        },
        devtool: isDevelopment ? "source-map" : undefined,
        target: ["web", "es5"],
        devServer: {
            hot: true,
            open: true,
            port: 3000,
            proxy: {
                "/rock": {
                    target: itRadioURL,
                    secure: false,
                },
                "/mc": {
                    target: itRadioURL,
                    secure: false,
                },
            },
        },
    };
};
