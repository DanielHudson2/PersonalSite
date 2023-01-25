const eleventySass = require("eleventy-sass");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventySass);
    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};