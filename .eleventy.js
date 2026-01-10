module.exports = function (eleventyConfig) {
  // Passthrough copy for specific assets
  eleventyConfig.addPassthroughCopy("dp.jpg");
  eleventyConfig.addPassthroughCopy("teaching/**/*.pdf");
  eleventyConfig.addPassthroughCopy("cv/**/*.pdf"); // Just in case
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
