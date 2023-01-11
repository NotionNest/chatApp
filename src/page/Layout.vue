<script setup lang="ts">
import SideBar from '@/components/sidebar/SideBar.vue'

</script>
<template>
  <div class="layout flex">
    <SideBar />
    <div class="page">
      <router-view></router-view>
    </div>
  </div>
</template>
<style lang="scss">
.layout {
  background-color: #F9FAFC;
}
</style>