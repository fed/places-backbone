import Backbone from 'backbone';
import ListPlacesView from './views/list';
import AddPlaceView from './views/add';

export default Backbone.Router.extend({
    routes: {
        '': 'home',
        add: 'add'
    },

    home() {
        const listView = new ListPlacesView();

        listView.render();
    },

    add() {
        const addView = new AddPlaceView();

        addView.render();
    }
});
