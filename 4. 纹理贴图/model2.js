/*
 * @Author: 绪锋
 * @Date: 2024-12-27 15:54:54
 * @LastEditors: 绪锋
 * @LastEditTime: 2024-12-27 16:13:38
 * @FilePath: \webgl\4. 纹理贴图\model2.js
 * @Description: 平面贴图
 */
import * as THREE from 'three';

// 创建矩形平面几何体
const geometry = new THREE.PlaneGeometry(200, 20)
// 创建纹理贴图
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('./纹理3.jpg');
const material = new THREE.MeshLambertMaterial({
    map:  texture,
    side: THREE.DoubleSide
});
const mesh = new THREE.Mesh(geometry, material);
mesh.position.z = 200;

// 设置旋转方向
mesh.rotateX(-Math.PI/2);

// 设置纹理贴图方式
texture.wrapS = THREE.RepeatWrapping;
// uv两个方向纹理重复数量,注意选择合适的阵列数量
texture.repeat.x = 25;

export {mesh, texture}