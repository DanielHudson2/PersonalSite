export default function (eleventyConfig) {
    eleventyConfig.addCollection("servicesPages", function (collection) {
        return collection.getAll().filter(function (item) {
            return item.inputPath.includes("/services/");
        });
    });
}
