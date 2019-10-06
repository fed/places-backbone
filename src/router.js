import Backbone from 'backbone';
import ListPlacesView from './views/list';
import AddPlaceView from './views/add';
import RemovePlaceView from './views/remove';

export default Backbone.Router.extend({
    routes: {
        '': 'home',
        add: 'add',
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

    remove(id) {
        const removeView = new RemovePlaceView({ id });

        removeView.render();
    }
});
