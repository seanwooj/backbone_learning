window.Todo.Collections.TodoComments = Backbone.Collection.extend({
  initialize: function(models, options){
    this.todo = options.todo;
  },

  url: function(){
    return this.todo.url() + "/comments";
  },

  model: Todo.Models.Comment
});