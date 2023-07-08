const eleventySass = require("eleventy-sass");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventySass);
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPassthroughCopy('src/assets');
    eleventyConfig.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));
    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};