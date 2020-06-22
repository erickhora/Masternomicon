/* //Variables for setup

let container;
let camera;
let renderer;
let scene;
let die;

function init() {
    container = document.querySelector(".scene");

    //Create scene
    scene = new THREE.Scene();

    const fov = 35;
    const aspect = container.clientWidth / container.clientHeight;
    const near = 0.1;
    const far = 1000;

    //Camera setup
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 0, 15);

    //Light
    // const ambient = new THREE.AmbientLight(0x404040, 100);
    // scene.add(ambient);

    const light = new THREE.DirectionalLight(0xffffff, 100);
    light.position.set(0, 2, 10);
    scene.add(light);

    // let helper = new THREE.DirectionalLightHelper(light, 5);
    // scene.add(helper);

    //Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement);

    //Load Model
    let loader = new THREE.GLTFLoader();
    loader.load("./d20/scene.gltf", function(gltf) {
        scene.add(gltf.scene);
        die = gltf.scene.children[0];
        die.position.y = 6;
        animate();
    });
}

let rotxADD = 0.05;
let posySUB = 0.05;
let posxADD = 0.05;
let scaleADD = 0.05;

function animate() {
    requestAnimationFrame(animate);
    die.rotation.x += rotxADD;
    die.position.y -= posySUB;
    if (die.position.y <= 0) {
        posySUB = 0;
    }
    if (die.rotation.x >= 6.2) {
        rotxADD = 0;
    }
    setTimeout(() => {
        die.position.x += posxADD;
        die.scale.x += scaleADD;
        die.scale.y += scaleADD;
        die.scale.z += scaleADD;
        if (die.position.x >= 5) {
            posxADD = 0;
        }
        if (die.scale.x >= 5 && die.scale.y >= 5 && die.scale.z >= 5) {
            scaleADD = 0;
        }
    }, 3500);
    renderer.render(scene, camera);
}

init();

function onWindowResize() {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener("resize", onWindowResize);

//////////// CSS Manipulation //////
let element = document.querySelector("#landing-page");
setTimeout(() => {
    element.style.display = "block";
}, 5000); */