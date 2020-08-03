<!--HOME PAGINA INIZIALE-->
<!--LE PAGINE E' MEGLIO METTERLE IN UNA CARTELLA A PARTE CHIAMATA VIEWS-->
<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h3>home</h3>
        <componente-form/>
      </div>
      <div class="col-sm-12">
        <p>Questa è la home di prova</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped>
h3 {
  text-align: center;
  margin: 2% 0;
  color: purple;
}
p {
  text-align: center;
  margin: 2% 0;
  color: black;
}
</style>
