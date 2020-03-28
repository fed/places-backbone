import Backbone from 'backbone';
import _ from 'underscore';
import Place from '../models/place';
import placeDetailsTpl from '../templates/place-details.tpl';

export default Backbone.View.extend({
    el: '#root',

    preinitialize(options) {
        this.id = options.id;
        this.model = new Place();
        this.model.set({ id: this.id });
        this.model.fetch({
            success: model => {
                this.model = model;
                this.render();
            }
        });
    },

    render() {
        const compiledTemplate = _.template(placeDetailsTpl);
        const markup = compiledTemplate({
            place: this.model
        });

        this.$el.html(markup);
    }
});
