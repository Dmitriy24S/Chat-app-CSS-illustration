let timeline = gsap.timeline({ defaults: { duration: 1, opacity: 0, ease: "power2.in" } });

timeline
  .from(".illustration", { scale: 0, duration: 0.5, ease: "back" })
  .from(".text-section>*", { stagger: 0.4 })
  .from(".attribution", { duration: 0.5, y: "10px" })
  .from(".message-box>*", { scale: 0, stagger: 0.7 }, 1);
