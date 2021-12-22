const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, '../../tsconfig.base.json'), [
  '@nx-mfe-poc/shared/data-store',
]);

module.exports = {
  output: {
    uniqueName: 'gallery',
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
      name: 'gallery',
      filename: 'remoteEntry.js',
      exposes: {
        './Module': 'apps/gallery/src/app/remote-entry/entry.module.ts',
      },
      shared: {
        '@angular/core': {
          singleton: true,
        },
        '@angular/common': {
          singleton: true,
        },
        '@angular/common/http': {
          singleton: true,
        },
        '@angular/router': {
          singleton: true,
        },
        '@ngrx/store': {
          singleton: true,
        },
        '@ngrx/effects': {
          singleton: true,
        },
        ...sharedMappings.getDescriptors(),
      },
    }),
    sharedMappings.getPlugin(),
  ],
};
