<template>
  <!-- <HeaderPage :is-presentation="true" /> -->
  <RouterView class="container" />
  <FooterView />
</template>
<script setup lang="ts">
import FooterView from './components/FooterView.vue'
import HeaderPage from './components/HeaderPage.vue'
</script>
