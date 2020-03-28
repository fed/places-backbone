<% if (!place.get('name')) { %>
    <p>Fetching place details...</p>
<% } else { %>
    <article class="place">
        <h1 class="place__title"><%= place.get('name') %></h1>
        <p class="place__description"><%= place.get('description') %></p>

        <div class="place__map">
            <iframe
                width="100%"
                height="450"
                frameborder="0"
                style="border:0"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCyk4WcEUi8zOpM88YckV8pFF8eViWvIUc&q=Milano" allowfullscreen
            >
            </iframe>
        </div>

        <% if (place.get('attachments').length > 0) { %>
            <p>Attachments:</p>
            <ul class="place__attachments">
                <% _(place.get('attachments')).each(attachment => { %>
                    <% if (attachment.type === 'image') { %>
                        <li><img src="<%= attachment.url %>" alt="" /></li>
                    <% } else if (attachment.type === 'link') { %>
                        <li><a href="<%= link %>" target="_blank" rel="noopener noreferrer"><%= attachment.url %></a></li>
                    <% } %>
                <% }); %>
            </ul>
        <% } %>

        <ul class="place__controls">
            <li><button>Edit</button></li>
            <li><button>Delete</button></li>
        </ul>
    </article>
<% }%>
