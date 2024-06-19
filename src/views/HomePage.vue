<template>
  <div class="nav">
    <el-menu class="nav-menu" mode="horizontal" :ellipsis="true" background-color="#2b706c" text-color="#ffffff"
      @select="handleSelect">
      <el-menu-item index="0" class="nav-menu-logo">
        <span>探</span>
        <span>路</span>
        <span>者</span>
      </el-menu-item>
      <div class="nav-grow" />
      <el-menu-item v-for="(item, index) in menuList" :index="String(index)" :key="index"
        @click="handleAnchor(item.herf)">{{ item.title }}
      </el-menu-item>
      <img class="w-24px h-24px cursor-pointer ml-10px mr-20px my-auto" @click="openGit" src="/icons/github.svg" />
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
      flex: 0 0 150px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 10px;

      >span {
        font-size: 36px;
        font-weight: bold;
        animation: jumpIn 1s ease;

        &+span {
          margin-left: 10px;
        }
      }

      >span:nth-child(1) {
        color: #e76f51;
        font-size: 40px;
        animation-delay: 0.2s;
        transform: rotate(30deg);
      }

      >span:nth-child(2) {
        color: #e9c46a;
        font-size: 34px;
        animation-delay: 0.4s;
        transform: rotate(-15deg);
      }

      >span:nth-child(3) {
        color: #264653;
        font-size: 38px;
        animation-delay: 0.6s;
        transform: rotate(10deg);
      }
    }
  }

  &-grow {
    // margin-right: auto;
    flex-grow: 1;
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

@keyframes jumpIn {
  0% {
    opacity: 0;
    transform: rotate(0deg) translateX(-100px) translateY(0);
  }

  50% {
    opacity: 0.8;
    transform: rotate(180deg) translateX(50px) translateY(-50px);
  }

  100% {
    opacity: 1;
    transform: rotate(360deg) translateX(0) translateY(0);
  }
}
</style>
