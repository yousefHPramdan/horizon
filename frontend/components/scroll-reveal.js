import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

class ScrollReveal extends HTMLElement {
    connectedCallback() {
        this.init();
    }

    init() {
        const target = this.querySelector('[data-animate-target]') || this;
        const animationType = this.getAttribute('data-animation') || 'fade-up';

        let vars = {
            scrollTrigger: {
                trigger: this,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            duration: 1.0,
            ease: 'power3.out'
        };

        // Define animation types
        switch (animationType) {
            case 'fade-up':
                vars.opacity = 0;
                vars.y = 50;
                gsap.from(target, vars);
                break;
            case 'fade-in':
                vars.opacity = 0;
                gsap.from(target, vars);
                break;
            case 'scale-up':
                vars.scale = 0.8;
                vars.opacity = 0;
                gsap.from(target, vars);
                break;
        }
    }
}

if (!customElements.get('scroll-reveal')) {
    customElements.define('scroll-reveal', ScrollReveal);
}
