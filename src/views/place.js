import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

export default Backbone.View.extend({
  // The DOM element for a todo item is a list item
  // tagName: 'li',

  // ... with a class of "Place"
  // className: 'Place',

  // Cache the template function for a single item.
  template: _.template($('#item-template').html()),

  // The DOM events specific to an item.
  events: {
    'click .toggle': 'toggleVisited',
    'dblclick .view': 'edit',
    'click a.destroy': 'clear',
    'keypress .edit': 'updateOnEnter',
    'blur .edit': 'close'
  },

  // The TodoView listens for changes to its model, re-rendering.
  // Since there’s a one-to-one correspondence between a Place and a PlaceView
  // in this app, we set a direct reference on the model for convenience.
  initialize() {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
  },

  // Toggle the "visited" state of the model.
  toggleVisited() {
    this.model.toggle();
  },

  // Switch this view into "editing" mode, displaying the input field.
  edit() {
    this.$el.addClass('editing');
    this.input.focus();
  },

  // Close the "editing" mode, saving changes to the todo.
  close() {
    var value = this.input.val();
    if (!value) {
      this.clear();
    } else {
      this.model.save({ title: value });
      this.$el.removeClass('editing');
    }
  },

  // If you hit enter, we’re done editing the item.
  updateOnEnter(e) {
    if (e.keyCode == 13) this.close();
  },

  // Remove the item, destroy the model.
  clear: function() {
    this.model.destroy();
  },

  // Re-render the titles of the item.
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.toggleClass('visited', this.model.get('visited'));
    this.input = this.$('.edit');

    return this;
  }
});
