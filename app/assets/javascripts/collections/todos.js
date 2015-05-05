window.Todo.Collections.Todos = Backbone.Collection.extend({
  url: "/api/todos",
  model: Todo.Models.Todo
});

window.Todo.Collections.todos = new window.Todo.Collections.Todos()