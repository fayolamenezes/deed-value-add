gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({

  // ✅ Desktop Only
  "(min-width: 992px)": function () {
    // Animate section heading
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

    // Animate value cards vertically with quicker fade-in and less delay
    gsap.utils.toArray(".value-card").forEach((card, i) => {
      gsap.fromTo(card,
        { y: 50 },
        {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            scrub: 1.2,
            once: true
          },
          y: 0,
          duration: 0.7,          // shortened from 1
          delay: i * 0.05,       // shortened from 0.1
          ease: "power2.out"
        }
      );
    });
  },

  // ✅ Mobile Only
  "(max-width: 991px)": function () {
    // Animate section heading
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

    // Animate value cards with quicker fade-in and less delay
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
          duration: 0.4,        // shortened from 0.5
          delay: i * 0.03,     // shortened from 0.05
          ease: "power2.out"
        }
      );
    });

    // 🎨 Mobile wavy line color change
    const colorMap = [
      "#e8682d", // Card 1 (orange)
      "#ffffff", // Card 2 (white)
      "#5fc2ed", // Card 3 (blue)
      "#dcf766"  // Card 4 (lemon)
    ];

    const mobileLine = document.querySelector(".mobile-line");

    if (mobileLine) {
      gsap.utils.toArray(".value-card").forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top center",
          onEnter: () => {
            gsap.to(mobileLine, {
              color: colorMap[i] || "#e8682d",
              duration: 0.4,
              ease: "power2.out"
            });
          }
        });
      });
    }
  }

});
