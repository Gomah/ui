const withTM = require("next-transpile-modules")(["@acme/react"]);

module.exports = withTM({
  reactStrictMode: true,
});
