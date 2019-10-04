import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import Place from '../models/place';
import addPlaceTpl from '../templates/add-place.tpl';
import { router } from '..';

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

        // Update the model instance with the details from the form.
        place.set(placeDetails);

        // The first parameter is the attributes hash which, as in `Model#set`,
        // should contain the attributes you'd like to change.
        // Keys that aren't mentioned won't be altered, but a complete
        // representation of the resource will be sent to the server.
        // Here `null` means "sync the whole thing".
        place.save(null, {
            success: function() {
                // We need to pass in `trigger: true` to also call the route function.
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
