window.Todo.Views.TodosShow = Backbone.CompositeView.extend({
  template: JST['todos/show'],

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.comments(), "sync add remove", this.render);

    // this.model.comments().each(function (comment) {
    //   var commentShowView = new Todo.Views.CommentsShow({
    //     model: comment
    //   });

    //   this.addSubview(".comments", commentsShowView);

    //   // this.$(".comments").append(commentShowView.render().$el);
    // });

    var commentNewView = new Todo.Views.CommentsNew({
      todo: this.model
    });

    this.addSubview(".comment-new", commentNewView);
    // this.$(".comment-new").html(commentNewView.render().$el);
  },

  render: function () {
    var renderedContent = this.template({
      todo: this.model
    })

    this.$el.html(renderedContent);
    this.renderSubviews();


    return this;
  }
});