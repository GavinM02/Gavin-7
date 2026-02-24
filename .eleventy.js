module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/css");

  eleventyConfig.addShortcode("alert", function(text) {
    return `<div class="alert">${text}</div>`;
  });

};