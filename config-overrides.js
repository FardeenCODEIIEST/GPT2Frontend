module.exports = function override(config, env) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    zlib: false,
    fs: false,
    path: false,
    stream: false,
    os: false,
    buffer: false,
    net: false,
    tls: false,
    crypto: false,
    https: false,
    http: false,
    url: false,
  };
  return config;
};
