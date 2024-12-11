<template>
  <div id="app">
    <HeaderComponent />
    <Router-view />
  </div>
</template>

<script>
import HeaderComponent from './components/headerComponent.vue';

export default {
  components: {
    HeaderComponent,
   
  }

};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');

* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  border: none;
  outline: none;
  font-family: "Roboto Mono";
}
</style>