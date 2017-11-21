import Backbone from 'backbone';
import $ from 'jquery';
import {MAPS_API_KEY} from './constants';

// Selectors
const $app = $('#app');

// Models
// `Model.extend` sets up the prototype chain
const Place = Backbone.Model.extend({
  markAsVisited() {
    this.set({ visited: true });
  }
});

// Model instance
const place = new Place({
  name: 'Abel Tasman Coast Track',
  description: 'The Abel Tasman Coast Track is a 60 kilometres long walking track within the Abel Tasman National Park in New Zealand.',
  location: {
    lat: -40.9124183,
    lng: 172.9822601
  },
  attachments: [
    {
      url: 'http://www.doc.govt.nz/abeltasmantrack',
      type: 'link'
    },
    {
      url: 'http://www.doc.govt.nz/pagefiles/12943/abel-tasman-1920.jpg',
      type: 'image'
    }
  ]
});

// Views
const PlaceView = Backbone.View.extend({
  renderLinks() {
    const links = this.model.get('attachments')
      .filter(attachment => attachment.type === 'link')
      .map(link => `<li>
        <a href="${link.url}">${link.url}</a>
      </li>`);

    return links.length > 0 && `
      <p>Useful links:</p>
      <ul class="Place__links">
        ${links}
      </ul>
    `;
  },

  renderImages() {
    const altText = this.model.get('name');
    const images = this.model.get('attachments')
      .filter(attachment => attachment.type === 'image')
      .map(image => `<li><img src="${image.url}" alt="${altText}" /></li>`);

    return images.length > 0 && `
      <p>Some images:</p>
      <ul class="Place__images">
        ${images}
      </ul>
    `;
  },

  render() {
    const location = this.model.get('location');
    const html = `
      <article class="Place">
        <h1 class="Place__title">${this.model.get('name')}</h1>
        <p>${this.model.get('description')}</p>
        <div class="Place__map">
          <iframe
            width="100%"
            height="280px"
            frameborder="0"
            src="https://www.google.com/maps/embed/v1/view?key=${MAPS_API_KEY}&center=${location.lat},${location.lng}&zoom=6"
            allowfullscreen>
          </iframe>
        </div>
        ${this.renderImages()}
        ${this.renderLinks()}
        <ul class="Place__controls">
          <li><button>Mark as visited</button></li>
          <li><button>Edit</button></li>
          <li><button>Delete</button></li>
        </ul>
      </article>
    `;

    $(this.el).html(html);
  }
});

// View instances
const placeView = new PlaceView({ model: place });

// place.set({ title: 'My Backbone Hurts' });

// Call render on appointmentView in order to set its content
placeView.render();

//Remember, you can use appointmentView.el to get the dom element of the appointmentView
// Set the html of #app element to the appointmentView element
$app.html(placeView.el);
