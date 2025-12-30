export default function (eleventyConfig) {
    eleventyConfig.addNunjucksFilter("sortByDate", (posts) => {
        return posts.slice().sort((a, b) => {
          return new Date(b.data.date) - new Date(a.data.date);
        });
    });

    eleventyConfig.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));
}
