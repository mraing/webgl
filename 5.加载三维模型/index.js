/*
 * @Author: 绪锋
 * @Date: 2024-12-27 10:27:01
 * @LastEditors: 绪锋
 * @LastEditTime: 2024-12-27 17:31:22
 * @FilePath: \webgl\5.加载三维模型\index.js
 * @Description: 
 */
import * as THREE from 'three';
// 控制器
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import model from './model.js'

const width = window.innerWidth; //宽度
const height = window.innerHeight; //高度


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 3000);
camera.position.set(-95, 80, 6);
camera.lookAt(0, 0, 0);

// 创建光源-点光源
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(150, 80, 100)
scene.add(light);

// 添加环境光
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

// 添加平行光
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(-90, 80, -110)
scene.add(directionalLight);

// 创建辅助轴
const axesHelper = new THREE.AxesHelper(300);
scene.add(axesHelper);

scene.add(model)

const renderer = new THREE.WebGLRenderer({
    //抗锯齿
    antialias: true,
    // 设置物理像素比，避免绘制模糊
    devicePixelRatio: window.devicePixelRatio
});
renderer.setSize(width, height);
// 模型纹理颜色偏差,解决模型渲染颜色偏差的问题
renderer.outputColorSpace = THREE.SRGBColorSpace

console.log('渲染器加载完成')
document.body.appendChild(renderer.domElement);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate()


// 添加控制器
const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', () => {
    renderer.render(scene, camera);
});


