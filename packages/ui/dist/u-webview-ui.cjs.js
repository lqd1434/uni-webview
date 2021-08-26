'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./u-webview-ui.cjs.prod.js");
} else {
  module.exports = require("./u-webview-ui.cjs.dev.js");
}
