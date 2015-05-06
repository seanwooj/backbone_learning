window.Todo.Views.TodosIndex = Backbone.View.extend({
  template: JST["todos"],

  events: {
    "click button.refresh": "refresh"
  },

  initialize: function (options) {
    this.listenTo(
      this.collection, 
      'sync add',
      this.render.bind(this)
    );
  },

  render: function () {
    var renderedContent = this.template({
      todos: this.collection
    });

    this.$el.html(renderedContent);

    return this;
  },

  refresh: function () {
    this.collection.fetch();
  }
});
