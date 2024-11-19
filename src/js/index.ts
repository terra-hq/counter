import "./../scss/style.scss";
import Counter from "./Counter";

document.addEventListener("DOMContentLoaded", () => {
    /**
     * Counter 1
     */
    const counter1 = new Counter({
        element: document.querySelector(".counter-element-1"),
        duration: 12,
        separator: "",
        start: "top center",
        debug: true,
        easing: "power1.out",
        autoPlay: true,
        playOnce: true,
        onComplete: () => console.log("Counter animation complete!"),
    });

    /**
     * Counter 2
     */
    const counter2 = new Counter({
        element: document.querySelector(".counter-element-2"),
        duration: 4,
        separator: ",",
        start: "top center",
        debug: true,
        easing: "power1.out",
        autoPlay: true,
        playOnce: true, // Activar solo una vez
        decimalPlaces: 1,
    });

    /**
     * Counter 3
     */
    const counter3 = new Counter({
        element: document.querySelector(".counter-element-3"),
        duration: 4,
        separator: ",",
        start: "top center",
        debug: true,
        easing: "power1.out",
        autoPlay: true,
        playOnce: true, // Activar solo una vez
    });

    /**
     * Counter 4
     */
    const counter4 = new Counter({
        element: document.querySelector(".counter-element-4"),
        duration: 4,
        separator: ",",
        start: "top 35%",
        easing: "power1.out",
        debug: true,
        autoPlay: true,
        playOnce: false, // Activar solo una vez
    });

    /**
     * Counter 5
     */
    const counter5 = new Counter({
        element: document.querySelector(".counter-element-5"),
        duration: 4,
        separator: ".",
        start: "top 75%",
        debug: true,
        easing: "elastic.out(1,0.3)",
        autoPlay: true,
        playOnce: true, // Activar solo una vez
    });

    /**
     * Counter 6
     */
    const counter6 = new Counter({
        element: document.querySelector(".counter-element-6"),
        duration: 4,
        separator: ",",
        start: "top 75%",
        debug: true,
        easing: "elastic.out(1,0.3)",
        autoPlay: false,
        playOnce: true, // Activar solo una vez
    });
    document.querySelector(".js--fireAnimation")?.addEventListener("click", (e) => {
        e.preventDefault();
        counter6.play();
    });

    /**
     * Counter 7
     */
    const counter7 = new Counter({
        element: document.querySelector(".counter-element-7"),
        duration: 4,
        separator: ",",
        start: "top 75%",
        debug: true,
        easing: "power1.out",
        autoPlay: true,
        playOnce: true, // Activar solo una vez
        decimalPlaces: 1,
    });
});
