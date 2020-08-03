import Vue from "vue";
import Vuex from "vuex";

//import moduli
import formDati from "./modules/formDati.module";
import stampoDati from "./modules/stampoDati.module";

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    formDati,
    stampoDati
  },
  state: {},
  mutations: {},
  actions: {}
});
