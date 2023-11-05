<template>
  <div class="nav">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      background-color="#2c698d"
      text-color="#ffffff"
      @select="handleSelect"
    >
      <el-menu-item index="0"> nav Site </el-menu-item>
      <div class="flex-grow" />
      <el-sub-menu index="1" v-if="!isMenuOpen">
        <template #title>Workspace</template>
        <el-menu-item
          v-for="(item, index) in menuList.data"
          :index="index"
          :key="index"
          @click="handleAnchor(item.herf)"
          >{{ item.title }}
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item
        v-else
        v-for="(item, index) in menuList.data"
        :index="index"
        :key="index"
        @click="handleAnchor(item.herf)"
        >{{ item.title }}
      </el-menu-item>
    </el-menu>
    <div class="nav-body">
      <div v-for="(item, index) in navData" :key="index">
        <div class="nav-list-title" :id="item.id">{{ item.title }}</div>
        <CardTemplate :width="240" :height="110" :data="item.modules">
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
        </CardTemplate>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import navData from "@/json/nav.json";

const activeIndex = ref("1");
const menuList = reactive({
  data: [
    {
      title: "Development tool",
      herf: "#develop",
    },
    {
      title: "Optional tool",
      herf: "#optional",
    },
    {
      title: "Popular website",
      herf: "#popular",
    },
    {
      title: "Meet",
      herf: "#meet",
    },
    {
      title: "Friendly link",
      herf: "#link",
    },
  ],
});
let isMenuOpen = ref(true);

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

const handleResize = () => {
  isMenuOpen.value = window.innerWidth >= 768;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped lang="scss">
.nav {
  width: 100%;
  height: 100%;

  &-body {
    height: calc(100vh - 60px);
    padding: 24px;
    overflow: auto;
  }

  &-list {
    padding: 20px;
    width: 280px;
    height: 80px;
    margin-bottom: 20px;
    border-radius: 10px;

    &-title {
      font-size: 20px;
      margin: 24px 0;
      font-weight: bold;
    }

    &-left {
      margin-bottom: 12px;

      &-title {
        font-size: 16px;
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
  &:hover {
    .nav-list-left-title {
      // color: #272643;
      text-decoration: underline;
    }
  }
}
</style>
