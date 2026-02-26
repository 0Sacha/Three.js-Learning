import * as THREE from 'three'
import { GLTFLoader } from './three/addons/loaders/GLTFLoader.js'


const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#webgl'),
    alpha: true
})

renderer.setSize(window.innerWidth, window.innerHeight)

const sphere = new THREE.SphereGeometry(1, 32, 32)

const material = new THREE.MeshStandardMaterial({ color: 0x8680FF, wireframe: true })

const light = new THREE.AmbientLight(0x004696, 1)

const lightDirection = new THREE.DirectionalLight(0xFFFFFF, 10)

const mesh = new THREE.Mesh(sphere, material)

const loader = new GLTFLoader()

loader.load('../assets/cube.glb', (gltf) => {
     gltf.scene
     scene.add(gltf.scene)
})

scene.add(light, lightDirection)
camera.position.z = 5
lightDirection.position.x = 5
lightDirection.position.y = 10
lightDirection.position.z = 7
renderer.render(scene, camera)

const animate = () => {
    requestAnimationFrame(animate)
    mesh.rotation.y += 0.01  // ici !
    renderer.render(scene, camera)
}   

animate()