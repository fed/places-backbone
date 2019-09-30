import Backbone from 'backbone';
import PlacesView from './views/places';

const placesView = new PlacesView();

export default Backbone.Router.extend({
    routes: {
        '': 'home'
    },

    home() {
        console.log('Router#home was called!');
        placesView.render();
    }
});
