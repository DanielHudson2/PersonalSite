import pluginRss from "@11ty/eleventy-plugin-rss";
import templateFilters from "./plugins/templateFilters.js";
import collections from "./plugins/collections.js";
import processJs from "./plugins/processJs.js";
import processCss from "./plugins/processCss.js";

export default function (eleventyConfig) {
    // Plugins
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(processCss);
    eleventyConfig.addPlugin(processJs);
    eleventyConfig.addPlugin(templateFilters);
    eleventyConfig.addPlugin(collections);

    // Passthrough Copies
    eleventyConfig.addPassthroughCopy('src/assets');
    eleventyConfig.addPassthroughCopy({ 'src/robots.txt': '/robots.txt' });

    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};
