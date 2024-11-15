import './../scss/style.scss';

import gsap from 'gsap';
import Counter from './Counter';
document.addEventListener("DOMContentLoaded", () => {

  /**
   * Counter 1
  */
  const counter1 = new Counter({
      element: document.querySelector(".counter-element-1"),
      endValue: 2000,
      duration: 12,
      separator: "",
      start: "top center",
      debug: true,
      easing: "power1.out",
      autoPlay: true,
      playOnce: true,
      onComplete: () => console.log("Counter animation complete!")
  });
  

  /**
   * Counter 1
  */
  const counter2 = new Counter({
      element: document.querySelector(".counter-element-2"),
      endValue: 6000,
      duration: 4,
      separator: ".",
      start: "top center",
      debug: true,
      easing: "power1.out",
      autoPlay: true,
      playOnce: true // Activar solo una vez
  });


    const counter3 = new Counter({
      element: document.querySelector(".counter-element-3"),
      endValue: 1230,
      duration: 4,
      separator: ",",
      start: "top center",
      debug: true,
      easing: "power1.out",
      autoPlay: true,
      playOnce: true // Activar solo una vez
  });

  const counter4 = new Counter({
    element: document.querySelector(".counter-element-4"),
    endValue: 1230,
    duration: 4,
    separator: ",",
    start: "top 35%",
    easing: "power1.out",
    debug: true,
    autoPlay: true,
    playOnce: false // Activar solo una vez
  });

  const counter5 = new Counter({
    element: document.querySelector(".counter-element-5"),
    endValue: 1230,
    duration: 4,
    separator: ",",
    start: "top 75%",
    debug: true,
    easing:  "elastic.out(1,0.3)",
    autoPlay: true,
    playOnce: true // Activar solo una vez
  });


  const counter6 = new Counter({
    element: document.querySelector(".counter-element-6"),
    endValue: 1230,
    duration: 4,
    separator: ",",
    start: "top 75%",
    debug: true,
    easing:  "elastic.out(1,0.3)",
    autoPlay: false,
    playOnce: true // Activar solo una vez
  });
  document.querySelector(".js--fireAnimation")?.addEventListener("click", (e) => {
    e.preventDefault();
    counter6.play();
  });

  const counter7 = new Counter({
    element: document.querySelector(".counter-element-7"),
    endValue: 41.9,
    duration: 4,
    separator: ".",
    start: "top 75%",
    debug: true,
    easing:  "elastic.out(1,0.3)",
    autoPlay: true,
    playOnce: true, // Activar solo una vez
    decimalPlaces : 1
  });


});