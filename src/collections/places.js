import Backbone from 'backbone';
import Place from '../models/place';
import { GET_PLACES_ENDPOINT } from '../utils/constants';

export default Backbone.Collection.extend({
  // This basically means this collection is a Array<Place>
  model: Place,

  // API URL to hit to populate the collection
  url: GET_PLACES_ENDPOINT,

  // Parse response from the API
  parse(response) {
    return response.data.places.map(place => ({
      id: place._id,
      name: place.name,
      description: place.description,
      visited: place.visited,
      lat: place.location.lat,
      lng: place.location.lng,
      images: place.attachments
        .filter(item => item.type === 'image')
        .map(item => item.url),
      links: place.attachments
        .filter(item => item.type === 'link')
        .map(item => item.url)
    }));
  },

  // Filter out all visited places
  visited() {
    return this.where({ visited: true });
  },

  pending() {
    return this.where({ visited: false });
  }
});
