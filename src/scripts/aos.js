import AOS from "aos";
AOS.init({
  disable: "mobile", // disable on mobile devices
  duration: 800, // animation duration
  once: false, // animate again on scroll up
  offset: 100, // trigger position
});
