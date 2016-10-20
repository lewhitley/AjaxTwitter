class UsersSearch {
  constructor(el){
    this.$el = $(el);
    this.input = $(el).find("input");
    this.ul = $(el).find("ul");
    this.handleInput();
  }

  handleInput() {
    let that = this;
    this.$el.on("input", event => {
      event.preventDefault();
      // debugger
      $.ajax({
        method: "GET",
        url: "/users/search",
        dataType: "json",
        data: {query: this.input.val()},
        success: function (fetched) {
          console.log(fetched);
          this.renderResults(fetched);
        }.bind(this)
      });
    });
  }

  renderResults(fetched) {
    // debugger
    this.ul.empty();
    fetched.forEach( user => {
      let $li = $(`<li><a href="/users/${user.id}">${user.username}</a>
      
       </li>`);
      this.ul.append($li);
    });
  }
}

module.exports = UsersSearch;
