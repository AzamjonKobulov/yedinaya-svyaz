const mobMenu = document.querySelector("#mobMenu");
const mobMenuToggle = document.querySelector("#mobMenuToggle");
const menuIcon = document.querySelector(".menu-icon");
const menuX = document.querySelector(".menu-x");

mobMenuToggle.addEventListener("click", function () {
  mobMenu.classList.toggle("hidden");
  document.body.classList.toggle("overflow-hidden");
  mobMenuToggle.classList.toggle("border-theme-foreground");
  mobMenuToggle.classList.toggle("border-theme-input");
  menuIcon.classList.toggle("hidden");
  menuX.classList.toggle("hidden");
});

mobMenu.querySelectorAll("a, button").forEach((item) =>
  item.addEventListener("click", function () {
    mobMenu.classList.toggle("hidden");
  })
);

// function showToast() {
//   let toast = document.getElementById("toast");
//   toast.classList.remove("hidden", "opacity-0", "scale-95");
//   toast.classList.add("opacity-100", "scale-100");

//   // Auto-hide after 3 seconds
//   setTimeout(closeToast, 3000);
// }

// function closeToast() {
//   let toast = document.getElementById("toast");
//   toast.classList.remove("opacity-100", "scale-100");
//   toast.classList.add("opacity-0", "scale-95");

//   // Remove from DOM after animation
//   setTimeout(() => {
//     toast.classList.add("hidden");
//   }, 300);
// }
