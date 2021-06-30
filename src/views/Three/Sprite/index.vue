<template>
  <div>
    <div style="position: absolute; text-align: center; width: 100%; top: 10px">
      <router-link to="/">返回首页</router-link>
    </div>
    <div id="three" style="font-size: 0"></div>
  </div>
</template>

<script>
import * as THREE from 'three'
import ThreeApp from '../Utils/sceneLoader'

let app = null
let animationFrame = null
export default {
  data() {
    return {}
  },
  beforeUnmount() {
    cancelAnimationFrame(animationFrame)
  },
  mounted() {
    app = new ThreeApp()
    const particles = 2000
    const geometry = new THREE.BufferGeometry()
    const positions = []
    const colors = []
    const color = new THREE.Color()
    const n = 10
    for (let i = 0; i < particles; i++) {
      const x = Math.random() * n - n / 2
      const y = Math.random() * n - n / 2
      const z = Math.random() * n - n / 2
      positions.push(x, y, z)

      // 颜色
      const vx = x / n + 0.5
      const vy = y / n + 0.5
      const vz = z / n + 0.5
      color.setRGB(vx, vy, vz)
      colors.push(color.r, color.g, color.b)
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
    const material = new THREE.PointsMaterial({
      size: 1,
      vertexColors: THREE.VertexColors,
      transparent: true,
      opacity: 0.7
    })
    const points = new THREE.Points(geometry, material)
    app.scene.add(points)

    const loop = () => {
      console.log('render')
      points.rotation.x += 0.02
      app.renderer.render(app.scene, app.camera)
      animationFrame = requestAnimationFrame(loop)
    }
    loop()
    app.addControls()
  }
}
</script>

<style lang="scss" scoped></style>
