import Backbone from 'backbone';

// `Model.extend` sets up the prototype chain
export default Backbone.Model.extend({
    // initialize: function () {
    //   console.log('init);
    // },

    defaults: {
        visited: false,
        images: [],
        links: []
    },

    toggle() {
        this.set({ visited: !this.get('visited') });
    }
});
