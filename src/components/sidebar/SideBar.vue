<script setup lang="ts">
import { useRouter } from 'vue-router';

interface Menu {
  id: number,
  label: string,
  url: string
}

const router = useRouter()
const menu: Menu[] = [
  {
    id: 0,
    label: 'C',
    url: '/chat'
  },
  {
    id: 1,
    label: 'T',
    url: '/todo'
  },
  {
    id: 2,
    label: 'X',
    url: '/chat'
  }
]

const handleMenuItem = (menuItem: Menu) => {
  router.push(menuItem.url)
}
</script>
<template>
  <div class="sidebar" data-tauri-drag-region>
      <div>
        
      </div>
      <ui class="menu_list flex-column">
        <li class="menu_item cs" v-for="item in menu" :key="item.id" @click="handleMenuItem(item)">{{ item.label }}</li>
      </ui>
    </div>
</template>
<style scoped lang="scss">
.sidebar {
  width: 65px;
  background-color: #fff;
  height: 100vh;
  box-sizing: border-box;
  padding-top: 25px;
  margin-right: 11px;
  box-shadow: 0px 0px 20px -17px rgba($color: #000000, $alpha: 1.0);
}
.menu_list {
  .menu_item {
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    border-radius: 15px;
    margin-bottom: 5px;
    border: 1px solid rgb(176, 176, 176);
  }
}
</style>