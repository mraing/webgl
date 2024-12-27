/*
 * @Author: 绪锋
 * @Date: 2024-12-25 16:04:52
 * @LastEditors: 绪锋
 * @LastEditTime: 2024-12-27 11:00:04
 * @FilePath: \webgl\3.层级组\index.js
 * @Description: 
 */
import * as THREE from 'three';
// 控制器
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import {GUI} from 'three/addons/libs/lil-gui.module.min.js'


const width = window.innerWidth; //宽度
const height = window.innerHeight; //高度


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 3000);
camera.position.set(300, 300, 300);
camera.lookAt(0, 0, 0);

// 创建光源-点光源
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(150, 80, 100)
scene.add(light);

// 添加环境光
const ambientLight = new THREE.AmbientLight(0xffffff, .5);
scene.add(ambientLight);

// 添加平行光
const directionalLight = new THREE.DirectionalLight(0xffffff, .5);
directionalLight.position.set(-90, 80, -110)
scene.add(directionalLight);

const axesHelper = new THREE.AxesHelper(300);
scene.add(axesHelper);

// 创建立方体
const geometry = new THREE.BoxGeometry(50, 120, 30);
const geometry2 = new THREE.BoxGeometry(50, 60, 30);
const material = new THREE.MeshPhongMaterial({
    color: 0xFFD252, //设置材质颜色
    shininess: 100, //设置材质的镜面亮度
});

const group1 = new THREE.Group();
group1.name = '高层'
for (let i = 0; i < 5; i++) {
    const mesh1 = new THREE.Mesh(geometry, material);
    mesh1.position.set(i * 90, 0, 0);
    mesh1.name = '高层'+ (i+1)
    group1.add(mesh1);
}
group1.position.z = -60
group1.position.y = 60
group1.position.x = -150
scene.add(group1);


const group2 = new THREE.Group();
group2.name = '洋房'
for (let i = 0; i < 5; i++) {
    const mesh1 = new THREE.Mesh(geometry2, material);
    mesh1.position.set(i * 90, 0, 0);
    mesh1.name = '洋房'+ (i+1)
    group2.add(mesh1);
}
group2.position.z = 120
group2.position.y = 30
group2.position.x = -150
scene.add(group2);


const renderer = new THREE.WebGLRenderer({
    //抗锯齿
    antialias: true,
    // 设置物理像素比，避免绘制模糊
    devicePixelRatio: window.devicePixelRatio
});
renderer.setSize(width, height);
renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);

// 遍历所有模型
group2.traverse((obj) => {
    if (obj.isMesh) {
        console.log(obj.name)
    }
})

// 添加控制器
const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', () => {
    renderer.render(scene, camera);
});

controls.addEventListener('click', (obj) => {
    if (obj.isMesh) {
        console.log(obj.name)
    }
});


