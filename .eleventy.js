module.exports = function(eleventyConfig) {
  // Copy static assets to root of output
  eleventyConfig.addPassthroughCopy({ "static": "/" });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
