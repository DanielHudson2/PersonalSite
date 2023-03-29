const eleventySass = require("eleventy-sass");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventySass);
    eleventyConfig.addPassthroughCopy('src/assets');
    eleventyConfig.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));
    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};