<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div id="nav">
      <router-link to="/three/car">Car</router-link> | 
      <router-link to="/three/feature">Feature</router-link> |
      <router-link to="/three/music">music</router-link> |
      <router-link to="/three/sprite">sprite</router-link>|
      <router-link to="/example/test1">test1</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  data() {
    return {
      aaa: '111'
    }
  },
  methods: {
    fn() {
      console.log(888)
    }
  }
})
</script>
