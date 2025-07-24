const wrapper = document.getElementById("transition-wrapper");
window.addEventListener("DOMContentLoaded", () => {
  wrapper.classList.remove("opacity-0");
  wrapper.classList.add("opacity-100");
});

document.querySelectorAll("a[href]").forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (href.startsWith("#") || link.target === "_blank") return;

    e.preventDefault();
    wrapper.classList.remove("opacity-100");
    wrapper.classList.add("opacity-0");
    setTimeout(() => {
      window.location.href = href;
    }, 400);
  });
});
