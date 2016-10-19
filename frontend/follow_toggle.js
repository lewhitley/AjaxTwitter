class FollowToggle {
  constructor(el){
    this.$el = $(el);
    this.userId = $(el).data("user-id");
    this.followState = $(el).data("initial-follow-state");
    this.render();
    this.handleClick();
  }

  render() {
    if (this.followState === true){
      this.$el.html("Unfollow!");
    } else {
      this.$el.html("Follow!");
    }
  }

  handleClick() {
    this.$el.on("click", event => {
      event.preventDefault();
      $.ajax ({
        method: this.followState ? "DELETE" : "POST",
        url: `/users/${this.userId}/follow`,
        dataType: "json",
        success: function(followData){
          console.log("success");
          this.toggleState();
          this.render();
        }.bind(this)
      });
      this.waiting();
    });
  }

  toggleState() {
    if (this.followState === true) {
      this.followState = false;
    } else {
      this.followState = true;
    }
  }

  waiting() {
    if (this.followState === true) {
      this.$el.html("unfollowing");
    } else {
      this.$el.html("following");
    }
  }



}

module.exports = FollowToggle;
