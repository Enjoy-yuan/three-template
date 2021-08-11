<template>
  <div style="padding-top: 20px;">
    <childCom name="yuan" :fn="fn" ref="childRef" />
    <div ref="testRef">333</div>
    count: {{ count }} || double: {{ double }}
    <el-button type="primary" @click="add">count+1</el-button>
    <br /><br />
    <el-input style="width: 200px;" type="primary" v-model="inputValue" />
    inputValue: {{ inputValue }} <br /><br />
    <el-input style="width: 200px;" type="primary" v-model="inputValue2" />
    inputValuew: {{ inputValue2 }} <br /><br />
    x: {{ x }} y: {{ y }}
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  watch,
  ref,
  computed,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue';
import useMousePosition from './hooks/useMousePosition';
import childCom from './childCom.vue';

interface DataProps {
  inputValue: string;
  double: number;
  count: number;
  add: () => void;
  fn: () => void;
}

export default defineComponent({
  components: {
    childCom
  },
  props: {
    // s必须大写
    msg: {
      require: true,
      type: String,
      default: 'hello'
    }
  },
  setup(props, context) {
    console.log('setup');
    console.log(props.msg);
    console.log(context);
    const childRef = ref();
    const testRef=ref()
    const data: DataProps = reactive({
      inputValue: '',
      count: 0,
      double: computed(() => data.count * 2),
      add: () => {
        data.count++;
        data.fn();
      },
      fn: () => {
        console.log(999);
      }
    });
    const { x, y } = useMousePosition();
    const inputValue2 = ref('');
    watch([() => data.inputValue, inputValue2], (newData, oldData) => {
      console.log(newData, oldData);
    });
    onBeforeMount(() => {
      console.log('onBeforeMount');
    });
    onMounted(() => {
      childRef.value.childFn();
      console.log(testRef.value.style.color='red')
      console.log('onMounted');
    });
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    });
    onUpdated(() => {
      console.log('onUpdate');
    });
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    });
    onUnmounted(() => {
      console.log('onUnmounted');
    });

    return {
      testRef,
      childRef,
      x,
      y,
      inputValue2,
      ...toRefs(data)
    };
  }
});
</script>

<style lang="scss" scoped></style>
