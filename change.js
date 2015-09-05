var $ = require("jquery");

var changes = {
  documentReadyChanges: function() {
    $("body").html("Hello");
  }
}

module.exports = changes;
