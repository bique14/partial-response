const filterObjectByFields = require("./lib/partialResponse");

module.exports = function (config = { query: "fields" }) {
  function wrap(resJson) {
    return function (obj) {
      const fields = this.req.query[config.query];

      if (fields) {
        const filteredObj = filterObjectByFields(obj, fields);
        return resJson.call(this, filteredObj);
      } else {
        return resJson.apply(this, arguments);
      }
    };
  }

  return function (req, res, next) {
    res.json = wrap(res.json.bind(res));
    next();
  };
};
