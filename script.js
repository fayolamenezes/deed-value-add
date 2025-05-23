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
        { y: 50 },
        {
          y: 0,
          duration: 1,
          delay: i * 0.10,
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

  // ✅ Mobile: Movement + fade-in + wavy line color
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

    const cards = gsap.utils.toArray(".value-card");
    const mobileLine = document.querySelector(".mobile-line");

    // Animate cards: fade-in only once
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
            toggleActions: "play none none none"  // ⬅️ better than once:true for this case
          }
        }
      );
    });


    // 🎨 Animate wavy line color — always, even on scroll up
    const colorMap = [
      "#e8682d", // Card 1
      "#ffffff", // Card 2
      "#5fc2ed", // Card 3
      "#dcf766"  // Card 4
    ];

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
