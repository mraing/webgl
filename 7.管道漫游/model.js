
/*
 * @Author: 绪锋
 * @Date: 2024-12-25 16:04:52
 * @LastEditors: 绪锋
 * @LastEditTime: 2024-12-30 14:40:13
 * @FilePath: \webgl\7.管道漫游\model.js
 * @Description: 
 */

// 引入Three.js
import * as THREE from 'three';

// 三维样条曲线
const path = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-50, 20, 90),
    new THREE.Vector3(-10, 40, 40),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(60, -60, 0),
    new THREE.Vector3(90, -40, 60),
    new THREE.Vector3(120, 30, 30),
]);

const geometry = new THREE.TubeGeometry( path, 200, 5, 30, true)

const texture = new THREE.TextureLoader().load('./diffuse.jpg')
texture.wrapS = THREE.RepeatWrapping;
texture.repeat.x = 10

const material  = new THREE.MeshLambertMaterial({
    map: texture,
    side: THREE.DoubleSide
})

const model = new THREE.Mesh( geometry, material)

// 取500个点
const pointsArr = path.getSpacedPoints(500)

export {model, pointsArr};
