import { Line, LineBasicMaterial, PerspectiveCamera, Scene, SphereGeometry, Vector3, WebGLRenderer } from 'three'
import type { Ref } from 'vue'

export const useSphere = (container: Ref<HTMLElement>, clientWidth: Ref<number>, clientHeight: Ref<number>) => {
  const init = () => {
    const renderer = new WebGLRenderer()
    renderer.setSize(clientWidth.value, clientHeight.value)
    renderer.setPixelRatio(clientWidth.value / clientHeight.value)
    container.value.appendChild(renderer.domElement)
    const scene = new Scene()
    const camera = new PerspectiveCamera(45, clientWidth.value / clientHeight.value)
    camera.position.set(20, 20, 20)
    camera.lookAt(new Vector3(0, 0, 0))
    const geometry = new SphereGeometry(10, 32, 32)
    const material = new LineBasicMaterial({ color: 0x6699FF, linewidth: 1 })
    const sphere = new Line(geometry, material)
    scene.add(sphere)
    const tick = () => {
      sphere.rotation.x += 0.01
      sphere.rotation.y += 0.01
      renderer.render(scene, camera)
      requestAnimationFrame(tick)
    }
    tick()
    onUnmounted(() => {
      renderer.dispose()
      renderer.forceContextLoss()
    })
  }
  return { init }
}
