const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
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

    eleventyConfig.addNunjucksFilter("sortByDate", (posts) => {
        return posts.slice().sort((a, b) => {
          return new Date(b.data.date) - new Date(a.data.date);
        });
    });

    eleventyConfig.addExtension("scss", {
		outputFileExtension: "css",
		useLayouts: false,

		compile: async function (inputContent, inputPath) {
			let parsed = path.parse(inputPath);
			if(parsed.name.startsWith("_")) {
				return;
			}

			let result = sass.compileString(inputContent, {
				loadPaths: [
					parsed.dir || ".",
					this.config.dir.includes,
				]
			});

			this.addDependencies(inputPath, result.loadedUrls);

			return async (data) => {
				return result.css;
			};
		},
	});

    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};
