<h2>Add a new place to the list</h2>

<form class="form" id="add-place-form">
    <ul class="form__list">
        <li class="form__list-item">
            <label class="form__label" htmlFor="place-name">
                Place or Activity
            </label>
            <input
                id="place-name"
                type="text"
                class="form__input"
                placeholder="e.g.: Go diving to the Great Barrier Reef"
                data-lpignore="true"
                required
            />
        </li>

        <li class="form__list-item">
            <label class="form__label" htmlFor="place-description">
                Description
            </label>
            <textarea
                id="place-description"
                class="form__input form__textarea"
                rows="4"
                placeholder="e.g.: Home to diverse marine life of the most vivid colours, the Great Barrier Reef offers the opportunity for great adventure."
            />
        </li>

        <li class="form__list-item">
            <label class="form__label" htmlFor="place-lat">
                Latitude
            </label>
            <input
                id="place-lat"
                type="text"
                class="form__input"
                placeholder="e.g.: 21.3956"
                data-lpignore="true"
                required
            />
        </li>

        <li class="form__list-item">
            <label class="form__label" htmlFor="place-lng">
                Longitude
            </label>
            <input
                id="place-lng"
                type="text"
                class="form__input"
                placeholder="e.g.: -157.824"
                data-lpignore="true"
                required
            />
        </li>

        <!-- <li class="form__list-item">
        <label class="form__label" htmlFor="place-address">
          Find in Google Maps
        </label>
        <PlacesAutocomplete
          classs={{
            input: 'form__input'
          }}
          inputProps={{
            htmlFor: 'place-address',
            value: this.state.address,
            onChange: this.onAddressChange
          }}
        />
      </li>

      <li class="form__list-item">
        <label class="form__label">
          Attachments –{' '}
          <button
            onClick={this.onAddAttachment}
            class="form__attachment-add"
          >
            Add another one
          </button>
        </label>
        <ul class="form__list">
          {this.state.attachments.map(attachment => (
            <li
              class="form__list-item form__attachment"
              key={attachment.id}
              // we need this so that we can target the appropriate state field
              id={attachment.id}
            >
              <input
                type="text"
                class="form__input"
                value={attachment.url}
                onChange={this.onAttachmentUrlChange}
              />
              <select
                class="form__attachment-type"
                onChange={this.onAttachmentTypeChange}
              >
                <option value="image">Image</option>
                <option value="video">Video</option>
                <option value="link">Link</option>
              </select>
            </li>
          ))}
        </ul>
      </li> -->

        <li>
            <button type="submit" class="form__submit button">Save</button>
        </li>
    </ul>
</form>
