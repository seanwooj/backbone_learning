window.Todo.Views.TodosShow = Backbone.View.extend({
  template: JST['todos/show'],

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.comments(), "sync add", this.render)
  },

  render: function () {
    var renderedContent = this.template({
      todo: this.model
    })

    this.$el.html(renderedContent);

    // TODO - don't like rebuilding this every time.
    var commentNewView = new Todo.Views.CommentsNew({
      todo: this.model
    });
    this.$(".comment-new").html(commentNewView.render().$el);

    return this;
  }
});