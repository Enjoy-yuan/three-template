<template>
  <div>
    <input type="text" v-model="overText" />
    {{ overText }}
    <el-button @click="fn">111</el-button>
  </div>
</template>

<script lang="ts">
import { onBeforeMount, reactive, toRefs, watch, ref } from 'vue';
export default {
  setup() {
    interface DataProps {
      aaa: number;
      msg: number;
      fn: () => void;
    }
    const data: DataProps = reactive({
      aaa: 111,
      msg: 222,
      fn: () => {
        console.log(77777);
      }
    });
    const overText = ref('红浪漫');
    watch(overText, (newData) => {
      console.log(newData);
    });
    onBeforeMount(() => {
      console.log(77777);
    });
    return {
      overText,
      ...toRefs(data)
    };
  }
};
</script>

<style lang="scss" scoped></style>
