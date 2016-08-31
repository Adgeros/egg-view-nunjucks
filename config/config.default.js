'use strict';

const path = require('path');

module.exports = function(appInfo) {
  const exports = {};

  /**
   * View options
   * @member Config#view
   * @property {String} dir - full path of template dir, support multiple path by using comma, defaults to `{app_root}/app/view`.
   * @property {Boolean} cache - whether cache template, default to true except false at local env.
   */
  exports.view = {
    dir: path.join(appInfo.baseDir, 'app/view'),
    cache: true,
  };

  return exports;
};
