const withTM = require("next-transpile-modules")(["next-slicezone"]);

module.exports = {
  ...withTM(),
  images: {
    domains: ["images.prismic.io"],
  },
};
