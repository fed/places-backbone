import Backbone from 'backbone';
import ListPlacesView from './views/list';
import AddPlaceView from './views/add';
import PlaceDetailsView from './views/details';
import RemovePlaceView from './views/remove';

export default Backbone.Router.extend({
    routes: {
        '': 'home',
        add: 'add',
        'view/:id': 'details',
        'remove/:id': 'remove'
    },

    home() {
        const listView = new ListPlacesView();

        listView.render();
    },

    add() {
        const addView = new AddPlaceView();

        addView.render();
    },

    details(id) {
        const detailsView = new PlaceDetailsView({ id });

        detailsView.render();
    },

    remove(id) {
        const removeView = new RemovePlaceView({ id });

        removeView.render();
    }
});
