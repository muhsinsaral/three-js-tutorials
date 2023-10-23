import { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
function App() {
  useEffect(() => {
    let scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);

    let camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 500);
    camera.position.x = 6;
    camera.position.y = 6;
    camera.position.z = 2;

    let hlight = new THREE.AmbientLight(0x404040, 100);
    scene.add(hlight);

    //Adding directional lights
    let directionalLight = new THREE.DirectionalLight(0xffffff, 10);
    directionalLight.position.set(0, 1, 1);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    //Adding Shadow
    // let light = new THREE.PointLight(0xc4c4c4, 10);
    // light.position.set(0, 300, 500);
    // scene.add(light);

    // let light2 = new THREE.PointLight(0xc4c4c4, 10);
    // light2.position.set(500, 100, 0);
    // scene.add(light2);

    // let light3 = new THREE.PointLight(0xc4c4c4, 10);
    // light3.position.set(0, 100, -500);
    // scene.add(light3);

    // let light4 = new THREE.PointLight(0xc4c4c4, 10);
    // light4.position.set(-500, 300, 0);
    // scene.add(light4);

    let renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    let controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', renderer);

    let loader = new GLTFLoader();
    loader.load('src/assets/gltf/tank/scene.gltf', function (gltf) {
      //Reduce the Car size by half
      let car = gltf.scene.children[0];
      car.scale.set(0.5, 0.5, 0.5);
      scene.add(gltf.scene);
      animate();
    });
    
    function animate() {
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
  }, [])

  // const loader = new GLTFLoader();
  // loader.load('/src/assets/gltf/tank/scene.gltf', function (gltf) {

  //   scene.add(gltf.scene);

  // }, undefined, function (error) {

  //   console.error(error);

  // });


  // const scene = new THREE.Scene();
  // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  // const renderer = new THREE.WebGLRenderer();
  // renderer.setSize(window.innerWidth, window.innerHeight);
  // document.body.appendChild(renderer.domElement);

  // const geometry = new THREE.BoxGeometry(1, 1, 1);
  // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  // const cube = new THREE.Mesh(geometry, material);

  // scene.add(cube);

  // camera.position.z = 5;

  // function animate() {
  //   requestAnimationFrame(animate);
  //   cube.rotation.x += 0.01;
  //   cube.rotation.y += 0.01;
  //   renderer.render(scene, camera);
  // }
  // animate();

  // Drawings Lines
  // const renderer = new THREE.WebGLRenderer();
  // renderer.setSize(window.innerWidth, window.innerHeight);
  // document.body.appendChild(renderer.domElement);

  // const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
  // camera.position.set(0, 0, 100);
  // camera.lookAt(0, 0, 0);

  // const scene = new THREE.Scene();

  // //create a blue LineBasicMaterial
  // const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

  // const points = [];
  // points.push(new THREE.Vector3(- 30, 0, 0));
  // points.push(new THREE.Vector3(-20, 10, 0));
  // points.push(new THREE.Vector3(-10, 0, 0));
  // points.push(new THREE.Vector3(0, 10, 0));
  // points.push(new THREE.Vector3(10, 0, 0));
  // points.push(new THREE.Vector3(20, 10, 0));

  // const geometry = new THREE.BufferGeometry().setFromPoints(points);

  // const line = new THREE.Line(geometry, material);

  // scene.add(line);
  // renderer.render(scene, camera);
  return (
    <>
    </>
  )

}

export default App
