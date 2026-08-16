gsap.registerPlugin(ScrollTrigger);

document.addEventListener("mousemove", function (e) {
    gsap.to("#pointer", {
        x: e.clientX - 20,
        y: e.clientY - 20,
        duration: 0.3,
        ease: "power3.out"
    });
});

gsap.from(".navbar-brand", {
    y: -20,
    opacity: 0,
    duration: 1,
    delay: 1
});

gsap.from("li", {
    y: -20,
    opacity: 0,
    duration: 2,
    delay: 2,
    stagger: 0.3
});

gsap.to("#head1", {
    text: { value: "Mehak Ilyas !" },
    duration: 3,
    delay: 2,
    ease: "none"
});

gsap.to("#head2", {
    text: { value: "Student | Learner | Builder" },
    duration: 4,
    delay: 3,
    ease: "none"
});

gsap.to("#head3", {
    text: { value: "The Journey So Far" },
    duration: 6,
    delay: 4,
    ease: "none"
});

gsap.from(".things-ive-built .card, .milestones .card", {
    y: 130,
    opacity: 8,
    duration: 1.2,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".things-ive-built, .milestones",
        start: "top 80%",
        once: true
    }
});

// gsap.from("#git-github-title", {
//     y: 30,
//     opacity: 0,
//     duration: 1,
//     ease: "power3.out",
//     scrollTrigger: {
//         trigger: "#git-github-title",
//         start: "top 90%",
//         once: true
//     }
// });

// document.querySelectorAll(".card h3").forEach((heading, index) => {
//     gsap.from(heading, {
//         y: 25,
//         opacity: 0,
//         duration: 0.7,
//         delay: index * 0.08,
//         ease: "power2.out",
//         scrollTrigger: {
//             trigger: heading,
//             start: "top 95%",
//             once: true
//         }
//     });
// });

gsap.set(".title", {
    y: -40,
    opacity: 0
});

gsap.to(".title", {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.6,
    ease: "power3.out"
});
gsap.set(".card-title", {
    y: -40,
    opacity: 0
});

gsap.to(".card-title", {
    y: 0,
    opacity: 1,
    duration: 1.2,
    stagger: 0.2,
    ease: "power3.out"
});

gsap.from("#ourproducts", {
    y: -120,
    opacity: 0,
    duration: 0.8,
    stagger: 0.8,
    ease: "power2.out"
});