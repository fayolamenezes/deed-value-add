gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({

  // ✅ Desktop: Movement only
  "(min-width: 992px)": function () {
    gsap.to(".section-heading", {
      scrollTrigger: {
        trigger: "#twoscTrigger",
        start: "top 80%",
        once: true
      },
      y: 0,
      opacity: 1,
      duration: 1.4,
      ease: "power2.out"
    });

    gsap.utils.toArray(".value-card").forEach((card, i) => {
      gsap.fromTo(card,
        { y: 50 }, // ❌ no opacity
        {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            scrub: 1.2,
            once: true
          },
          y: 0,
          duration: 1,
          delay: i * 0.10,
          ease: "power2.out"
        }
      );
    });
  },

  // ✅ Mobile: Movement + fade-in
  "(max-width: 991px)": function () {
    gsap.to(".section-heading", {
      scrollTrigger: {
        trigger: "#twoscTrigger",
        start: "top 85%",
        once: true
      },
      y: 0,
      opacity: 1,
      duration: 1.3,
      ease: "power2.out"
    });

    gsap.utils.toArray(".value-card").forEach((card, i) => {
      gsap.fromTo(card,
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            scrub: 1,
            once: true
          },
          y: 0,
          opacity: 1,
          duration: 1,
          delay: i * 0.2,
          ease: "power2.out"
        }
      );
    });
  }

});
