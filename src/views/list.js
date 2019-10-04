import Backbone from 'backbone';
import _ from 'underscore';
import Places from '../collections/places';
import listPlacesTpl from '../templates/list-places.tpl';

export default Backbone.View.extend({
    el: '#root',

    initialize() {
        // Alternatively, we could also do the following:
        // this.collection.on('reset', this.render.bind(this));
        // this.collection.fetch({ reset: true });
        this.collection = new Places();
        this.collection.fetch({
            success: this.render.bind(this)
        });
    },

    render() {
        const compiledTemplate = _.template(listPlacesTpl);
        const markup = compiledTemplate({
            places: this.collection.models
        });

        this.$el.html(markup);
    }
});
