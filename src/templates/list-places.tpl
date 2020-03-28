<% if (places.length === 0) { %>
    <p>Fetching places...</p>
<% } %>

<ul class="places">
    <% _.each(places, function (place) { %>
        <li class="place">
            <a href="#/view/<%= place.get('id') %>" class="place__link">
                <article class="place__content">
                    <h1 class="place__title"><%= place.get('name') %></h1>
                    <p class="place__description"><%= place.get('description') %></p>
                </article>
            </a>
        </li>
    <% }); %>
</ul>
