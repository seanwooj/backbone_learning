window.Todo.Views.CommentsNew = Backbone.View.extend({
  template: JST["comments/new"],

  events: {
    "submit form": "submit"
  },

  initialize: function (options) {
    this.todo = options.todo;
  },

  render: function () {
    var renderedContent = this.template({
      todo: this.todo
    });

    this.$el.html(renderedContent);

    return this;
  },

  submit: function (event){
    var view = this;

    event.preventDefault();

    var params = $(event.currentTarget).serializeJSON()["comment"];
    var comment = new Todo.Models.Comment(params);

    comment.save({}, {
      success: function () {
        view.todo.comments().add(comment);
      }
    })
  }
});