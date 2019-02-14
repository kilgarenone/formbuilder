const nano = require("nano");

module.exports = nano(
  process.env.COUCHDB_URL || `http://admin:admin@127.0.0.1:5984`
);
