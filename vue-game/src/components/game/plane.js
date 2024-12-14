/**
 * 用来写飞机的模块
 */


import * as THREE from 'three/src/Three'

const Colors = {
    red:0xf25346,
    yellow:0xedeb27,
    white:0xd8d0d1,
    // white:0x9890d1,
    brown:0x59332e,
    pink:0xF5986E,
    brownDark:0x23190f,
    blue:0x68c3c0,
    green:0x458248,
    // green:0x04120,
    purple:0x551A8B,
    lightgreen:0x629265,
    // lightgreen:0x022225
};

export class Plane {
    constructor() {
        this.model = new THREE.Object3D();

        // 创建一个客舱
        const geomCockpit = new THREE.BoxGeometry(80, 50, 50);
        const matCockpit = new THREE.MeshPhongMaterial({color: Colors.red, flatShading: true});

        // 获取顶点位置数组
        const positionAttribute = geomCockpit.getAttribute('position');
        const positions = positionAttribute.array;

        // 修改顶点位置
        for (let i = 0; i < positions.length;){
            if (positions[i] === -40) {
                if (positions[i+1] === 25 && positions[i+2] === 25) {
                    positions[i+1] -= 10;
                    positions[i+2] -= 20;
                }else if (positions[i+1] === 25 && positions[i+2] === -25) {
                    positions[i+1] -= 10;
                    positions[i+2] += 20;
                }else if (positions[i+1] === -25 && positions[i+2] === 25) {
                    positions[i+1] += 30;
                    positions[i+2] -= 20;
                }else if (positions[i+1] === -25 && positions[i+2] === -25) {
                    positions[i+1] += 30;
                    positions[i+2] += 20;
                }
            }
            i+=3;
        }

        const cockpit = new THREE.Mesh(geomCockpit, matCockpit);
        cockpit.castShadow = true;
        cockpit.receiveShadow = true;
        this.model.add(cockpit);

        // 创建引擎
        const geomEngine = new THREE.BoxGeometry(20, 50, 50, 1, 1, 1);
        const matEngine = new THREE.MeshPhongMaterial({color: Colors.white, flatShading: true});

        const engine = new THREE.Mesh(geomEngine, matEngine);
        engine.position.x = 40;
        engine.castShadow = true;
        engine.receiveShadow = true;
        this.model.add(engine);

        // 创建尾翼
        const geomTailPlane = new THREE.BoxGeometry(15, 20, 5, 1, 1, 1);
        const matTailPlane = new THREE.MeshPhongMaterial({color: Colors.red, flatShading: true});

        const tailPlane = new THREE.Mesh(geomTailPlane, matTailPlane);
        tailPlane.position.set(-35,25,0);
        tailPlane.castShadow = true;
        tailPlane.receiveShadow = true;
        this.model.add(tailPlane);

        // 创建机翼
        const geomSideWing = new THREE.BoxGeometry(40, 4, 150, 1, 1, 1);
        const matSideWing = new THREE.MeshPhongMaterial({color: Colors.red, flatShading: true});


        const sideWingTop = new THREE.Mesh(geomSideWing, matSideWing);

        const sideWingBottom = new THREE.Mesh(geomSideWing, matSideWing);
        sideWingTop.castShadow = true;
        sideWingTop.receiveShadow = true;
        sideWingBottom.castShadow = true;
        sideWingBottom.receiveShadow = true;

        sideWingTop.position.set(20,12,0);
        sideWingBottom.position.set(20,-3,0);
        this.model.add(sideWingTop);
        this.model.add(sideWingBottom);

        // 创建挡风玻璃
        const geomWindshield = new THREE.BoxGeometry(3, 15, 20, 1, 1, 1);
        const matWindshield = new THREE.MeshPhongMaterial({
            color: Colors.white,
            transparent: true,
            opacity: .3,
            flatShading: true
        });
        const windshield = new THREE.Mesh(geomWindshield, matWindshield);
        windshield.position.set(5,27,0);

        windshield.castShadow = true;
        windshield.receiveShadow = true;

        this.model.add(windshield);


        // 创建螺旋桨
        const geomPropeller = new THREE.BoxGeometry(20, 10, 10);
        // 获取顶点位置数组
        const positionAttribute2 = geomPropeller.getAttribute('position');
        const positions2 = positionAttribute2.array;
        // 修改顶点位置
        for (let i = 0; i < positions2.length;){
            if (positions2[i] === -10) {
                if (positions2[i+1] === 5 && positions2[i+2] === 5) {
                    positions2[i+1] -= 3;
                    positions2[i+2] -= 3;
                }else if (positions2[i+1] === 5 && positions2[i+2] === -5) {
                    positions2[i+1] -= 3;
                    positions2[i+2] += 3;
                }else if (positions2[i+1] === -5 && positions2[i+2] === 5) {
                    positions2[i+1] += 3;
                    positions2[i+2] -= 3;
                }else if (positions2[i+1] === -5 && positions2[i+2] === -5) {
                    positions2[i+1] += 3;
                    positions2[i+2] += 3;
                }
            }
            i+=3;
        }
        const matPropeller = new THREE.MeshPhongMaterial({color: Colors.brown, flatShading: true});
        this.propeller = new THREE.Mesh(geomPropeller, matPropeller);
        this.propeller.castShadow = true;
        this.propeller.receiveShadow = true;


        const geomBlade1 = new THREE.BoxGeometry(1, 100, 10, 1, 1, 1);
        const geomBlade2 = new THREE.BoxGeometry(1, 10, 100, 1, 1, 1);
        const matBlade = new THREE.MeshPhongMaterial({color: Colors.brownDark, flatShading: true});


        const blade1 = new THREE.Mesh(geomBlade1, matBlade);
        blade1.position.set(8,0,0);
        blade1.castShadow = true;
        blade1.receiveShadow = true;

        const blade2 = new THREE.Mesh(geomBlade2, matBlade);
        blade2.position.set(8,0,0);
        blade2.castShadow = true;
        blade2.receiveShadow = true;
        this.propeller.add(blade1, blade2);
        this.propeller.position.set(50,0,0);
        this.model.add(this.propeller);

        // 创建轮罩
        const wheelProtectGeom = new THREE.BoxGeometry(30, 15, 10, 1, 1, 1);
        const wheelProtectMat = new THREE.MeshPhongMaterial({color: Colors.white, flatShading: true});
        const wheelProtectR = new THREE.Mesh(wheelProtectGeom, wheelProtectMat);
        wheelProtectR.position.set(25,-20,25);
        this.model.add(wheelProtectR);

        // 创建轮胎
        const wheelTireGeom = new THREE.BoxGeometry(24, 24, 4);
        const wheelTireMat = new THREE.MeshPhongMaterial({color: Colors.brownDark, flatShading: true});
        const wheelTireR = new THREE.Mesh(wheelTireGeom, wheelTireMat);
        wheelTireR.position.set(25,-28,25);

        // 创建轴
        const wheelAxisGeom = new THREE.BoxGeometry(10, 10, 6);
        const wheelAxisMat = new THREE.MeshPhongMaterial({color: Colors.brown, flatShading: true});
        const wheelAxis = new THREE.Mesh(wheelAxisGeom, wheelAxisMat);
        wheelTireR.add(wheelAxis);

        this.model.add(wheelTireR);

        // 复制轮罩和轮胎到左侧
        const wheelProtectL = wheelProtectR.clone();
        wheelProtectL.position.z = -wheelProtectR.position.z ;
        this.model.add(wheelProtectL);

        const wheelTireL = wheelTireR.clone();
        wheelTireL.position.z = -wheelTireR.position.z;
        this.model.add(wheelTireL);

        // 创建后轮胎
        const wheelTireB = wheelTireR.clone();
        wheelTireB.scale.set(.5,.5,.5);
        wheelTireB.position.set(-35,-5,0);this.model.add(wheelTireB);

        // 创建悬挂系统
        const suspensionGeom = new THREE.BoxGeometry(4, 20, 4);
        suspensionGeom.applyMatrix4(new THREE.Matrix4().makeTranslation(0,10,0))
        const suspensionMat = new THREE.MeshPhongMaterial({color: Colors.red, flatShading: true});
        const suspension = new THREE.Mesh(suspensionGeom, suspensionMat);
        suspension.position.set(-35,-5,0);
        suspension.rotation.z = -.3;
        this.model.add(suspension);
    }
}