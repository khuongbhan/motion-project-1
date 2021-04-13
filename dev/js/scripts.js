import { gsap } from "gsap";

// gsap.to("#orange-circle", { duration: 4, x: 200 });

// gsap.from("#green-square", { duration: 4, scale: 2, alpha: 0, delay: 2, repeat: -1, yoyo: true });

let mainTL = gsap.timeline();

mainTL
    // Circle Move from Right to Left
        .from("#orange-circle", {duration: .3, x: 0, alpha: 0, delay: 1.5})
        .to("#orange-circle", {x:600,duration: 1,alpha: 1, ease: "bounce.out"})
    //     .to("#orange-circle",{ duration: 1, x: 400, delay: 1.5},"stage1")
    //     .to("#orange-circle",{ duration: 1, x: 200},"stage1")
    //     .to("#orange-circle", { duration: 1, x: 100},"stage1")

    //     // .to("#orange-circle", { duration: 4, x: 400, scaleX: 0.85}, "step2")
    //     // .to("#orange-circle", { duration: 2, x: 400, scaleX: 0.9}, "step2")
    //     // .to("#orange-circle", { duration: 1, x: 400, scaleX: 1}, "step2")
    //     // .to("#orange-circle", { duration: 0.5, x: 400}, "step2")

    // Circle Moving Back
        .from("#orange-circle", {duration: 1, x: 600, delay: 0.5,ease: "bounce.out"})
        .to("#orange-circle", {x:0,duration: .3})
    
    // Circle jumping up
    .to("#orange-circle", {delay:1, duration:1, x:-50})
    .to("#orange-circle", {duration:.1, x:30})
    .to("#orange-circle", {duration:1.5, y:-200, x:300, ease:'circ'})
    // .to("#orange-circle", {duration:.5, y:-180, x:330})
    // .to("#orange-circle", {duration:.5, y:-200, x:350})
    .to("#orange-circle", {duration:1.25, y:0, x:600, ease:'circ'})
    .to("#orange-circle", {duration:1.5, y:-100, x:850, ease:'circ'})
    .to("#orange-circle", {duration:1, y:0, x:1150, ease:'circ'})
    // .to("#orange-circle", {duration:.2, scaleX:1, scaleY: .6, y:0, x:600})
    // .to("#orange-circle", {duration:.1, scaleY: .2})
    // .to("#orange-circle", {duration:.1, scaleY: .5})
    // .to("#orange-circle", {duration:.1, scaleY: 1})





