<template>
  <div class="grid-card">
    <slot v-for="(row, index) in data" :row="row" :index="index" />
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  data: {
    type: Array,
    default: function () {
      return [];
    },
  },
  minWidth: {
    type: Number,
    default: 210,
  },
});

const min = `${props.minWidth}px`;
</script>

<style lang="scss" scoped>
.grid-card {
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, minmax(v-bind(min), 1fr));
  row-gap: 10px;
  column-gap: 5px;
  justify-items: center;
}
</style>
