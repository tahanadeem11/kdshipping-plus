/**
 * Hero Banner Three animations - AOS, SplitText, only-track, banner-three-plane.
 * Only runs when .hero-banner-three-wrapper exists (index.html hero section).
 */
(function() {
  var wrapper = document.querySelector('.hero-banner-three-wrapper');
  if (!wrapper) return;

  if (typeof AOS !== 'undefined') {
    AOS.init();
  }

  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined' || typeof SplitText === 'undefined') {
    return;
  }

  gsap.registerPlugin(ScrollTrigger, SplitText);

  // SplitText for headline (same as logistick custom-gsap.js)
  var splitOnes = wrapper.querySelectorAll('.splitTextStyleOne');
  if (splitOnes.length > 0) {
    gsap.utils.toArray(splitOnes).forEach(function(el) {
      var split_char = new SplitText(el, {
        type: 'chars, words',
        lineThreshold: 0.5
      });
      gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          end: 'bottom 60%',
          scrub: false,
          markers: false,
          toggleActions: 'play none none none'
        }
      }).from(split_char.chars, {
        autoAlpha: 0,
        y: 40,
        duration: 0.5,
        opacity: 0,
        stagger: 0.05,
        ease: 'back.out(1.7)'
      });
    });
  }

  // only-track: slide in from left (same as logistick)
  var onlyTrack = wrapper.querySelector('.only-track');
  if (onlyTrack) {
    gsap.timeline({
      scrollTrigger: {
        trigger: onlyTrack,
        start: 'top 98%',
        end: 'bottom 20%',
        scrub: 3,
        markers: false
      }
    }).fromTo(onlyTrack, { x: -480 }, { x: 0, duration: 1.6 });
  }

  // banner-three-plane: slide in from right (same as logistick)
  var bannerPlane = wrapper.querySelector('.banner-three-plane');
  if (bannerPlane) {
    gsap.timeline({
      scrollTrigger: {
        trigger: bannerPlane,
        scrub: 2,
        start: 'top 25%',
        end: 'bottom 10%',
        markers: false
      }
    }).from(bannerPlane, {
      duration: 0.8,
      x: 80,
      scale: 0.6
    });
  }
})();
