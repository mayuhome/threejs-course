import * as THREE from 'three';
export function setupFirstCube(element: HTMLCanvasElement) {
    const scene = new THREE.Scene();

    // red cube
// red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// camera

const camera = new THREE.PerspectiveCamera(75, 400 / 400, 0.1, 1000);
camera.position.z = 5;
scene.add(camera);

// size
const size = {
    width: 400,
    height: 400
}

// renderer
const renderer = new THREE.WebGLRenderer({
    canvas: element
});
renderer.setSize(size.width, size.height);
// renderer.render(scene, camera);

// animation loop
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
}


  