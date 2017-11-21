import Backbone from 'backbone';

// `Model.extend` sets up the prototype chain
export default Backbone.Model.extend({
  // initialize: function () {
  //   console.log('init);
  // },
  // defaults: {
  //   attachments: []
  // },
  markAsVisited() {
    this.set({ visited: true });
  }
});
