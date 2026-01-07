console.log("GSAP main.js loaded");

gsap.registerPlugin(ScrollTrigger);

/* Header 進場動畫 */
gsap.to(".logo", {
  opacity: 1,
  duration: 1
});

gsap.to(".menu", {
  opacity: 1,
  duration: 1,
  delay: 0.3
});

/* 圖片滾動動畫 */
gsap.utils.toArray(".image").forEach((item, i) => {
  gsap.from(item, {
    y: i % 2 === 0 ? 100 : 50,
    opacity: 0,
    scrollTrigger: {
      trigger: item,
      start: "top 85%",
      end: "top 50%",
      scrub: true
    }
  });
});

/* Logo 滾動縮小 */
gsap.to(".logo", {
  scale: 0.6,
  scrollTrigger: {
    trigger: ".gallery",
    start: "top top",
    scrub: true
  }
});
