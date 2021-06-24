<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- {{ aaa }} -->
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

// let bbb = 999

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      aaa: '111'
    }
    // aaa: 111
  },
  methods: {
    fn() {}
  }
})
</script>
