import Backbone from 'backbone';
import Place from '../models/place';
import {GET_PLACES_ENDPOINT} from '../utils/constants';

export default Backbone.Collection.extend({
  model: Place,
  url: GET_PLACES_ENDPOINT,
  parse(response) {
    return response.data.places;
  }
});
