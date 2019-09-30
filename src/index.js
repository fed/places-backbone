import Backbone from 'backbone';
import Router from './router';

const router = new Router();

/*
 * Once instantiated, we can also hook up to route changes using events:
 * router.on('route:home', function () { ... });
 */

Backbone.history.start();
