<template>
  <div>
    <div id="three"></div>
    <div class="form">
      <el-button @click="installLabel">加载标签</el-button>
      <el-button @click="uninstallLabel">卸载标签</el-button>
      <el-button @click="showLabel">显示标签</el-button>
      <el-button @click="hideLabel">隐藏标签</el-button>
      <el-button @click="changeLabel">修改文字</el-button>
    </div>
  </div>
</template>

<script>
import * as THREE from 'three'
import ThreeApp from '@three/Utils/sceneLoader'

let animationFrame = null
let app = null
let mesh = null

export default {
  data() {
    return {
      // animationFrame: null,
      // app: null,
      // mesh: null
    }
  },
  mounted() {
    this.init()
  },
  beforeUnmount() {
    cancelAnimationFrame(animationFrame)
  },
  methods: {
    init() {
      app = new ThreeApp({ width: 1000, height: 500 })
      let boxGeometry = new THREE.BoxGeometry(10, 10, 10)
      let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
      mesh = new THREE.Mesh(boxGeometry, material)
      app.scene.add(mesh)
      app.addControls()
      this.loop()
    },
    installLabel() {
      if (!document.getElementsByClassName('labelText')[0]) {
        {
          app.addLabel(mesh, '修改前的文字')
        }
      }
    },
    uninstallLabel() {
      if (app.scene.getObjectByName('labelText')) {
        let label = app.scene.getObjectByName('labelText')
        label.parent.remove(label)
        document.getElementsByClassName('labelRenderer')[0].innerHTML = ''
      }
    },
    showLabel() {
      if (document.getElementsByClassName('labelText')[0]) {
        document.getElementsByClassName('labelText')[0].style.visibility = 'visible'
      }
    },
    hideLabel() {
      if (document.getElementsByClassName('labelText')[0]) {
        document.getElementsByClassName('labelText')[0].style.visibility = 'hidden'
      }
    },
    changeLabel() {
      if (
        document.getElementsByClassName('labelText')[0] &&
        document.getElementsByClassName('labelText')[0].style.visibility === 'visible'
      ) {
        app.scene.getObjectByName('labelText').element.textContent = '修改后的文字'
      }
    },
    loop() {
      console.log('render')
      animationFrame = requestAnimationFrame(this.loop)
      app.renderer.render(app.scene, app.camera)
      app.labelRenderer.render(app.scene, app.camera)
    }
  }
}
</script>

<style lang="scss" scoped>
#three {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0;
}
.form {
  text-align: center;
  margin-top: 20px;
}
</style>
