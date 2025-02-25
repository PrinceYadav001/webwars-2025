        // Three.js 3D Scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();

        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('scene-container').appendChild(renderer.domElement);

        const particles = new THREE.BufferGeometry();
        const particleCount = 1000;
        const posArray = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 10;
        }

        particles.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        const material = new THREE.PointsMaterial({
            size: 0.005,
            color: 0x2A9D8F,
            transparent: true,
            opacity: 0.8
        });

        const particleMesh = new THREE.Points(particles, material);
        scene.add(particleMesh);

        camera.position.z = 2;

        function animate() {
            requestAnimationFrame(animate);

            particleMesh.rotation.y += 0.001;

            renderer.render(scene, camera);
        }

        animate();
        const yearElement = document.getElementById("year");
const yearText = "2025";
let index = 0;
let isDeleting = false;

function rewriteEffect() {
    if (!isDeleting && index <= yearText.length) {
        yearElement.textContent = yearText.substring(0, index);
        index++;
    } else if (isDeleting && index >= 0) {
        yearElement.textContent = yearText.substring(0, index);
        index--;
    }

    if (!isDeleting && index === yearText.length) {
        setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && index === 0) {
        isDeleting = false;
    }

    setTimeout(rewriteEffect, isDeleting ? 100 : 200);
}

rewriteEffect();


document.addEventListener("DOMContentLoaded", () => {
    const speakers = document.querySelectorAll(".speaker");

    speakers.forEach(speaker => {
        speaker.addEventListener("mouseenter", () => {
            speaker.style.transform = "scale(1.1)";
        });

        speaker.addEventListener("mouseleave", () => {
            speaker.style.transform = "scale(1)";
        });
    });
});
