const FollowToggle = require("./follow_toggle.js");


$(() => {
  $(".follow-toggle").each(function(index, elem) {
    new FollowToggle(elem);
  });
});
