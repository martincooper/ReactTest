// config-overrides.js
module.exports = function override(config) {
    if (config.devServer) {
        config.devServer.setupMiddlewares = (middlewares, devServer) => {
            // Move any middleware setup logic here
            return middlewares;
        };
    }
    return config;
};