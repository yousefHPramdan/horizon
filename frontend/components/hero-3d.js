/**
 * Hero3D Component
 * Dynamically imports Three.js only when the component is in the viewport.
 */
class Hero3D extends HTMLElement {
    constructor() {
        super();
        this.loaded = false;
    }

    connectedCallback() {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !this.loaded) {
                this.loadScene();
                this.loaded = true;
                observer.disconnect();
            }
        }, { rootMargin: '200px' }); // Load a bit before it comes into view

        observer.observe(this);
    }

    async loadScene() {
        // Dynamic import of Three.js to keep initial bundle size low
        const THREE = await import('three');

        const container = this;
        const width = container.clientWidth;
        const height = container.clientHeight;

        // Basic Three.js Setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

        renderer.setSize(width, height);
        container.appendChild(renderer.domElement);

        // Example Content: A rotating cube
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshNormalMaterial({ wireframe: true });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        // Handle Resize
        window.addEventListener('resize', () => {
            const newWidth = container.clientWidth;
            const newHeight = container.clientHeight;
            renderer.setSize(newWidth, newHeight);
            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
        });

        // Animation Loop
        function animate() {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        }
        animate();

        // Disaptch event to let theme know 3D is ready
        this.dispatchEvent(new CustomEvent('3d-loaded', { bubbles: true }));
    }
}

if (!customElements.get('hero-3d')) {
    customElements.define('hero-3d', Hero3D);
}
