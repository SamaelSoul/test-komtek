<template>
  <div class="container">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
export default {
  name: "MainLayout",
  components: {
    Navbar
  }
}
</script>

<style scoped>

</style>
