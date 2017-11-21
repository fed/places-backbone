import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import Place from '../models/place';
import Places from '../collections/places';
import PlaceView from '../views/place';

export default Backbone.View.extend({
  initialize() {
    this.collection = new Places();
    this.collection.on('reset', this.render.bind(this));
    this.collection.fetch({ reset: true });
  },

  renderPlaces() {
    return this.collection.toJSON().map(data => {
      const placeModelInstance = new Place(data);
      const placeView = new PlaceView({ model: placeModelInstance });

      placeView.render();

      return $(placeView.el).html();
    });
  },

  render() {
    if (this.collection.toJSON().length === 0) {
      $(this.el).html('<p>Cargando...</p>');
    } else {
      const html = `
        <ul class="Places">
          ${this.renderPlaces()}
        </ul>
      `;

      $(this.el).html(html);
    }
  }
});
