import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/**
 * Counter - A JavaScript class for animating a numeric counter that starts when scrolled into view.
 *
 * Usage:
 * Import the `Counter` class and initialize it with a configuration object specifying the target element,
 * end value, duration, and other options. This class uses GSAP and ScrollTrigger to animate the counter
 * from an initial value to the specified end value.
 *
 * Example:
 * ```javascript
 * import Counter from '@terrahq/counter';
 * 
 * const counter = new Counter({
 *     element: document.querySelector(".counter-element"),
 *     endValue: 5000,            // The final value of the counter
 *     duration: 2,               // Duration of the animation in seconds
 *     separator: ".",            // Thousands separator (optional)
 *     start: "top center",       // ScrollTrigger start position (optional)
 *     debug: true,               // Display ScrollTrigger markers (optional, now called debug)
 *     easing: "power1.out",      // Easing of the animation (optional)
 *     autoPlay: true,            // Start animation on scroll (optional)
 *     playOnce: true,            // Run animation only once (optional)
 *     onComplete: () => console.log("Counter animation complete!") // Callback on animation complete
 * });
 * 
 * Additional methods
 * counter.play();      // Start the animation manually
 * counter.update();    // Update the ScrollTrigger position
 * counter.destroy();   // Clean up the instance and stop animations
 * ```
 *
 * @class Counter
 * @param {Object} payload Configuration options for the Counter instance.
 * @returns {Counter} Instance of the Counter class.
 */

class Counter {
    constructor(payload) {
        const {
            element,
            endValue = 1000,
            duration = 2,
            separator = ",",
            start = "top top",
            debug = false,
            easing = "power1.out",
            autoPlay = false,
            playOnce = false,
            onComplete = null
        } = payload;

        // Validate that `element` is a single HTML element
        if (!element || element instanceof NodeList || Array.isArray(element)) {
            throw new Error("The 'element' must be a single HTMLElement.");
        }

        // Assign properties
        this.DOM = { element };
        this.endValue = endValue;
        this.duration = duration;
        this.separator = separator;
        this.start = start;
        this.debug = debug;
        this.easing = easing;
        this.autoPlay = autoPlay;
        this.playOnce = playOnce;
        this.onComplete = onComplete;
        this.counterStarted = false;
        this.scrollTrigger = null;
        this.animation = null;

        this.init();
    }

    init() {
        if (this.autoPlay) {
            this.scrollTrigger = ScrollTrigger.create({
                trigger: this.DOM.element,
                start: this.start,
                onEnter: () => this.handlePlay(),
                markers: this.debug
            });
        }
    }

    handlePlay() {
        if (!this.counterStarted || !this.playOnce) {
            this.startCounter();
        }
    }

    play() {
        this.handlePlay();
    }

    startCounter() {
        this.counterStarted = true;

        const startValue = parseFloat(this.DOM.element.textContent.replace(/,/g, "")) || 0;
        const self = this;

        this.animation = gsap.to({ value: startValue }, {
            value: this.endValue,
            duration: this.duration,
            ease: this.easing,
            onUpdate: function() {
                self.DOM.element.textContent = self.formatNumber(this.targets()[0].value);
            },
            onComplete: () => {
                if (this.playOnce && this.scrollTrigger) {
                    this.scrollTrigger.kill();
                    this.scrollTrigger = null;
                }
                this.counterStarted = false;

                // Call the onComplete callback if provided
                if (typeof this.onComplete === "function") {
                    this.onComplete();
                }
            }
        });
    }

    formatNumber(value) {
        const parts = value.toFixed(0).split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.separator);
        return parts.join(".");
    }

    // Method to destroy the counter and clear resources
    destroy() {
        if (this.scrollTrigger) {
            this.scrollTrigger.kill();
            this.scrollTrigger = null;
        }
        if (this.animation) {
            this.animation.kill();
            this.animation = null;
        }
        this.counterStarted = false;
    }

    // Method to update ScrollTrigger's position
    update() {
        if (this.scrollTrigger) {
            this.scrollTrigger.refresh();
        }
    }
}

export default Counter;