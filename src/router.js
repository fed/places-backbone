import Backbone from 'backbone';
import ListPlacesView from './views/list';
import AddPlaceView from './views/add';

export const listView = new ListPlacesView();
const addView = new AddPlaceView();

export default Backbone.Router.extend({
    routes: {
        '': 'home',
        add: 'add'
    },

    home() {
        listView.render();
    },

    add() {
        addView.render();
    }
});
