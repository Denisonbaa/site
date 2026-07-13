const pluginRss = require("@11ty/eleventy-plugin-rss");
const markdownIt = require("markdown-it");
const md = new markdownIt({ html: true });

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

  // Render a front matter markdown string to HTML
  eleventyConfig.addFilter("markdownify", (content) => md.render(content || ""));

  // Human-readable date: "March 2026"
  eleventyConfig.addFilter("readableDate", function(dateObj) {
    return new Date(dateObj).toLocaleDateString("en-US", { year: "numeric", month: "long" });
  });

  // Full date: "March 1, 2026"
  eleventyConfig.addFilter("fullDate", function(dateObj) {
    return new Date(dateObj).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  });

  // Format number with commas for display
  eleventyConfig.addFilter("numberString", function(n) {
    return Number(n).toLocaleString("en-US");
  });

  // RFC 2822 date for RSS feeds
  eleventyConfig.addFilter("dateToRfc2822", function(dateObj) {
    return new Date(dateObj).toUTCString();
  });

  // Pass through static assets unchanged
  eleventyConfig.addPassthroughCopy("public");
  eleventyConfig.addPassthroughCopy({ "public": "." });
  eleventyConfig.addPassthroughCopy("admin");

  // Newsletter collection — sorted newest first
  eleventyConfig.addCollection("newsletter", function(collectionApi) {
    return collectionApi
      .getFilteredByGlob("newsletter/*.md")
      .sort((a, b) => b.date - a.date);
  });

  // Perspectives collection — sorted oldest first (Vol. 01 first)
  eleventyConfig.addCollection("perspectives", function(collectionApi) {
    return collectionApi
      .getFilteredByGlob("perspectives/*.md")
      .sort((a, b) => a.date - b.date);
  });

  return {
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};