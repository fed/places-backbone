<ul class="Places">
    <% _.each(places, function (place) { %>
        <li class="Place">
            <a href="place/<%= place.get('id') %>" class="Place__link">
                <article class="Place__content">
                    <h1 class="Place__title"><%= place.get('name') %></h1>
                    <p class="Place__description"><%= place.get('description') %></p>
                </article>
            </a>
        </li>
    <% }); %>
</ul>
