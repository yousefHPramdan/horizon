import Flickity from 'flickity';
import 'flickity/css/flickity.css';

class SliderComponent extends HTMLElement {
    constructor() {
        super();
        this.flkty = null;
    }

    connectedCallback() {
        // Determine if we should init immediately or wait
        if (this.childElementCount > 0) {
            this.init();
        } else {
            // Wait for children if strictly necessary, though usually they are parsed
            requestAnimationFrame(() => this.init());
        }
    }

    init() {
        if (this.flkty) return;

        const container = this.querySelector('[data-slider-container]');
        if (!container) return;

        const options = JSON.parse(this.getAttribute('data-options') || '{}');
        const defaultOptions = {
            cellAlign: 'left',
            contain: true,
            prevNextButtons: true,
            pageDots: true,
            resize: true,
            ...options
        };

        this.flkty = new Flickity(container, defaultOptions);
    }

    disconnectedCallback() {
        if (this.flkty) {
            this.flkty.destroy();
            this.flkty = null;
        }
    }
}

// Define the custom element
if (!customElements.get('slider-component')) {
    customElements.define('slider-component', SliderComponent);
}
