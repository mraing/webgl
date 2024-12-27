import * as THREE from 'three';

// 创建球体
const geometry = new THREE.SphereGeometry(100)
// 创建纹理贴图
const textureLoader = new THREE.TextureLoader();
const material = new THREE.MeshLambertMaterial({
    map:  textureLoader.load('./earth.jpg')
});
const mesh = new THREE.Mesh(geometry, material);

export default mesh