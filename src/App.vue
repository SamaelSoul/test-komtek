<template>
  <component v-if="this.$route.meta.layout" :is="isComponent + '-layout'"></component>
</template>

<script>
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";

export default {
  computed: {
    isComponent() {
      return this.$route.meta.layout
    }
  },
  components: {
    AuthLayout,
    MainLayout
  }
}
</script>

<style lang="scss">

</style>
