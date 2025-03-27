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

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".menu-link");

  function setActiveLink(event) {
    links.forEach((link) => link.classList.remove("active"));
    event.currentTarget.classList.add("active");
  }

  links.forEach((link) => {
    link.addEventListener("click", setActiveLink);
  });

  // Set active link based on the current URL
  const currentPath = window.location.pathname.split("/").pop();
  links.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
});

// Initialize select functionality
document.addEventListener("DOMContentLoaded", () => {
  const selects = document.querySelectorAll(".select");

  selects.forEach((select) => {
    const button = select.querySelector(".select-button");
    const list = select.querySelector(".select-list");
    const icon = select.querySelector(".select-icon");
    const label = select.querySelector(".select-label");

    // Toggle select
    button.addEventListener("click", (e) => {
      e.preventDefault();
      list.classList.toggle("hidden");
      icon.classList.toggle("rotate-180");
    });

    // Select option
    list.addEventListener("click", (e) => {
      const target = e.target.closest("li");
      if (!target) return;

      // Remove 'text-black' class from previously selected item
      list.querySelectorAll("li").forEach((item) => {
        item.classList.remove("text-black");
      });

      // Extract the price and units separately
      const [price, units] = target.dataset.value.split(" (");

      // Update label with the proper formatting
      label.innerHTML = `${price} <span class="text-theme-muted-foreground">(${units}</span>`;

      target.classList.add("text-black");

      // Hide dropdown
      list.classList.add("hidden");
      icon.classList.remove("rotate-180");
    });

    // Close select when clicking outside
    document.addEventListener("click", (e) => {
      if (!select.contains(e.target)) {
        list.classList.add("hidden");
        icon.classList.remove("rotate-180");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const btnMap = document.getElementById("btn-map");
  const btnList = document.getElementById("btn-list");
  const mapContainer = document.getElementById("map-container");
  const listContainer = document.getElementById("list-container");

  function activateTab(activeBtn, inactiveBtn, showEl, hideEl) {
    activeBtn.classList.add("border-theme-primary");
    activeBtn.classList.remove("border-theme-input");
    inactiveBtn.classList.add("border-theme-input");
    inactiveBtn.classList.remove("border-theme-primary");

    showEl.classList.remove("hidden");
    hideEl.classList.add("hidden");
  }

  btnMap.addEventListener("click", () =>
    activateTab(btnMap, btnList, mapContainer, listContainer)
  );
  btnList.addEventListener("click", () =>
    activateTab(btnList, btnMap, listContainer, mapContainer)
  );
});
