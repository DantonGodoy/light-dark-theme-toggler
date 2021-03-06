const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  stats: {
    // Hides HTML entrypoint undefined warning message.
    children: false
  },
  plugins: [
    // Clean up the dist folder before each new build.
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin(
      {
        template: './src/index.html',
        filename: './index.html'
      }
    ),
    new MiniCssExtractPlugin(
      {
        filename: isDevelopment ? '[name].css' : '[name].[hash].css',
        chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
      }
    )
  ],
  mode: isDevelopment ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: !isDevelopment
          }
        }]
      },
      {
        test: /\.module\.s(a|c)ss$/,
          loader: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: isDevelopment
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDevelopment
              }
            }
          ]
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
            sourceMap: isDevelopment
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: !isDevelopment
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              webp: {
                quality: 75
              }
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.gif', '.png', '.jpg', '.jpeg', '.svg']
  },
  output: {
    filename: isDevelopment ? '[name].js' : '[name].[hash].js'
  }
}