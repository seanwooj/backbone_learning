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

Backbone.CompositeView = Backbone.View.extend({
  subviews: function () {
    if (!this._subviews) {
      this._subviews = {};
    }

    return this._subviews;
  },

  addSubview: function (selector, view) {
    var selectorSubviews =
      this.subviews()[selector] || (this.subviews()[selector] = []);

    selectorSubviews.push(view);
  },

  renderSubviews: function () {
    var view = this;

    _(this.subviews()).each(function (selectorSubviews, selector) {
      var $selectorElement = this.$(selector);
      $selectorElement.empty();

      _(selectorSubviews).each(function (subview) {
        $selectorElement.append(subview.render().$el);
        subview.delegateEvents();
      });

    });
  }

});

$(Todo.initialize);