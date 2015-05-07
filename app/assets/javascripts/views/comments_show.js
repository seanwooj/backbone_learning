window.Todo.Views.CommentsShow = Backbone.View.extend({
  template: function () {
    return this.open ? JST['comments/edit'] : JST['comments/show']
  },

  initialize: function (options) {
    this.open = false;
  },

  events: {
    "click button.destroy": "destroy",
    "dblclick div.content": "beginEditing",
    "submit form.comment": "endEditing"
  },

  render: function () {
    var renderedContent = this.template()({
      comment: this.model
    });

    this.$el.html(renderedContent);

    return this;
  },

  beginEditing: function () {
    this.open = true;
    this.render();
  },

  endEditing: function (event) {
    this.open = false;

    var content = this.$("textarea.comment_content").val();
    this.model.save({ content: content });

    this.render();
  },

  destroy: function (event) {
    this.model.destroy();
  }
})