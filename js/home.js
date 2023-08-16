var circle = document.querySelector(".circle");
var frames = document.querySelectorAll(".frame");
const lerp = (x, y, a) => x * (1 - a) + y * a;
window.addEventListener("mousemove", function (dets) {
  gsap.to(circle, {
    x: dets.clientX,
    y: dets.clientY,
    duration: 0.2,
    ease: Expo,
  });
});

frames.forEach((frame) => {
  frame.addEventListener("mouseenter", function (dets) {
    var dims = frame.getBoundingClientRect();
    var xstart = dims.x;
    var xend = dims.x + dims.width;

    var zo = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);

    gsap.to(circle, {
      scale: 6,
    });
    gsap.to(frame.children, {
      color: "#fff",
      duration: 0.4,
      y: "-5vw",
    });
    gsap.to(frame.children, {
      x: lerp(-50, 50, zo),
      duration: 0.3,
    });
  });
  frame.addEventListener("mouseleave", function (dets) {
    gsap.to(circle, {
      scale: 1,
    });
    gsap.to(frame.children, {
      color: "#111",
      y: 0,
    });
    gsap.to(frame.children, {
      x: 0,
      duration: 0.3,
    });
  });
});

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    // markers:true,
    start: "38% 50%",
    end: "100% 50%",
    scrub: 2,
    pin: true,
  },
});
tl.to(
  ".frames",
  {
    top: "-50%",
  },
  "a"
)
  .to(
    "#card-one",
    {
      top: "35%",
    },
    "a"
  )
  .to(
    "#card-two",
    {
      top: "130%",
    },
    "a"
  )
  .to(
    "#card-two",
    {
      top: "42%",
    },
    "b"
  )
  .to(
    "#card-one",
    {
      width: "65%",
      height: "65vh",
    },
    "b"
  )
  .to(
    "#card-three",
    {
      top: "130%",
    },
    "b"
  )
  .to(
    "#card-three",
    {
      top: "50%",
    },
    "c"
  )
  .to(
    "#card-two",
    {
      width: "70%",
      height: "70vh",
    },
    "c"
  )
  .to(
    "#card-two",
    {
      width: "65%",
      height: "65vh",
    },
    "c"
  )
  .to(
    "#card-four",
    {
      top: "130%",
    },
    "c"
  )
  .to(
    "#card-four",
    {
      top: "50%",
    },
    "d"
  )
  .to(
    "#card-three",
    {
      width: "70%",
      height: "70vh",
    },
    "d"
  )
  .to(
    "#card-three",
    {
      width: "65%",
      height: "65vh",
    },
    "d"
  )
  .to(
    "#card-five",
    {
      top: "130%",
    },
    "d"
  )
  .to(
    "#card-five",
    {
      top: "50%",
    },
    "e"
  )
  .to(
    "#card-four",
    {
      width: "70%",
      height: "70vh",
    },
    "e"
  );
