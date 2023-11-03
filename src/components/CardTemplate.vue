<template>
  <div class="box-template" :class="{ 'box-direction': direction }">
    <!-- <div v-if="showAdd" class="box-template-li">
      <div
        class="add-box-content"
        :style="{ height: height + 'px', width: width + 'px' }"
      >
        <div class="add-box-content-border">
          <div class="add-box-content-icon" @click="showAddDialog">
            <svg-icon icon-class="add" class="icon-blue display-block" />
          </div>
          <div class="add-box-content-text text-small">新增</div>
        </div>
      </div>
    </div> -->
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
    <i
      v-for="(item, index) in defaultFill"
      :key="index"
      :style="{ width: width + 'px', 'flex-grow': 1 }"
    />
  </div>
</template>
<script>
export default {
  name: 'CardTemplate',
  props: {
    data: {
      type: Array,
      default: function() {
        return []
      }
    },
    height: {
      type: Number,
      default: 168
    },
    width: {
      type: Number,
      default: 310
    },
    showAdd: {
      type: Boolean,
      default: false
    },
    // 定义flex主轴方向
    direction: {
      type: Boolean,
      default: false
    }
  },
  emits: ['card-click'],
  data() {
    return {
      defaultFill: 20,
      selectedIndex: -1
    }
  },
  methods: {
    // 设置选中, 异步提交 ; 同步this.data为空
    setCurrentCard(row) {
      if (!row) {
        this.selectedIndex = -1
        return
      }
      this.$nextTick(() => {
        this.selectedIndex = this.data.indexOf(row)
      })
    },
    // 点击事件
    handleClick(item, index) {
      this.$emit('card-click', item, index)
    },
    showAddDialog() {
      this.$emit('showAdd-dialog')
    }
  }
}
</script>
<style lang="scss" scoped>
.box-template {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  overflow: auto;
  &-li {
    padding: 8px 0px;
    flex-grow: 1;
  }
  &-content {
    margin: auto;
    // background-color: #fff;
    border: 1px solid #dee4ea;
    border-radius: 10px;
    // box-shadow: 0px 1px 6px 0px #0000001a;
    position: relative;
    transition: box-shadow 1s;
    // background: #dee4ea;
    &:hover {
      //border: 1px solid #437def;
      box-shadow: 4px 4px 10px 2px $shadowColor;
    }
  }
}

// .box-template-li,
// .box-template-content::before,
// .box-template-content::after {
//   content: "";
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   box-shadow: inset 0 0 0 2px #034c6a;
//   //animation: clipMe 8s linear infinite;
// }

.box-template-content::before {
  animation-delay: -4s;
}

.box-direction {
  flex-direction: column;
}

.table-card-selected {
  box-shadow: 4px 4px 10px 2px $shadowColor;
}

.add-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: auto;
  &-content {
    margin: auto;
    border-radius: 10px;
    border: 1px solid $borderColor;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      box-shadow: 4px 4px 10px 2px saddlebrown;
    }
    &-icon {
      text-align: center;
      margin-bottom: 5px;
      cursor: pointer;
      background: #2c3e50;
      border-radius: 50%;
      font-size: 90px;
    }
    &-text {
      text-align: center;
      margin-top: 15px;
    }
  }
}

@keyframes clipMe {
  0%,
  100% {
    clip: rect(0, 310px, 2px, 0);
  }
  25% {
    clip: rect(0, 2px, 168px, 0px);
  }
  50% {
    clip: rect(166px, 310px, 168px, 0);
  }
  75% {
    clip: rect(0, 310px, 168px, 308px);
  }
}
</style>
