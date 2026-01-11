const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  let markdownLibrary = markdownIt({
    html: true,
    breaks: false,
    linkify: true
  });
  eleventyConfig.setLibrary("md", markdownLibrary);
  // Passthrough copy for specific assets
  eleventyConfig.addWatchTarget("src/css/tailwind.css");
  eleventyConfig.addPassthroughCopy("dp.jpg");
  eleventyConfig.addPassthroughCopy("assets"); // If it exists

  // Watch target for Tailwind output
  eleventyConfig.addWatchTarget("./_site/css/style.css");

  // Add passthrough for any other likely static assets
  eleventyConfig.addPassthroughCopy("*.png");
  eleventyConfig.addPassthroughCopy("*.ico");

  return {
    dir: {
      input: ".",
      output: "_site",
      layouts: "_layouts"
    },
    templateFormats: ["html", "md", "njk", "liquid"]
  };
};
