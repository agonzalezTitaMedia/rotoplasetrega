const path                    = require('path')
const webpack                 = require('webpack')
const HtmlWebpackPlugin       = require('html-webpack-plugin')
const MiniCssExtractPlugin    = require('mini-css-extract-plugin')
const CleanWebpackPlugin      = require('clean-webpack-plugin')
const autoprefixer            = require('autoprefixer')
const UglifyJsPlugin          = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  entry: {
    main          : './src/js/index.js',
    checkout      : './src/js/checkout.js',
    //orderPlace    : './src/js/orderPlaced.js',
    //statics       : './src/js/statics.js',
    mlMain        : './src/js/ml-main.js',
    mlMobile      : './src/js/ml-mobile.js',
    rdmlMain      : './src/js/rd-ml-main.js',
    rdowlCarousel : './src/js/rd-owl-carousel.js',
    stylesLanding : './src/js/styles-landing-tuboplus.js',
    mlProducto    : './src/js/ml-producto.js',
    termaFix    : './src/js/terma-fix.js'
  },
  output: {
    filename: 'js/[name].js'
  },
  devtool: 'source-map',
  resolve: {
    modules: ["node_modules"],
    // directories where to look for modules
    extensions: [
      '.js', '.json', '.jsx',
      '.scss', '.css',           
      '.gif', '.png', '.jpg', '.jpeg', '.svg'
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: false
          }
        }]
      },
      {
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              autoprefixer: {
                browser: ['last 2 versions']
              },
              sourceMap: true,
              plugins: () => [autoprefixer]
            }
          },
          'resolve-url-loader', // requiere sourcemap en sass
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'compressed',
              sourceMap: true
            },
          }
        ],
        test: /\.(css|scss)$/
      },
      {
        test: /\.(jpe?g|png|gif|webp)$/i,
        use: [
          'file-loader?name=assets/[name].[ext]',
          'image-webpack-loader?bypassOnDebug'
        ]
      },
      {
        test: /\.(ttf|eot|woff2?|mp4|mp3|txt|xml|pdf)$/i,
        use: 'file-loader?name=assets/[name].[ext]'
      },
      {
        test: /\.(svg)/,
        use: 'base64-inline-loader?limit=1000&name=[name].[ext]'
      }
    ]
  },
  devServer: {
    disableHostCheck: true
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false,
          },
        },
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: ['default'],
        }
      })
    ],
  },
  plugins: [
    new CleanWebpackPlugin([
      'dist/css/*.*', 'dist/js/*.*'
    ]),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new HtmlWebpackPlugin({
      template: './src/template.html',
      filename: 'index.html',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      template: './src/greensock.html',
      filename: 'greensock.html',
      chunks: ['main']
    }),
    // provide jQuery
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ]
}