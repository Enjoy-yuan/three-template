<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div id="nav">
      <router-link to="/three/car">1.加载小车模型</router-link> | <router-link to="/three/feature">2.特性</router-link> |
      <router-link to="/three/music">3.音频可视化</router-link> | <router-link to="/three/sprite">4.精灵粒子</router-link>|
      <router-link to="/example/test1">5.测试</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  data() {
    return {}
  },
  methods: {}
})
</script>
