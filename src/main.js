// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FieldText from './components/FieldText.vue'
import FieldStates from './components/FieldStates.vue'
import FieldPostalCode from './components/FieldPostalCode.vue'
import FieldPhone from './components/FieldPhone.vue'
import FieldRecap from './components/FieldRecap.vue'
import FormGenerator from './components/FormGenerator.vue'
import RecapGenerator from './components/RecapGenerator.vue'
import FormField from './components/FormField.vue'

Vue.config.productionTip = false

Vue.component('field-text', FieldText)
Vue.component('field-states', FieldStates)
Vue.component('field-postalcode', FieldPostalCode)
Vue.component('field-phone', FieldPhone)
Vue.component('field-recap', FieldRecap)
Vue.component('form-generator', FormGenerator)
Vue.component('recap-generator', RecapGenerator)
Vue.component('form-field', FormField)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
