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

// document.addEventListener("DOMContentLoaded", function () {
//   const submitBtn = document.getElementById("submitBtn");
//   const formOverlay = document.getElementById("formOverlay");

//   submitBtn.addEventListener("click", function (e) {
//     e.preventDefault();

//     // Show overlay (disable form)
//     formOverlay.classList.remove("hidden");

//     // Change button to loading state
//     submitBtn.innerHTML = `
//       <svg
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         class="animate-spin"
//       >
//         <path d="M12 3V6" stroke="#009966" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
//         <path d="M21 12H18" stroke="#009966" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
//         <path d="M18.3658 18.3656L16.2471 16.2468" stroke="#009966" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
//         <path d="M12 21V18" stroke="#009966" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
//         <path d="M5.63477 18.3656L7.75352 16.2468" stroke="#009966" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
//         <path d="M3 12H6" stroke="#009966" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
//         <path d="M5.63477 5.63428L7.75352 7.75303" stroke="#009966" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
//       </svg>
//     `;

//     submitBtn.classList.remove(
//       "bg-theme-primary",
//       "hover:bg-white",
//       "hover:text-theme-primary"
//     );
//     submitBtn.classList.add("bg-green-50", "grid", "place-content-center");
//   });
// });

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
