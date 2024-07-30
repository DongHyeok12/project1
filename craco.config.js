const CracoAlias = require("craco-alias");

module.exports = {
  devServer: {
    allowedHosts: "all",
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        tsConfigPath: "tsconfig.paths.json",
      },
    },
  ],
};
