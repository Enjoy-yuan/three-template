<template>
  <div>
    <div id="three"></div>
    <div class="form">
      <el-button @click="installModel">加载模型</el-button>
      <el-button @click="uninstallModel">卸载模型</el-button>
      <el-button @click="showModel">显示模型</el-button>
      <el-button @click="hideModel">隐藏模型</el-button>
    </div>
  </div>
</template>

<script>
import ThreeApp from '@three/Utils/sceneLoader'

let gltf = null
let animationFrame = null
let app = null
export default {
  data() {
    return {
      // gltf: null,
      // animationFrame: null,
      // app: null
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
      app.addDirectionalLight()
      app.addHemisphereLight()
      app.addControls()
      this.loop()
    },
    installModel() {
      app.gltfLoader.load('/model/yeyazhijia.gltf', (res) => {
        gltf = res.scene
        app.scene.add(res.scene)
        app.renderer.domElement.addEventListener('click', this.selectHandler, false)
      })
    },
    uninstallModel() {
      app.scene.remove(gltf)
    },
    showModel() {
      gltf.visible = true
    },
    hideModel() {
      gltf.visible = false
    },
    // 点击部件高亮
    selectHandler(event) {
      app.mouse.x = (event.layerX / app.renderer.domElement.offsetWidth) * 2 - 1
      app.mouse.y = -(event.layerY / app.renderer.domElement.offsetHeight) * 2 + 1
      app.raycaster.setFromCamera(app.mouse, app.camera)
      // 捕获点击的部件
      let intersects = app.raycaster.intersectObjects(gltf.children, true)
      if (intersects.length > 0) {
        let selectedObjects = intersects[0].object
        // 修改材质颜色
        let newMaterial = selectedObjects.material.clone()
        newMaterial.color = app.setColor('#D3C542')
        selectedObjects.material = newMaterial
        // 高亮
        let arr = []
        arr.push(selectedObjects)
        app.outlinePass.selectedObjects = arr
      }
    },
    loop() {
      console.log('render')
      animationFrame = requestAnimationFrame(this.loop)
      app.renderer.render(app.scene, app.camera)
      app.composer.render()
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
