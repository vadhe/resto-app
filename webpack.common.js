const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 70000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.resolve(__dirname, 'src/scripts/service-worker.js'),
    }),
    new WebpackPwaManifest({
      name: 'Resto App',
      short_name: 'Resto App',
      description: 'Resto Suka Suka',
      background_color: '#ffffff',
      crossorigin: 'use-credentials',
      options: {
        filename: 'manifest.json',
        name: 'App',
        orientation: 'portrait',
        display: 'fullscreen',
        start_url: '.',
        crossorigin: null,
        inject: true,
        fingerprints: true,
        ios: false,
        publicPath: null,
        includeDirectory: true,
      },
      icons: [
        {
          src: path.resolve('src/public/icons/icon-192x192.png'),
          size: '1024x1024',
          purpose: 'any maskable',
        },
        {
          src: path.resolve('src/public/icons/icon-256x256.png'),
          size: '1024x1024',
          purpose: 'any maskable',
        },
        {
          src: path.resolve('src/public/icons/icon-384x384.png'),
          size: '1024x1024',
          purpose: 'any maskable',
        },
        {
          src: path.resolve('src/public/icons/icon-512x512.png'),
          size: '1024x1024',
          purpose: 'any maskable',
        },
      ],
    }),
    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 30,
          progressive: true,
        }),
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public'),
          to: path.resolve(__dirname, 'dist'),
          globOptions: {
            ignore: ['**/images/heros**'],
          },
        },
      ],
    }),
    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /\.(jpe?g|png)/,
          options: {
            quality: 50,
          },
        },
      ],
      overrideExtension: true,
    }),
    new BundleAnalyzerPlugin(),
  ],
};
