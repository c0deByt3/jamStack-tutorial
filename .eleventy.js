module.exports = function(config) {

    config.addPassthroughCopy('src/js');
    return {
        dir: {
            input: "src",
            output: "dist",
            pathPrefix: "/jamStack-tutorial/"
        }
    };
};