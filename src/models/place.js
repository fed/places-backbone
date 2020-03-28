import Backbone from 'backbone';
import { PLACES_ENDPOINT } from '../utils/constants';

/*
 * Backbone.Model: Models are the heart of any JavaScript application,
 * containing the interactive data as well as a large part of the logic surrounding it:
 * conversions, validations, computed properties, and access control.
 * You extend Backbone.Model with your domain-specific methods,
 * and Model provides a basic set of functionality for managing changes.
 */

export default Backbone.Model.extend({
    urlRoot: PLACES_ENDPOINT,

    defaults: {
        visited: false,
        attachments: [],
        location: {
            lat: null,
            lng: null
        }
    },

    parse(response) {
        return response.data;
    }
});
