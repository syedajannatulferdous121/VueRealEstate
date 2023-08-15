import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import PropertyList from './components/PropertyList.vue'
import PropertyDetails from './components/PropertyDetails.vue'
import Favorites from './components/Favorites.vue'
import Search from './components/Search.vue'
import UserProfile from './components/UserProfile.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', component: PropertyList },
  { path: '/property/:id', component: PropertyDetails },
  { path: '/favorites', component: Favorites },
  { path: '/search', component: Search },
  { path: '/profile', component: UserProfile }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
