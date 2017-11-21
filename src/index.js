import Backbone from 'backbone';
import $ from 'jquery';
import {MAPS_API_KEY, GET_PLACES_ENDPOINT} from './utils/constants';
import PlacesCollection from './collections/places';
import PlacesView from './views/places';

// Selectors
const $app = $('#app');

// View instances
const placesView = new PlacesView();

// Call render on appointmentView in order to set its content
placesView.render();

//Remember, you can use appointmentView.el to get the dom element of the appointmentView
// Set the html of #app element to the appointmentView element
$app.html(placesView.el);
