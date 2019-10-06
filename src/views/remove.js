import Backbone from 'backbone';
import _ from 'underscore';
import Place from '../models/place';
import removePlaceTpl from '../templates/remove-place.tpl';
import { router } from '..';

export default Backbone.View.extend({
    el: '#root',

    // Format:
    // 'event-name element-selector': 'event-handler-name'
    events: {
        'click #confirm-remove-place': 'removePlace'
    },

    preinitialize(options) {
        this.id = options.id;
    },

    removePlace: function() {
        const place = new Place();

        place.set({ id: this.id });
        place.destroy({
            success() {
                router.navigate('/', { trigger: true });
            }
        });
    },

    render() {
        const compiledTemplate = _.template(removePlaceTpl);
        const markup = compiledTemplate();

        this.$el.html(markup);
    }
});
