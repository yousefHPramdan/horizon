/**
 * Horizon Theme Hybrid Entrypoint
 * Imports modular components and global styles.
 */
import 'vite/modulepreload-polyfill';
import '../styles/main.css';

// Import Global Scripts (Dawn Ports)
// Note: These are often loaded via <script> tags in Liquid, 
// but can be imported here if adapted to modules.
// import '../assets/cart.js'; 

// Import Modern Web Components
import './../components/slider-component.js';
import './../components/scroll-reveal.js';
import './../components/hero-3d.js';

console.log('Horizon Hybrid Theme Loaded');
