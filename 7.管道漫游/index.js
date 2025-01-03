/*
 * @Author: 绪锋
 * @Date: 2024-12-27 10:27:01
 * @LastEditors: 绪锋
 * @LastEditTime: 2024-12-30 11:26:41
 * @FilePath: \webgl\7.管道漫游\index.js
 * @Description: 
 */
import * as THREE from 'three';
// 控制器
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import {model, pointsArr} from './model.js'

const width = window.innerWidth; //宽度
const height = window.innerHeight; //高度


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 3000);
camera.position.set(0, 15, 50);
camera.lookAt(0, 0, 0);


//光源设置
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(100, 60, 50);
scene.add(directionalLight);
const ambient = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambient);

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

let i = 0
function animate() {
    // 漫游管道
    if (i < pointsArr.length-1) {
        camera.position.copy(pointsArr[i])
        camera.lookAt(pointsArr[i+1])
        i++
    } else {
        i = 0
    }
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate()


// 添加控制器
const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', () => {});


