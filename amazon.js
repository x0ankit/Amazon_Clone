gsap.to("#navbar", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "90px",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      // markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });

  gsap.to("main", {
    backgroundColor: "#FE4503",
    scrollTrigger: {
      trigger: "main",
      scroller: "body",
      start: "top 0%",
      end: "top -70%",
      scrub: 2,
    },
  });