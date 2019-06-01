// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueI18n from 'vue-i18n';
import App from './App';
import router from './router';
import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(VueI18n);

/* eslint-disable no-new */
new Vue({
    i18n: {
        fallbackLocale: 'en'
    },
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});
