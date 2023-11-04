<template>
  <div class="box-template flex justify-around" :class="{ 'box-direction': direction }">
    <div v-for="(row, index) in data" :key="index" class="box-template-li">
      <div
        class="box-template-content"
        :style="{ height: height + 'px', width: width + 'px' }"
        :class="{ 'table-card-selected': selectedIndex == index }"
        @click.stop="handleClick(row, index)"
      >
        <slot :row="row" :index="index" />
      </div>
    </div>
    <i v-for="(item, index) in defaultFill" :key="index" :style="{ width: width + 'px', 'flex-grow': 1 }" />
  </div>
</template>
<script setup lang="ts">
const defaultFill = ref<number>(10);
const selectedIndex = ref<number>(-1);
const props = defineProps({
  data: {
    type: Array,
    default: function () {
      return [];
    },
  },
  height: {
    type: Number,
    default: 168,
  },
  width: {
    type: Number,
    default: 310,
  },
  // 定义flex主轴方向
  direction: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["card-click", "showAdd-dialog"]);
const setCurrentCard = (row: any) => {
  if (!row) {
    selectedIndex.value = -1;
    return;
  }
  nextTick(() => {
    selectedIndex.value = props.data.indexOf(row);
  });
};
// 点击事件
const handleClick = (item: any, index: number) => {
  emit("card-click", item, index);
};
const showAddDialog = () => {
  emit("showAdd-dialog");
};
</script>
<style lang="scss" scoped>
.box-template {
  flex-flow: row wrap;
  overflow: auto;

  &-li {
    flex-grow: 1;
    padding: 8px 0;
  }

  &-content {
    position: relative;
    // padding: 15px;
    margin: auto;
    background: #ffffff;
    border-radius: 10px;

    &:hover {
      box-shadow: 4px 4px 10px 2px #2c698d;
      cursor: pointer;
    }
  }
}

.box-template-content::before {
  animation-delay: -4s;
}

.box-direction {
  flex-direction: column;
}

.table-card-selected {
  box-shadow: 4px 4px 10px 2px #333;
}

.add-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: auto;

  &-content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    border: 1px solid #e9e9e9;
    border-radius: 10px;

    &:hover {
      box-shadow: 4px 4px 10px 2px saddlebrown;
    }

    &-icon {
      margin-bottom: 5px;
      font-size: 90px;
      text-align: center;
      cursor: pointer;
      background: #2c3e50;
      border-radius: 50%;
    }

    &-text {
      margin-top: 15px;
      text-align: center;
    }
  }
}
</style>
