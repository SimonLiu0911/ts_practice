const path = require('path');

// 引入 html 插件
const HTMLWebpackPlugin = require("html-webpack-plugin");
// 引入 clean 插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// webpack 中的所有的配置信息都應該寫在 module.exports 中
module.exports = {
  // 指定入口文件
  entry: "./src/js/index.ts",
  // 指定打包文件所在目錄
  output: {
    // 指定打包文件的目錄
    path: __dirname + "/dist",
    // 打包後的文件
    filename: "bundle.js",
    environment: {
      arrowFunction: false
    }
  },
  // 指定 webpack 要打包時要使用的模塊
  module: {
    // 指定要加載的規則
    rules: [
      {
        // test 指定規則生效的文件
        test: /\.ts$/,
        use: [
          // 配置 Babel
          {
            // 指定加載器
            loader: "babel-loader",
            // 設置 Babel
            options: {
              // 設定預定義的環境
              presets: [
                [
                  // 指定環境插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    // 要兼容的目標瀏覽器
                    targets: {
                      "chrome": "87"
                      // "ie": "11"
                    },
                    // 指定 corejs 版本
                    "corejs": "3",
                    // 使用 corejs 的方式(usage 表示按需加載)
                    "useBuiltIns": "usage"
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ], // 從後往前執行
        include: path.resolve(__dirname, 'src'),
        // 要排除的文件
        exclude: /node-modules/
      },
      // 設置 less 文件的處理
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          // 引入 postcss
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers: "last 2 versions"
                    }
                  ]
                ]
              }
            }
          },
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      // title: "custom title2",
      template: "./src/index.html"
    })
  ],
  // 用來設置引用模塊
  resolve: {
    extensions: ['.ts', '.js']
  }
}

// http://hklifenote.blogspot.com/2019/07/typescript-webpack-ts-loader.html