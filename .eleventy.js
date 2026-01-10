module.exports = function(eleventyConfig) {
  // Passthrough copy for specific assets
  eleventyConfig.addPassthroughCopy("dp.jpg");
  // If there are other static files (like PDFs in teaching/), we might need to copy them.
  // The teaching folder contains HTML files which 11ty will process, but if there are PDFs inside subfolders,
  // we need to make sure they are carried over.
  // Based on the file list, teaching/PDE has PDFs inside (implied by previous ls output? No, I only saw the dir).
  // Let's assume we want to pass through everything in teaching that IS NOT a template.
  // But wait, 11ty by default processes html/md.
  // If teaching/ has PDFs, we should probably add passthrough for them.
  // Let's safe-bet and add passthrough for common static formats if they exist,
  // or just copy the whole folder structures if they are static assets.
  // HOWEVER, `teaching` has `teaching.html` (which is a page) and `teaching/` dir.
  // If existing structure works in Jekyll, it likely relies on standard static file handling.
  
  // Let's just pass through specific known static assets for now.
  // The user has 'teaching/PDE' which might contain PDFs.
  eleventyConfig.addPassthroughCopy("teaching/**/*.pdf");  
  eleventyConfig.addPassthroughCopy("cv/**/*.pdf"); // Just in case
  eleventyConfig.addPassthroughCopy("assets"); // If it exists
  eleventyConfig.addPassthroughCopy("css"); // If it exists
  
  // Add passthrough for any other likely static assets
  eleventyConfig.addPassthroughCopy("*.png");
  eleventyConfig.addPassthroughCopy("*.ico");
  
  // Existing layout alias if needed, but 11ty looks in _layouts by default if configured.
  
  return {
    dir: {
      input: ".",
      output: "_site",
      layouts: "_layouts"
    },
    templateFormats: ["html", "md", "njk", "liquid"]
  };
};
