<script setup>
import {RouterView} from "vue-router";
import Header from "./components/base/Header.vue";
import Footer from "./components/base/Footer.vue";
import Cart from "./components/pages/Cart.vue";
</script>

<template>
  <Header />
  <RouterView />
  <Footer />

</template>
