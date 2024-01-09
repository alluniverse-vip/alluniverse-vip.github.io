<template>
  <div class="nav">
    <el-menu
      class="nav-menu"
      mode="horizontal"
      :ellipsis="true"
      background-color="#2c698d"
      text-color="#ffffff"
      @select="handleSelect"
    >
      <!-- <div class="text-white nav-menu-logo">探路者</div> -->
      <div class="nav-menu-logo"></div>
      <div class="nav-grow" />
      <el-menu-item v-for="(item, index) in menuList" :index="item.herf" :key="index" @click="handleAnchor(item.herf)"
        >{{ item.title }}
      </el-menu-item>
      <div @click="openGit" class="flex flex-items-center cursor-pointer pr-8px">
        <img src="/icons/github.svg" />
      </div>
    </el-menu>
    <div class="nav-body">
      <div v-for="(item, index) in navData" :key="index">
        <div class="nav-list-title" :id="item.id">{{ item.title }}</div>
        <GridCard :data="item.modules" :minWidth="210">
          <template #default="{ row }">
            <div class="box-card" @click="openSite(row.site)">
              <div class="nav-list-left flex flex-items-center">
                <div>
                  <img :src="row.img" class="nav-list-left-img" />
                </div>
                <div class="font-bold nav-list-left-title">{{ row.title }}</div>
              </div>
              <div class="nav-list-content" :title="row.description">{{ row.description }}</div>
            </div>
          </template>
        </GridCard>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import navData from "@/json/nav.json";

const menuList = computed(() => {
  return navData
    .filter((nav) => nav.id)
    .map(({ title, id }) => {
      return {
        herf: `#${id}`,
        title,
      };
    });
});

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const openSite = (site: string) => {
  if (!site || site == "#") {
    return;
  }
  window.open(site);
};

const handleAnchor = (id: string) => {
  const element = document.querySelector(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const openGit = () => {
  window.open("https://github.com/alluniverse-vip/alluniverse-vip.github.io");
};
</script>

<style scoped lang="scss">
.nav {
  width: 100%;
  height: 100%;

  &-menu {
    height: 65px;

    &-logo {
      height: 100%;
      width: 140px;
      flex: 0 0 140px;
      background-repeat: no-repeat;
      background-image: url("/logo.png");
      background-position: 20px center;
    }
  }

  &-grow {
    margin-right: auto;
  }

  &-body {
    height: calc(100vh - 65px);
    padding: 10px 20px;
    overflow: auto;
  }

  &-list {
    padding: 20px;
    width: 280px;
    height: 80px;
    margin-bottom: 20px;
    border-radius: 10px;

    &-title {
      font-size: 18px;
      margin: 20px 0;
      font-weight: bold;
    }

    &-left {
      margin-bottom: 12px;

      &-title {
        font-size: 14px;
        color: #272643;
      }

      &-img {
        width: 36px;
        height: 36px;
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

.box-card {
  padding: 15px;
  width: 90%;
  height: 100px;
  background: #ffffff;
  border-radius: 10px;
  &:hover {
    box-shadow: 4px 4px 10px 2px #2c698d;
    cursor: pointer;
    .nav-list-left-title {
      // color: #272643;
      text-decoration: underline;
    }
  }
}
</style>
