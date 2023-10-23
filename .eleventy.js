const eleventySass = require("eleventy-sass");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventySass);
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPassthroughCopy('src/assets');
    eleventyConfig.addPassthroughCopy('src/scripts');
    eleventyConfig.addPassthroughCopy({ 'src/robots.txt': '/robots.txt' });
    eleventyConfig.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));
    eleventyConfig.addCollection("servicesPages", function (collection) {
        return collection.getAll().filter(function (item) {
            return item.inputPath.includes("/services/");
        });
    });
    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};