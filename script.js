gsap.registerPlugin(ScrollTrigger);

// Set initial state of the heading for all screen sizes
gsap.set(".section-heading", {
  y: 50,
  opacity: 0,
  scale: 0.9
});

ScrollTrigger.matchMedia({
  // Desktop
  "(min-width: 992px)": function () {
    gsap.to(".section-heading", {
      scrollTrigger: {
        trigger: "#twoscTrigger",
        start: "top 80%",
        once: true
      },
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1.4,
      ease: "power2.out"
    });

    gsap.utils.toArray(".value-card").forEach((card, i) => {
      gsap.fromTo(card,
        { y: 50 },
        {
          y: 0,
          duration: 1,
          delay: i * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            once: true
          }
        }
      );
    });
  },

  // Mobile
  "(max-width: 991px)": function () {
    gsap.to(".section-heading", {
      scrollTrigger: {
        trigger: "#twoscTrigger",
        start: "top 85%",
        once: true
      },
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1.3,
      ease: "power2.out"
    });

    const cards = gsap.utils.toArray(".value-card");
    const mobileLine = document.querySelector(".mobile-line");

    cards.forEach((card, i) => {
      gsap.fromTo(card,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          delay: i * 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    // Mobile wavy line color sync
    const colorMap = ["#e8682d", "#ffffff", "#5fc2ed", "#dcf766"];

    if (mobileLine) {
      cards.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top center",
          onEnter: () => {
            gsap.to(mobileLine, {
              color: colorMap[i],
              duration: 0.4,
              ease: "power2.out"
            });
          },
          onEnterBack: () => {
            gsap.to(mobileLine, {
              color: colorMap[i],
              duration: 0.4,
              ease: "power2.out"
            });
          }
        });
      });
    }
  }
});
