const clientConfig = {
  compress: {
    warnings: false,
    dead_code: true,
    comparisons: false
  },
  mangle: {
    safari10: true
  },
  output: {
    comments: false,
    ascii_only: true
  },
  sourceMap: true
};

const serverConfig = {
  compress: {
    warnings: false,
    dead_code: true,
    comparisons: false
  },
  output: {
    comments: false,
    ascii_only: true
  },
  sourceMap: true,
  mangle: false
};

const BundleEnvPlugins = ({DefinePlugin, optimize}) => {
  if (process.env.NODE_ENV !== 'production') {
    return {serverPlugins: [], clientPlugins: []}
  }

  const BundleEnv = new DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')});

  return {
    serverPlugins: [
      BundleEnv, new optimize.UglifyJsPlugin(serverConfig)
    ],
    clientPlugins: [
      BundleEnv, new optimize.UglifyJsPlugin(clientConfig)
    ]
  }
}

module.exports = BundleEnvPlugins;
