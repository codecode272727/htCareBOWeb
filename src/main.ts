import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import LoaderForm from '@/components/Loader/LoaderForm.vue'
import VueWait from 'vue-wait'

//import external resource
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
import { Component } from 'vue-property-decorator'
Component.registerHooks(['validations']);//register hook for vuelidate

import './styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuelidate);
Vue.use(VueWait);
//Vue.use(vuelidateErrorExtractor,
//    {
//        template: templates.singleErrorExtractor.foundation6,
//        i18n: 'validation'
//    });
Vue.component('LoaderForm', LoaderForm);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
