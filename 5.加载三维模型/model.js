
/*
 * @Author: 绪锋
 * @Date: 2024-12-25 16:04:52
 * @LastEditors: 绪锋
 * @LastEditTime: 2024-12-27 17:28:01
 * @FilePath: \webgl\5.加载三维模型\model.js
 * @Description: 
 */

// 引入Three.js
import * as THREE from 'three';
// 引入gltf模型加载库GLTFLoader.js
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const loader = new GLTFLoader(); //创建一个GLTF加载器

const model = new THREE.Group(); //声明一个组对象，用来添加加载成功的三维场景

loader.load("../model/工厂.gltf", function (gltf) { //gltf加载成功后返回一个对象
    // console.log('控制台查看gltf对象结构', gltf);
    // console.log('场景3D模型数据', gltf.scene);
    model.add(gltf.scene); //三维场景添加到model组对象中
})


export default model;
