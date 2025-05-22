# Deed Delivery Section Replication (GSAP + Responsive Layout)

This project is a **replication of the second section** from the website [deeddelivery.com](https://www.deeddelivery.com/), completed as part of a frontend assessment focused on **GSAP animation** and responsive design.

---

## Overview

This section includes:
- A **hero heading** with entrance animation.
- A **staggered 4-card layout** animated using **GSAP ScrollTrigger**.
- Responsive behavior for both desktop and mobile:
  - **Desktop**: Parallax motion only (no opacity fade-in).
  - **Mobile**: Parallax motion **+** opacity fade-in for each card.
- **Once-only animations** to match the original site's behavior (animations won’t replay on re-scroll).

---

## 🛠Technologies Used

- **HTML5**
- **CSS3** (with Flexbox + Grid)
- **GSAP 3** + ScrollTrigger plugin
- **JavaScript (ES6)**

---

## Project Structure

```bash
├── index.html          
├── styles.css         
├── script.js           # GSAP ScrollTrigger animations
