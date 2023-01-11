<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  drapContent()
})
const drapContent = () => {
  // 可以移动的距离
  let moveWidth = 50
  // 获取 左边区域 的 宽度
  let left = document.getElementById('left');
  // 获取 移动区域 的 宽度
  let line = document.getElementById('line');
  // 获取 右边区域 的 宽度
  let right = document.getElementById('right');
  // 移动区域鼠标移入事件
  line!.onmousedown = function (e) {
    // 移动的距离
    let lineLeft = e.clientX;
    document.onmousemove = function (e) {
      // 移动的位置 （侧边栏原始的宽度 + 移动的宽度）
      let diffVal = 200 + (e.clientX - lineLeft);
      // 移动区间的范围 [276, 740]
      if (diffVal >= 200 && diffVal <= 200 + moveWidth) {
        // 移动区域距离左边的距离
        line!.style.left = diffVal + 'px';
        // 左边缩放的宽度
        left!.style.width = diffVal + 'px';
        // 右边改变后的宽度 （改变后的宽度要加上移动区域的宽度）
        right!.style.width = document.getElementById('product')!.clientWidth - (diffVal + 16) + 'px';
      }
    }
    document.onmouseup = function () {
      document.onmousemove = null;
      document.onmouseup = null;
    }
  }
}

</script>
<template>
    <div class="width-auto">
      <div class="content">
        <div id="left" class="left">
          <div class="search">
            <input type="text" placeholder="search...">
          </div>
          <div class="message">
            <div class="chat-menu">
              <span>All Chats</span>
              <span>Groups</span>
              <span>Contacts</span>
            </div>
          </div>
          <div class="chat-list">
            <div class="chat-item" v-for="item in 10">
              username
            </div>
          </div>
        </div>
        <div id="line" class="resize-line"></div>
        <div id="right" class="right">
          右侧
        </div>
      </div>
    </div>
</template>
<style scoped lang="scss">
.search {
  border: 1px solid #000;
}
.chat-menu {
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  span {
    background-color: rgb(201, 245, 254);
    border-radius: 10px;
    padding: 3px 5px;
  }
}
.chat-list {

  chat-item {

  }
}

.width-auto {
  width: calc(100vw - 76px);
  height: 100%;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px -17px rgba($color: #000000, $alpha: 1.0);
}
.content {
  display: flex;
  width: 100%;
  height: 100%;
}

.left {
  width: 200px;
  height: 100%;
  background-color: #fff;
}

.resize-line {
  /*鼠标移入显示左右箭头*/
  cursor: ew-resize;
  width: 3px;
  min-width: 3px;
  max-width: 3px;
  background-color: transparent;
}
.resize-line:hover {
  width: 10px;
  max-width: 10px;
  background-color: #000;
}

.right {
  flex: 1;
  user-select: none;
  background-color: #FAFBFD;
}

</style>