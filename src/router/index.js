import Vue from "vue";
import Router from "vue-router";

//import componenti
import home from "../views/home.vue";
import ComponenteForm from "../components/ComponenteForm.vue";
import DatiScritti from "../components/DatiScritti.vue";

Vue.use(Router);
export default new Router({
  //mode history toglie # davanti e utilizza chiamate server
  //mode: 'history',
  // di default mode:'hash'
  routes: [
    {
      path: "/",
      name: "Home",
      component: home
    },
    {
      path: "/dati",
      name: "dati",
      component: ComponenteForm
    },
    {
      path: "/riassunto",
      name: "riassunto",
      component: DatiScritti
    }
  ]
});
