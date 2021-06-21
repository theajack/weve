const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 分离css
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

const commonConfig = (dev = false) => {
    return {
        entry: path.resolve('./', 'src'),
        module: {
            rules: [
                {
                    test: /(.js)$/,
                    use: [{
                        loader: 'babel-loader',
                    }]
                }, {
                    enforce: 'pre',
                    test: /\.vue$/,
                    loader: 'eslint-loader',
                    exclude: /node_modules/
                }, {
                    test: /\.css$/,
                    use: [ dev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
                }, {
                    test: /\.less$/,
                    use: [ dev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader',  'less-loader'],
                }, {
                    test: /\.(woff|ttf)$/,
                    loader: 'url-loader',
                    options: {
                        limit: 50000,
                    },
                }, {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            js: 'babel-loader',
                        },
                    },
                }
            ]
        },
    };
};


module.exports = () => {
    const mode = process.env.NODE_ENV;
    if (mode === 'dev') {
        return devConfig();
    } else if (mode === 'watch') {
        return buildConfig(true);
    } else {
        return buildConfig();
    }
};

function buildConfig (watch) {
    const watchOption = watch ? {
        watch: true,
        watchOptions: {
            poll: 1000, // 每隔多少时间检查一次变动
            aggregateTimeout: 300, // 防抖, 和函数防抖一样, 改变过程中不重新打包, 只有改变完成指定时间后才打包
            ignored: /node_modules/ // 排除一些巨大的文件夹, 不需要监控的文件夹, 例如 node_modules
        },
    } : {};
    return {
        ...commonConfig(),
        ...watchOption,
        mode: 'production',
        output: {
            path: path.resolve('./', 'app/src/main/assets'),
            filename: 'bundle.js',
        },
        plugins: [
            new VueLoaderPlugin(),
            new MiniCssExtractPlugin({
                filename: 'css/[name].min.css',
            }),
            new HtmlWebpackPlugin({
                template: 'src/index.tpl.html',
                filename: 'index.html',
            }),
            new OptimizeCssAssetsPlugin()
        ]
    };
}

function devConfig () {
    return {
        ...commonConfig(true),
        mode: 'development',
        output: {
            path: path.resolve('./', 'dev'),
            filename: 'bundle.js'
        },
        devtool: 'eval-source-map',
        devServer: {
            contentBase: path.resolve('./', 'dev'),
            historyApiFallback: true,
            inline: true,
            hot: false,
            host: 'localhost',
            disableHostCheck: true,
            proxy: {},
        },
        plugins: [
            new VueLoaderPlugin(),
            // new HtmlWebpackPlugin({
            //     template: 'src/index.tpl.html',
            //     filename: 'index.html',
            // }),
        ]
    };
}