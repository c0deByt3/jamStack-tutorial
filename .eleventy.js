module.exports = function(config) {

    // config.addPassthroughCopy('src/js');
    // return {
    //     dir: {
    //         input: "src",
    //         output: "dist",
    //     }
    // }
    
    config.addPassthroughCopy('src/info');
    config.addPassthroughCopy('src/js');

    return {
        dir: {
            input: "src",
            output: "dist",
        }
    };

};