const markdownIt = require('markdown-it');
const katex = require('katex');
const texmath = require('markdown-it-texmath');

module.exports = function (eleventyConfig) {
  let markdownLibrary = markdownIt({
    html: true,
    breaks: false,
    linkify: true,
  }).use(texmath, {
    engine: katex,
    delimiters: 'dollars',
    katexOptions: { macros: { '\\href': '\\href' } },
  });
  eleventyConfig.setLibrary('md', markdownLibrary);

  // Passthrough copy for KaTeX assets
  eleventyConfig.addPassthroughCopy({
    'node_modules/katex/dist': 'assets/katex',
  });

  // Passthrough copy for specific assets
  eleventyConfig.addWatchTarget('src/css/tailwind.css');
  eleventyConfig.addPassthroughCopy('assets'); // If it exists

  // Watch target for Tailwind output
  eleventyConfig.addWatchTarget('./_site/css/style.css');

  // Add passthrough for any other likely static assets
  eleventyConfig.addPassthroughCopy('*.png');
  eleventyConfig.addPassthroughCopy('*.ico');
  eleventyConfig.addPassthroughCopy('*.webp');

  // HTML Minification
  const htmlmin = require('html-minifier');
  eleventyConfig.addTransform('htmlmin', function (content) {
    if ((this.page.outputPath || '').endsWith('.html')) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
      });
      return minified;
    }
    return content;
  });

  return {
    dir: {
      input: '.',
      output: '_site',
      layouts: '_layouts',
    },
    templateFormats: ['html', 'md', 'njk', 'liquid'],
  };
};
