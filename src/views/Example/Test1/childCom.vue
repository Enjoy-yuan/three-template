<template>
  <div>
    <button @click="fn">子组件内容{{ name }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent,reactive,toRefs } from 'vue';

export default defineComponent({
  props: {
    fn: {
      require: true,
      type: Function
    },
    name: {
      require: true,
      type: String,
      default: 'jack'
    }
  },
  setup() {
    const data = reactive({
      childFn: () => {
        console.log('我是子组件方法');
      }
    });
    return {
      ...toRefs(data)
    };
  }
});
</script>

<style lang="scss" scoped></style>
