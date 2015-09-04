var $ = require("jquery");
var changes = require("./change");

$(function() {
  console.log("Document loaded");
  changes.documentReadyChanges();
});
