/*
 * @Author: 绪锋
 * @Date: 2024-12-25 16:04:52
 * @LastEditors: 绪锋
 * @LastEditTime: 2024-12-25 18:39:34
 * @FilePath: \webgl\1.3D案例\index.js
 * @Description: 
 */
import * as THREE from 'three';

import {
    OrbitControls
} from 'three/addons/controls/OrbitControls.js';

const width = window.innerWidth; //宽度
const height = window.innerHeight; //高度

// 创建场景
const scene = new THREE.Scene();
// 创建相机 
// 参数1: 视角，角度
// 参数2/3: 宽高比
// 参数4/5: 近裁剪面和远裁剪面
const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 3000);
camera.position.set(500, 500, 500);
camera.lookAt(0, 0, 0);

// 创建辅助轴
const axesHelper = new THREE.AxesHelper(100); // 红绿蓝 - XYZ
scene.add(axesHelper);

// 创建立方体
const geometry = new THREE.BoxGeometry(100, 100, 100);
// MeshLambertMaterial 漫反射材质；MeshBasicMaterial 基本材质；MeshPhongMaterial 法线材质
const material = new THREE.MeshLambertMaterial({
    color: 0x00ffff, //设置材质颜色
    // transparent: true, // 开启材质透明
    // opacity: 0.5 // 设置透明度
});
const mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0,10,0);
scene.add(mesh);

// 创建光源-点光源
const light = new THREE.PointLight(0x16D46B);
light.position.set(100, 150, 100)
scene.add(light);

// 添加环境光
const ambientLight = new THREE.AmbientLight(0xffffff, .5);
scene.add(ambientLight);

// 光源辅助
const lightHelper = new THREE.PointLightHelper(light, 10);
scene.add(lightHelper);

// 创建渲染器
const renderer = new THREE.WebGLRenderer(scene, camera);
renderer.setSize(width, height);
renderer.render(scene, camera); // //执行渲染操作
document.body.appendChild(renderer.domElement)

// 添加控制器
const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', () => {
    renderer.render(scene, camera);
});