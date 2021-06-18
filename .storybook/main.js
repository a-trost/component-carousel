const { getStoriesPaths } = require("slice-machine-ui/helpers/storybook");

module.exports = {
  stories: [...getStoriesPaths(), "../slices/**/*.stories.[tj]s"],
};
