let scene, camera, renderer, graphs = [];

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#bg-canvas'),
        alpha: true
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);

    // Create multiple graphs
    for (let i = 0; i < 10; i++) {
        createGraph();
    }

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    animate();
}

function createGraph() {
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const size = Math.random() * 10 + 5;

    for (let i = 0; i < 100; i++) {
        const x = Math.random() * size - size / 2;
        const y = Math.random() * size - size / 2;
        const z = Math.random() * size - size / 2;
        vertices.push(x, y, z);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    const material = new THREE.LineBasicMaterial({ color: 0x00ffff });
    const graph = new THREE.Line(geometry, material);

    graph.position.set(
        Math.random() * 60 - 30,
        Math.random() * 60 - 30,
        Math.random() * 60 - 30
    );

    scene.add(graph);
    graphs.push(graph);
}

function animate() {
    requestAnimationFrame(animate);

    graphs.forEach(graph => {
        graph.rotation.x += 0.001;
        graph.rotation.y += 0.002;
    });

    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
