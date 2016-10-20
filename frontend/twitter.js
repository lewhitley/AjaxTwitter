const FollowToggle = require("./follow_toggle.js");
const UsersSearch = require("./users_search.js");

$(() => {
  $(".follow-toggle").each(function(index, elem) {
    new FollowToggle(elem);
  });
});

$(() => {
  $(".users-search").each(function(index, elem) {
    new UsersSearch(elem);
  });
});
