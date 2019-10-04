import Backbone from 'backbone';
import Place from '../models/place';
import { PLACES_ENDPOINT } from '../utils/constants';

export default Backbone.Collection.extend({
    // This basically means this collection is of type Array<Place>
    model: Place,

    // API URL to hit to populate the collection, used by `collection#fetch`.
    url: PLACES_ENDPOINT,

    // `parse` is called by Backbone whenever a collection's models are returned by the server,
    // and it's used to parse the response from the API. It's passed the raw response object,
    // and should return the array of model attributes to be added to the collection.
    parse(response) {
        return response.data.places
            .map(place => ({
                id: place._id,
                name: place.name,
                description: place.description,
                visited: place.visited,
                location: place.location,
                attachments: place.attachments
            }))
            .reverse();
    },

    // Custom methods
    getVisited() {
        return this.where({ visited: true });
    },

    getPending() {
        return this.where({ visited: false });
    }
});
