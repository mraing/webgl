import {GUI} from 'three/addons/libs/lil-gui.module.min.js'
import * as THREE from 'three'

// 实例化GUI对象
const gui = new GUI()

const obj = {
  x: 30
}

// 参数1：要操作的对象
// 参数2：属性名
// 参数3：最小值
// 参数4：最大值
gui.add(obj, 'x', 0, 100)