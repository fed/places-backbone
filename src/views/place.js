import Backbone from 'backbone';
import $ from 'jquery';
import {MAPS_API_KEY} from '../utils/constants';

export default Backbone.View.extend({
  renderLinks() {
    const links = this.model.get('attachments')
      .filter(attachment => attachment.type === 'link')
      .map(link => `<li><a href="${link.url}">${link.url}</a></li>`);

    if (links.length > 0) {
      return `
        <p>Useful links:</p>
        <ul class="Place__links">
          ${links}
        </ul>
      `;
    } else {
      return `<div />`;
    }
  },

  renderImages() {
    const altText = this.model.get('name');
    const images = this.model.get('attachments')
      .filter(attachment => attachment.type === 'image')
      .map(image => `<li><img src="${image.url}" alt="${altText}" /></li>`);

    if (images.length > 0) {
      return `
        <p>Some images:</p>
        <ul class="Place__images">
          ${images}
        </ul>
      `;
    } else {
      return `<div />`;
    }
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
