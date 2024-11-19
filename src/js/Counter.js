import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

class Counter {
    constructor(payload) {
        const { element, duration = 2, separator = ",", start = "top top", debug = false, easing = "power1.out", autoPlay = false, playOnce = false, onComplete = null, decimalPlaces = 0 } = payload;

        // Validate that `element` is a single HTML element
        if (!element || element instanceof NodeList || Array.isArray(element)) {
            throw new Error("The 'element' must be a single HTMLElement.");
        }

        // Assign properties
        this.DOM = { element };
        this.duration = duration;
        this.separator = separator;
        this.start = start;
        this.debug = debug;
        this.easing = easing;
        this.autoPlay = autoPlay;
        this.playOnce = playOnce;
        this.onComplete = onComplete;
        this.decimalPlaces = decimalPlaces;
        this.counterStarted = false;
        this.scrollTrigger = null;
        this.animation = null;

        // Prepare the content, extracting the number and wrapping it in a span
        this.prepareElement();

        // Initialize scroll trigger if autoPlay is enabled
        this.init();
    }

    // Method to prepare the element's content
    prepareElement() {
        // Use a regex to identify and extract the number part of the text content
        const originalText = this.DOM.element.textContent;
        const sanitizedNumber = this.extractNumber(originalText);

        if (sanitizedNumber) {
            // Replace the number in the original text with a span containing the number
            const wrappedNumberHTML = originalText.replace(sanitizedNumber, `<span class="animated-number">${sanitizedNumber}</span>`);

            // Update the HTML of the element with the new content
            this.DOM.element.innerHTML = wrappedNumberHTML;

            // Store a reference to the new span for animation
            this.DOM.numberSpan = this.DOM.element.querySelector(".animated-number");

            // Determine the end value for animation based on the sanitized number
            this.endValue = parseFloat(sanitizedNumber.replace(/,/g, "")) || 0;

            // Check if the number has decimals
            this.hasDecimals = (sanitizedNumber.includes(".") && this.separator == ",") || (sanitizedNumber.includes(",") && this.separator == ".");
        } else {
            console.warn("No valid number found in the element's text content.");
        }
    }

    // Method to extract a sanitized number from a string, keeping ',' and '.' as valid characters
    extractNumber(text) {
        const match = text.match(/[\d.,]+/); // Match numbers with optional commas and periods
        return match ? match[0] : null;
    }

    init() {
        if (this.autoPlay && this.DOM.numberSpan) {
            this.scrollTrigger = ScrollTrigger.create({
                trigger: this.DOM.element,
                start: this.start,
                onEnter: () => this.handlePlay(),
                markers: this.debug,
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

        if (!this.DOM.numberSpan) {
            console.warn("No number span found for animation.");
            return;
        }

        const self = this;
        this.animation = gsap.to(
            { value: 0 },
            {
                value: this.endValue,
                duration: this.duration,
                ease: this.easing,
                onUpdate: function () {
                    // Use formatNumber to properly format integers and decimals
                    const formattedValue = self.formatNumber(this.targets()[0].value);
                    self.DOM.numberSpan.textContent = formattedValue;
                },
                onComplete: () => {
                    if (this.playOnce && this.scrollTrigger) {
                        this.scrollTrigger.kill();
                        this.scrollTrigger = null;
                    }
                    this.counterStarted = false;

                    if (typeof this.onComplete === "function") {
                        this.onComplete();
                    }
                },
            }
        );
    }

    formatNumber(value) {
        // If the number has decimals or decimalPlaces > 0, format with decimals
        const roundedValue = this.hasDecimals && this.decimalPlaces > 0 ? value.toFixed(this.decimalPlaces) : Math.round(value).toString();

        // Separate the integer and decimal parts if they exist
        const parts = roundedValue.split(".");

        // Add the thousand separators to the integer part
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.separator);

        // If there are decimals, join them with the decimal separator
        return parts.length > 1 ? parts.join(".") : parts[0];
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
