<template>
  <div>
    <AppNavbar/>
    <slot/>
    <AppFooter/>
  </div>
</template>

<script>
import AppFooter from "~/components/app-footer/AppFooter.vue";
import AppNavbar from "~/components/app-navbar/AppNavbar.vue";

export default {
  components: {AppFooter, AppNavbar}
}
</script>