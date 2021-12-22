const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, '../../tsconfig.base.json'), [
  '@nx-mfe-poc/shared/data-store',
]);

module.exports = {
  output: {
    uniqueName: 'shell',
    publicPath: 'auto',
  },
  optimization: {
    runtimeChunk: false,
    minimize: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        gallery: 'gallery@http://localhost:3005/remoteEntry.js',
        groceries: 'groceries@http://localhost:3001/remoteEntry.js',
        takeaways: 'takeaways@http://localhost:3002/remoteEntry.js',
        login: 'login@http://localhost:3003/remoteEntry.js',
        profile: 'profile@http://localhost:3004/remoteEntry.js',
      },
      shared: {
        '@angular/core': {
          singleton: true
        },
        '@angular/common': {
          singleton: true
        },
        '@angular/common/http': {
          singleton: true
        },
        '@angular/router': {
          singleton: true
        },
        '@ngrx/store': {
          singleton: true
        },
        '@ngrx/effects': {
          singleton: true
        },
        ...sharedMappings.getDescriptors(),
      },
    }),
    sharedMappings.getPlugin(),
  ],
};
