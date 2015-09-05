import $ from "jquery";

export default {
  documentReadyChanges: () => $("body").html("Hello")
}
