const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true,
    
});

gsap.from(".nlink",{
    y:15,
    duration: 1,
    delay:0.7,
    opacity:0,
    stagger:0.1
})


// var tl = gsap.timeline()
// function navigation() {
//     tl.from(".nav", {
//     y:-100,
//     opacity:0,
//     duration:2,
//     delay:0.5,
//     stagger:0.3,
// })
// tl.from(".nav a", {
//     y:10,
//     duration:2,
//     delay:0.2,
//     stagger:0.5,
//     yoyo:2,
// })
// }
// navigation()

// function sustain(){
//     gsap.from(".sustain img", {
//         delay:1,
//         duration:2,
//         scale:0,
//         opacity:0,
//     })
// }
// sustain()

// function headings(){
//     gsap.from(".ephemeral>.headings", {
//         delay:1,
//         duration:2,
//         scale:2,
//         opacity:0,
//     })
// }
// headings()

// function ivisit(){
//     gsap.from(".visit i", {
//         x:150,
//         delay:1,
//         duration:3,
//         scale:2,
//         opacity:0,
//     })
// }
// ivisit()


Shery.textAnimate(".headings h1", {
    style: 2,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

  Shery.imageEffect(".ephemeral img", {
    style: 3,
    config: {"uFrequencyX":{"value":26.72,"range":[0,100]},"uFrequencyY":{"value":22.9,"range":[0,100]},"uFrequencyZ":{"value":18.32,"range":[0,100]},"geoVertex":{"range":[1,64],"value":35.15},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6249999751647324},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    preset: "./presets/wigglewobble.json",
  });

gsap.from(".anime1",{
    y:30,
    opacity:0,
    duration:1,
    delay: 0.4,
    stagger:0.3,
    ease: expo,
})



