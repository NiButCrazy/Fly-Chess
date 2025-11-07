<template>
    <div ref="game-container"></div>
</template>

<style scoped>

</style>


<script>
// 孩子们，土豆服务器能省则省
import * as THREE from 'three/src/Three'
import {Plane} from "./game/plane";


export default {
    name: "GameContainer",
    data() {
        return {
            // 方便获取 game 元素
            game: renderer.domElement,
        }
    },
    mounted() {
        this.$refs["game-container"].appendChild(this.game)
        renderer.render(game_scene, camera);
        dadad
    }
}


// 创建游戏场景
const game_scene = new THREE.Scene()
const spotLight = new THREE.SpotLight(0xffffff,1.0);
spotLight.decay = 0.0;
game_scene.add(spotLight);
spotLight.position.set(100, 100, 100);
const spotLightHelper = new THREE.SpotLightHelper(spotLight,0xffffff)
game_scene.add(spotLightHelper)

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.lookAt(0, 0, 0);
camera.position.set(200, 200, 200);
// 创建渲染器
const renderer = new THREE.WebGLRenderer({antialias: true, powerPreference: 'high-performance'});
renderer.setSize( window.innerWidth, window.innerHeight );

// 创建渲染循环
// function animate() {
//     requestAnimationFrame( animate );
//     renderer.render( game_scene, camera );
// }
//
// animate();
const airplane = new Plane();
airplane.model.position.set(0, 0, 0);
airplane.model.scale.set(0.5, 0.5, 0.5);
game_scene.add(airplane.model);
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
const controls = new OrbitControls(camera, renderer.domElement);

controls.addEventListener('change', function () {
    // renderer.render(game_scene, camera); //执行渲染操作
});

// AxesHelper：辅助观察的坐标系
const axesHelper = new THREE.AxesHelper(150);
game_scene.add(axesHelper);

const size = 200;
const divisions = 10;

const gridHelper = new THREE.GridHelper( size, divisions );
game_scene.add( gridHelper );

const ambient = new THREE.AmbientLight(0xffffff, 0.4);
game_scene.add(ambient);

// 从three.js扩展库引入gui.js
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min';
const gui = new GUI();//创建GUI对象
gui.domElement.style.right = '0px';
gui.domElement.style.width = '300px';
gui.add(ambient, 'intensity', 0, 2).name('环境光.intensity');
spotLight.castShadow = true;
renderer.shadowMap.enabled = true;

import Stats from 'three/examples/jsm/libs/stats.module'
const stats = new Stats()
// 设置stats样式
stats.dom.style.position = 'absolute';
stats.dom.style.top = '0px';
document.body.appendChild(stats.dom);

function render_loop(){
    stats.update();
    renderer.render(game_scene, camera);
    requestAnimationFrame(render_loop);
}
if (navigator.gpu) {
    navigator.gpu.requestAdapter().then(adapter => {
        console.log('Using GPU:', adapter);
    }).catch(error => {
        console.error('Error getting GPU information:', error);
    });
} else {
    console.log('WebGPU not supported');
}
render_loop()
</script>

