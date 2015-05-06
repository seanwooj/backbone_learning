window.Todo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function() {
    // just initializes router
    new Todo.Routers.AppRouter();
    // start listening to changes in the location bar
    Backbone.history.start();
  }
};

$(Todo.initialize);