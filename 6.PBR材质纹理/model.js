
/*
 * @Author: 绪锋
 * @Date: 2024-12-25 16:04:52
 * @LastEditors: 绪锋
 * @LastEditTime: 2024-12-27 20:36:33
 * @FilePath: \webgl\6.PBR材质纹理\model.js
 * @Description: 
 */

// 引入Three.js
import * as THREE from 'three';
// 引入gltf模型加载库GLTFLoader.js
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


// 加载环境贴图
const textureCube = new THREE.CubeTextureLoader()
    .setPath('../model/环境贴图/环境贴图4/')
    .load(['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg']);

// 加载模型
const loader = new GLTFLoader();
const model = new THREE.Group();
loader.load("../model/金属.glb", function (gltf) {
    //遍历场景中的所有元素
    gltf.scene.traverse((item) => { 
        //判断当前元素是否为网格对象
        if (item.isMesh) { 
            // 设置材质金属度
            item.material.metalness = 1;
            // 粗糙度
            item.material.roughness = 0.2;
            // 设置环境贴图
            item.material.envMap = textureCube
            // 环境贴图反射率
            item.material.envMapIntensity = 0.8
        }
    });
    model.add(gltf.scene); //三维场景添加到model组对象中
})





export default model;
