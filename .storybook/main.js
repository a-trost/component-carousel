// const { getStoriesPaths } = require("slice-machine-ui/helpers/storybook");

module.exports = {
  stories: [
    "../components/**/*.stories.js",
    `../.slicemachine/assets/slices/*/*.stories.js`,
    `../customtypes/**/*.stories.js`,
  ],
};
