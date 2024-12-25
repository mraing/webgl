/*
 * @Author: 绪锋
 * @Date: 2024-12-25 16:04:52
 * @LastEditors: 绪锋
 * @LastEditTime: 2024-12-25 16:10:30
 * @FilePath: \three-demo\1.3D案例\index.js
 * @Description: 
 */
import * as THREE from 'three';

const width = 800; //宽度
const height = 500; //高度

// 创建场景
const scene = new THREE.Scene();
// 创建相机
const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 3000);
camera.position.set(292, 223, 185);
camera.lookAt(0, 0, 0);

// 创建立方体
const geometry = new THREE.BoxGeometry(50, 50, 50);
const material = new THREE.MeshBasicMaterial({
    color: 0x0000ff, //设置材质颜色
});
const mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0,10,0);
scene.add(mesh);

// 创建渲染器
const renderer = new THREE.WebGLRenderer(scene, camera);
renderer.setSize(width, height);
//执行渲染操作
renderer.render(scene, camera);
document.body.appendChild(renderer.domElement)