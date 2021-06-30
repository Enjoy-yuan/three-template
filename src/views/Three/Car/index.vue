<template>
  <div>
    <div style="position: absolute; text-align: center; width: 100%;top: 10px;">
      <router-link to="/">返回首页</router-link>
    </div>
    <div id="three" style="font-size: 0"></div>
  </div>
</template>

<script>
import ThreeApp from '../Utils/sceneLoader'

let model = null // 场景
let app = null

export default {
  data() {
    return {
      animationFrame: null
    }
  },
  mounted() {
    // 初始化
    this.init()
    // 加载模型
    app.gltfLoader.load('/model/xiaoche.gltf', (res) => {
      model = res.scene
      app.scene.add(model)
      this.addShadow() // 显示阴影
    })
  },
  beforeUnmount() {
    window.cancelAnimationFrame(this.animationFrame)
    app.removeStats()
    app.removeGUI()
  },
  methods: {
    init() {
      app = new ThreeApp() // 初始化实例对象
      app.addPointLight() // 添加点光源
      app.addAmbientLight() // 添加环境光
      app.scene.add(app.floor) // 添加地板
      app.addStats() // 添加性能监控
      app.addGUI() // 添加图形界面
      app.addResize() // 添加自适应
      app.addControls() // 添加控制器
      this.loop()
    },
    // 显示阴影
    addShadow() {
      // 渲染器开启阴影
      app.renderer.shadowMap.enabled = true
      // 光源开启阴影
      app.pointLight.castShadow = true
      // 地板接受阴影开启
      app.floor.receiveShadow = true
      // 模型Mesh开启阴影
      model.traverse((obj) => {
        if (obj.isMesh) {
          obj.castShadow = true
        }
      })
    },
    // 渲染场景
    loop() {
      console.log('render')
      app.stats.update()
      if (model) {
        model.rotation.x += window.datGUI.rotationSpeedX
        model.rotation.y += window.datGUI.rotationSpeedY
        model.rotation.z += window.datGUI.rotationSpeedZ
      }
      app.floor.material.color.set(window.datGUI.floorColor)
      app.renderer.render(app.scene, app.camera)
      this.animationFrame = window.requestAnimationFrame(this.loop)
      // var T = app.clock.getDelta() // 返回时间单位：秒
      // 可以在控制打印查看你的渲染时间间隔
      // console.log('两帧渲染时间间隔', T * 1000 + '毫秒')
      // console.log('查看每秒渲染频率', 1 / T)
    }
  }
}
</script>

<style lang="scss" scoped></style>
