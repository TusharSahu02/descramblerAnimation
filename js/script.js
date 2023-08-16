$(document).ready(function () {
  var $scramble = $(".scramble");
  $scramble.scramble(3000, 20, "alphabet", true);
  //   var $spin = $(".spin");
  //   $spin.scramble(3000, 20, "alphabet", true);
});

var tl = gsap.timeline();
tl.to(".Loading", {
  opacity: 0,
  delay: 2.5,
})
  .to(".loader", {
    // y: "-100%",
    opacity: 0,
    duration: 1,
    ease: "Expo.easeInOut",
  })
  .to(
    ".loader",
    {
      y: "-100%",
      // opacity:0,
      duration: 1,
      // ease: "Expo.easeInOut"
    },
    "up"
  )
  .to(
    ".hero",
    {
      opacity: 1,
      delay: -1.7,
      ease: "Expo.easeInOut",
    },
    "donut"
  )
  .to(
    ".hero_main",
    {
      opacity: 1,
      delay: -1.8,
      ease: "Expo.easeInOut",
    },
    "donut"
  )
  .to(
    "#imgDonut",
    {
      opacity: 1,
      scale: 2,
      delay: -1.4,
      ease: "Expo.easeInOut",
      duration: 3,
    },
    "up"
  )
  .from(
    "#imgS, #imgP, #imgI, #imgC, #imgO, #imgD , #imgE,#imgR",
    {
      opacity: 0,
      duration: 1,
      scale: 0,
      top: "40%",
      left: "47%",
    },
    "up"
  );

var tl2 = gsap.timeline();

document.querySelectorAll(".explore").forEach(function (elem) {
  elem.addEventListener("click", function () {
    tl2
      .to(
        "#imgS",
        {
          left: "18%",
          top: "25%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#imgP",
        {
          top: "35%",
          left: "23%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#imgI",
        {
          left: "28%",
          top: "25%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#imgC",
        {
          left: "33%",
          top: "35%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#imgO",
        {
          left: "58%",
          top: "25%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#imgD",
        {
          left: "65%",
          top: "35%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#imgE",
        {
          left: "70%",
          top: "25%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#imgR",
        {
          left: "77%",
          top: "35%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to("#imgdonut", {
        width: "80vw",
        top: "-10%",
        rotate: "360deg",
        ease: "ease.out",
        duration: 1,
        opacity: 0,
        delay: "-1",
      })
      .to(
        "#hero_main",
        {
          opacity: 0,
        },
        "sw"
      )
      .to(".main", {
        opacity: 0,
      });
  });
});
function example() {
  window.location.href = "/pages/home.html";
}
