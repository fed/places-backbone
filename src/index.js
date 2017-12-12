import $ from 'jquery';
import PlacesView from './views/places';

// TodoMVC Example:
// http://backbonejs.org/docs/todos.html (annotated source)
// https://github.com/tastejs/todomvc/tree/gh-pages/examples/backbone

// Selectors
const $app = $('#app');

// View instances
const placesView = new PlacesView();

// Call render on appointmentView in order to set its content
placesView.render();

//Remember, you can use appointmentView.el to get the dom element of the appointmentView
// Set the html of #app element to the appointmentView element
$app.html(placesView.el);
