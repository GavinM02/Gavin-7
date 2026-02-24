module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/styles");

  eleventyConfig.addShortcode("alert", function(text) {
    return `<div class="alert">${text}</div>`;
  });

};