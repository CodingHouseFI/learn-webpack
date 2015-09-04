var $ = require("jquery");

var changes = {
  documentReadyChanges: function() {
    $("body").html("Howdy!!!");
  }
}


module.exports = changes;
