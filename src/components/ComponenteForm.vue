<template>
  <div class="container">
    <form>
      <div class="form-row">
        <div class="col-12">
          <label for="nom">Nome</label>
          <input type="text" id="nom" v-model="dati.nome" class="form-control" placeholder="Nome">
        </div>
        <div class="col-12">
          <label for="cog">Cognome</label>
          <input
            type="text"
            id="cog"
            v-model="dati.cognome"
            class="form-control"
            placeholder="Cognome"
          >
        </div>
        <div class="col-12">
          <label for="ema">Email</label>
          <input
            type="email"
            id="ema"
            v-model="dati.email"
            class="form-control"
            placeholder="Email"
          >
        </div>
        <a href="#" @click="invio" class="btn btn-primary">Invia</a>
      </div>
    </form>
  </div>
</template>


<script>
export default {
  name: "ComponenteForm",
  data() {
    return {
      dati: {
        nome: "",
        cognome: "",
        email: ""
      }
    };
  },
  computed: {},
  methods: { invio() {} }
};
</script>

<style scoped>
.col-12 {
  margin: 1% 0;
}
.btn-primary {
  margin-top: 2%;
  width: 100%;
}
h6 {
  margin-top: 5%;
}
.container{
  margin-top: 5%;
}
</style>
