import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import Place from '../models/place';
import { router } from '..';
import { listView } from '../router';
import addPlaceTpl from '../templates/add-place.tpl';

export default Backbone.View.extend({
    el: '#root',

    // Format:
    // 'event-name element-selector': 'event-handler-name'
    events: {
        'submit #add-place-form': 'savePlace'
    },

    savePlace: function(event) {
        event.preventDefault();

        const place = new Place();
        const placeDetails = {
            name: $('#place-name').val(),
            description: $('#place-description').val(),
            location: {
                lat: $('#place-lat').val(),
                lng: $('#place-lng').val()
            }
        };

        place.save(placeDetails, {
            success: function() {
                console.log('success callback', place);
                listView.update();
                router.navigate('/', { trigger: true });
            }
        });
    },

    render() {
        const compiledTemplate = _.template(addPlaceTpl);
        const markup = compiledTemplate();

        this.$el.html(markup);
    }
});
