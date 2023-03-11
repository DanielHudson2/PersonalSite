const eleventySass = require("eleventy-sass");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventySass);
    eleventyConfig.addPassthroughCopy('src/assets');
    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};