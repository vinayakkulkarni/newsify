
window._ = require('lodash');

// jQuery globally available; use $ or jQuery
window.$ = window.jQuery = require('jquery');

// Moment.js globally available. use moment()
window.moment = require('moment');

// UUID globally availbale; use uuid()
window.uuid = require('uuid/v4');

// Making sure SUI is pulled in
require('semantic');

/**
 * Vue is a modern JavaScript library for building interactive web interfaces
 * using reactive data binding and reusable components. Vue's API is clean
 * and simple, leaving you to focus on building your next great project.
 */

window.Vue = require('vue');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

// window.axios.defaults.headers.common = {
//     'X-Requested-With'				: 'XMLHttpRequest',
//     'Access-Control-Allow-Headers'	: 'Content-Type'
// };

// this ensures we can use `this.$http.get()` instead of axios.get() 
Vue.prototype.$http = axios;

/** 
 * This will enable us to use lodash within vue interpolations.
 *  see: https://github.com/JeffreyWay/laravel-mix/issues/417#issuecomment-284460383
 */

Vue.prototype._ = _;
Vue.prototype.moment = moment;