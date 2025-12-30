import postcss from 'postcss';
import postcssImport from 'postcss-import';
import postcssNested from 'postcss-nested';
import postcssCsso from 'postcss-csso';
import autoprefixer from 'autoprefixer';

export default function (eleventyConfig) {
    eleventyConfig.addTemplateFormats('css');

    eleventyConfig.addExtension('css', {
        outputFileExtension: 'css',
        compile: async (content, path) => {
            if (path !== './src/css/app.css') {
                return;
            }

            return async () => {
                let output = await postcss([
                    postcssImport,
                    postcssNested,
                    autoprefixer,
                    postcssCsso
                ]).process(content, {
                    from: path,
                });

                return output.css;
            }
        }
    });
}
