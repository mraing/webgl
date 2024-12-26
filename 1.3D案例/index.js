/*
 * @Author: 绪锋
 * @Date: 2024-12-25 16:04:52
 * @LastEditors: 绪锋
 * @LastEditTime: 2024-12-26 15:55:40
 * @FilePath: \webgl\1.3D案例\index.js
 * @Description: 
 */
import * as THREE from 'three';
// 控制器
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// 状态
import States from 'three/addons/libs/stats.module.js';
// gui辅助控制三维对象
import {GUI} from 'three/addons/libs/lil-gui.module.min.js'

const width = window.innerWidth; //宽度
const height = window.innerHeight; //高度

const gui = new GUI();

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
// const geometry = new THREE.CapsuleGeometry(30, 80, 60, 100);
const geometry = new THREE.BoxGeometry(100, 100, 100);
// MeshLambertMaterial 漫反射材质；MeshBasicMaterial 基本材质；MeshPhongMaterial 镜面材质
const material = new THREE.MeshPhongMaterial({
    color: 0xFFD252, //设置材质颜色
    shininess: 100, //设置材质的镜面亮度
    // transparent: true, // 开启材质透明
    // opacity: 0.5 // 设置透明度
});
const mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0,10,0);
scene.add(mesh);

// 创建光源-点光源
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(150, 80, 100)
scene.add(light);
// 点光源辅助对象
const lightHelper = new THREE.PointLightHelper(light, 10);
scene.add(lightHelper);

// 添加环境光
const ambientLight = new THREE.AmbientLight(0xffffff, .5);
scene.add(ambientLight);

gui.add(ambientLight, 'intensity', 0, 1).name('环境光强度').step(0.1);

// 添加平行光
const directionalLight = new THREE.DirectionalLight(0xffffff, .5);
directionalLight.position.set(-90, 80, -110)
scene.add(directionalLight);
// 平行光辅助对象
const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 10);
scene.add(directionalLightHelper);

gui.add(directionalLight, 'intensity', 0, 1).name('平行光强度').step(0.1);

// 添加帧率显示器
const stats = new States();
// 默认 渲染帧率 更新频率 物理帧率 三项
// stats.setMode(0)
document.body.appendChild(stats.domElement)

// 创建渲染器
const renderer = new THREE.WebGLRenderer({
    //抗锯齿
    antialias: true,
    // 设置物理像素比，避免绘制模糊
    devicePixelRatio: window.devicePixelRatio
});
renderer.setSize(width, height);
renderer.render(scene, camera); // //执行渲染操作
document.body.appendChild(renderer.domElement)

// 渲染动画
const render = () => {
    stats.update()
    mesh.rotation.y += 0.01;
    mesh.rotation.x += 0.01;
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}
render()

// 添加控制器
const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', () => {});

// 监听窗口变化
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});