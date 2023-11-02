<template>
  <div class="nav">
    <div class="nav-top flex text-white flex-items-center">
      <div class="nav-top-left">nav Site</div>
      <div class="nav-top-center flex flex-justify-around flex-1">
        <div class="nav-top-center-list">Development tool</div>
        <div class="nav-top-center-list">Optional tool</div>
        <div class="nav-top-center-list">Popular website</div>
      </div>
      <div class="nav-top-right"></div>
    </div>
    <div class="nav-body">
      <div v-for="(item, index) in navData" :key="index">
        <div class="nav-list-title">{{ item.title }}</div>
        <div class="flex-container flex flex-justify-around flex-wrap">
          <div
            class="nav-list"
            v-for="(temp, index) in item.modules"
            :key="index"
          >
            <div class="nav-list-left flex flex-items-center">
              <div>
                <img :src="temp.img" class="nav-list-left-img" />
              </div>
              <div class="font-bold nav-list-left-title">{{ temp.title }}</div>
            </div>
            <div class="nav-list-content">{{ temp.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import navData from "../json/nav.json";
</script>

<style scoped lang="scss">
.nav {
  width: 100%;
  height: 100%;
  &-top {
    height: 64px;
    width: 100%;
    background-color: #548cfa;
    padding: 0 24px;
    box-sizing: border-box;

    &-left {
      width: 400px;
      font-size: 26px;
      font-weight: bold;
      text-align: center;
    }

    &-center {
    }

    &-right {
      width: 400px;
    }
  }

  &-body {
    margin-top: 25px;
    height: calc(100vh - 160px);
    padding: 24px;
    overflow: auto;
  }

  &-list {
    background-color: #f4f4f5;
    padding: 20px;
    width: 280px;
    height: 80px;
    margin-bottom: 20px;
    border-radius: 10px;

    &-title {
      font-size: 20px;
      margin-bottom: 24px;
      font-weight: bold;
    }

    &-left {
      margin-bottom: 12px;

      &-title {
        font-size: 16px;
      }

      &-img {
        width: 32px;
        height: 32px;
        margin-right: 10px;
      }
    }

    &-content {
      font-size: 12px;
      color: #8f8f8f;
      white-space: nowrap; 
      overflow: hidden; 
      text-overflow: ellipsis;
    }
  }
}

.flex-container{
  // &::after{
  //   content: '';
  //   flex: auto;
  // }
}
</style>
