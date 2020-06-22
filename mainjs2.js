let scene, camera, renderer, die, container;

//Cube
function createDie() {
    let geometry = new THREE.IcosahedronGeometry(1, 0);
    let material = new THREE.MeshBasicMaterial({ color: 0xfbc223, wireframe: true });
    die = new THREE.Mesh(geometry, material);
    scene.add(die);
}

function init() {
    //Container
    container = document.querySelector(".scene");

    //Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xababab);

    //Camera
    camera = new THREE.PerspectiveCamera(35, container.clientWidth / container.clientHeight, 1, 1000);
    camera.position.z = 20;

    //Helpers
    // axes = new THREE.AxesHelper(5);
    // scene.add(axes);

    //Die
    createDie();
    die.position.y = 8;

    //Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    document.body.appendChild(renderer.domElement);
}

//Main loop animation
let posySUB = 0.1;
let rotxADD = 0.065;
let posxADD = 0.05;
let scaleADD = 0.025;


function mainLoop() {
    setInterval(() => {
        die.position.y -= posySUB;
        die.rotation.x += rotxADD;
    }, 1400);
    if (die.position.y <= 0) {
        posySUB = 0;
        rotxADD = 0;
    }
    renderer.render(scene, camera);
    requestAnimationFrame(mainLoop);
}

function expandAnimation() {
    setTimeout(() => {
        die.position.x += posxADD;
        die.scale.x += scaleADD;
        die.scale.y += scaleADD;
        die.scale.z += scaleADD;
        die.rotation.y -= 0.001
    }, 3000);
    if (die.position.x >= 6) {
        posxADD = 0;
    }
    if (die.scale.x >= 4 && die.scale.z >= 4 && die.scale.z >= 4) {
        die.scale.x = 4;
        die.scale.y = 4;
        die.scale.z = 4;
    }

    renderer.render(scene, camera);
    requestAnimationFrame(expandAnimation);
}

/////////////////////// Execution ///////////////////////////////
init();
mainLoop();
expandAnimation();
// removeCanvas();

/////////////////////// Resizing ///////////////////////////////
function onWindowResize() {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener("resize", onWindowResize);

/////////// Removing canvas and .scene classes ////////
function removeCanvas() {
    setTimeout(() => {
        let body = document.querySelector("body");
        let canvas = document.querySelector("canvas");
        body.removeChild(canvas)
    }, 3200);
}

function addDie() {
    setTimeout(() => {
        let body = document.querySelector("body");
    }, 3200);
}