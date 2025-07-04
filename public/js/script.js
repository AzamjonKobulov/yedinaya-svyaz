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
    menuX.classList.toggle("hidden");
    menuIcon.classList.toggle("hidden");
  })
);

// Active link Func
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".menu-link");
  const currentPath = window.location.pathname.split("/").pop(); // Get the current file name

  links.forEach((link) => {
    const isActive = link.getAttribute("href") === `./${currentPath}`;

    if (isActive) {
      link.classList.add("border-theme-primary", "bg-menu");

      // Apply text color to <p> elements inside active link
      link.querySelectorAll("p").forEach((p) => {
        p.classList.add("text-theme-foreground");
      });

      // Apply stroke color to <svg> inside active link
      const svg = link.querySelector("svg");
      if (svg) {
        svg.classList.add("stroke-theme-primary");
      }
    } else {
      link.classList.remove("border-theme-primary", "bg-menu");

      // Remove text color from <p> elements
      link.querySelectorAll("p").forEach((p) => {
        p.classList.remove("text-theme-foreground");
      });

      // Remove stroke color from <svg>
      const svg = link.querySelector("svg");
      if (svg) {
        svg.classList.remove("stroke-theme-primary");
      }
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
      label.innerHTML = `${price} <span class="text-theme-muted-foreground text-sm">(${units}</span>`;

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

// Tabs
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".tab-section").forEach((section) => {
    const buttons = section.querySelectorAll(".tab-btn");
    const forms = section.querySelectorAll(".tab-content");

    function activateTab(activeBtn) {
      buttons.forEach((btn) =>
        btn.classList.remove("bg-white", "shadow-xs", "text-theme-foreground")
      );
      activeBtn.classList.add("bg-white", "shadow-xs", "text-theme-foreground");

      forms.forEach((form) => form.classList.add("hidden"));
      const targetForm = section.querySelector(`#${activeBtn.dataset.target}`);
      if (targetForm) {
        targetForm.classList.remove("hidden");
      }
    }

    buttons.forEach((button) => {
      button.addEventListener("click", () => activateTab(button));
    });

    // Activate first tab by default
    if (buttons.length) {
      activateTab(buttons[0]);
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".map-list-tabs").forEach((section) => {
    const btns = section.querySelectorAll(".tab-btn");
    const mapContainer = section.querySelector(".map-container");
    const listContainer = section.querySelector(".list-container");

    btns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const isMap = btn.classList.contains("btn-map");

        btns.forEach((b) => {
          b.classList.toggle("border-theme-primary", b === btn);
          b.classList.toggle("border-theme-input", b !== btn);
        });

        if (isMap) {
          mapContainer.classList.remove("hidden");
          listContainer.classList.add("hidden");
        } else {
          mapContainer.classList.add("hidden");
          listContainer.classList.remove("hidden");
        }
      });
    });
  });
});

// Video playing func.
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".video-container").forEach((container) => {
    const video = container.querySelector(".video");
    const playButton = container.querySelector(".play-button");
    const overlay = container.querySelector(".video-overlay");

    playButton.addEventListener("click", function () {
      video.play();
      playButton.style.display = "none";
      overlay.style.opacity = "0";
      setTimeout(() => (overlay.style.display = "none"), 300);
    });

    video.addEventListener("pause", function () {
      playButton.style.display = "block";
      overlay.style.opacity = "0.5";
      overlay.style.display = "block";
    });

    video.addEventListener("play", function () {
      playButton.style.display = "none";
      overlay.style.opacity = "0";
      setTimeout(() => (overlay.style.display = "none"), 300);
    });
  });
});

// FAQ Accordion
document.addEventListener("DOMContentLoaded", () => {
  const accordionGroups = document.querySelectorAll(".hs-accordion-group");

  accordionGroups.forEach((group) => {
    const accordions = group.querySelectorAll(".hs-accordion");

    accordions.forEach((accordion) => {
      const toggleButton = accordion.querySelector(".hs-accordion-toggle");
      const content = accordion.querySelector(".hs-accordion-content");
      const icon = toggleButton.querySelector("svg"); // Select the SVG itself

      toggleButton.addEventListener("click", () => {
        const isOpen = accordion.classList.contains("active");

        // Close all other accordions in the group
        accordions.forEach((otherAccordion) => {
          if (
            otherAccordion !== accordion &&
            otherAccordion.classList.contains("active")
          ) {
            closeAccordion(otherAccordion);
          }
        });

        if (isOpen) {
          closeAccordion(accordion);
        } else {
          openAccordion(accordion);
        }
      });

      // Ensure initial state is set correctly
      if (accordion.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
        accordion.classList.add("border-theme-primary");
        icon.style.transform = "rotate(180deg)";
      } else {
        content.style.maxHeight = "0px";
        icon.style.transform = "rotate(0deg)";
      }
    });

    function openAccordion(accordion) {
      const content = accordion.querySelector(".hs-accordion-content");
      const icon = accordion.querySelector("svg");

      accordion.classList.add("active", "border-theme-primary");
      content.style.maxHeight = content.scrollHeight + "px";
      icon.style.transform = "rotate(180deg)";
    }

    function closeAccordion(accordion) {
      const content = accordion.querySelector(".hs-accordion-content");
      const icon = accordion.querySelector("svg");

      accordion.classList.remove("active", "border-theme-primary");
      content.style.maxHeight = "0px";
      icon.style.transform = "rotate(0deg)";
    }
  });
});

// Edit/Show User Info Modes Logic
document.addEventListener("DOMContentLoaded", function () {
  const viewMode = document.getElementById("view-mode");
  const editMode = document.getElementById("edit-mode");
  const editBtn = document.getElementById("edit-btn");
  const cancelBtn = document.getElementById("cancel-btn");
  const saveBtn = document.getElementById("save-btn");

  const viewFullName = document.getElementById("view-fullName");
  const viewEmail = document.getElementById("view-email");
  const viewPhone = document.getElementById("view-phone");

  const editFullName = document.getElementById("edit-fullName");
  const editEmail = document.getElementById("edit-email");
  const editPhone = document.getElementById("edit-phone");

  editBtn.addEventListener("click", function () {
    editFullName.value = viewFullName.textContent;
    editEmail.value = viewEmail.textContent;
    editPhone.value = viewPhone.textContent;
    viewMode.classList.add("hidden");
    editMode.classList.remove("hidden");
  });

  cancelBtn.addEventListener("click", function () {
    editMode.classList.add("hidden");
    viewMode.classList.remove("hidden");
  });

  saveBtn.addEventListener("click", function (e) {
    e.preventDefault();
    viewFullName.textContent = editFullName.value;
    viewEmail.textContent = editEmail.value;
    viewPhone.textContent = editPhone.value;
    editMode.classList.add("hidden");
    viewMode.classList.remove("hidden");
  });
});

function copyToClipboard(id, btn) {
  const element = document.getElementById(id);
  const text =
    element.dataset.hidden === "true"
      ? element.dataset.password
      : element.textContent;

  navigator.clipboard.writeText(text).then(() => {
    const copyIcon = btn.querySelector(".copy-icon");
    const tickIcon = btn.querySelector(".tick-icon");

    copyIcon.classList.add("hidden");
    tickIcon.classList.remove("hidden");

    setTimeout(() => {
      copyIcon.classList.remove("hidden");
      tickIcon.classList.add("hidden");
    }, 2000);
  });
}

// Toggle Passoword visibility
function togglePassword(btn) {
  const passwordEl = document.getElementById("password");
  const eyeIcon = btn.querySelector(".eye-icon");
  const eyeSlashIcon = btn.querySelector(".eye-slash-icon");

  if (passwordEl.dataset.hidden === "true") {
    passwordEl.textContent = passwordEl.dataset.password;
    passwordEl.dataset.hidden = "false";
    eyeIcon.classList.add("hidden");
    eyeSlashIcon.classList.remove("hidden");
  } else {
    passwordEl.textContent = "•••••••••••";
    passwordEl.dataset.hidden = "true";
    eyeIcon.classList.remove("hidden");
    eyeSlashIcon.classList.add("hidden");
  }
}

// Show/Hide Purchased cards
function updateButtonText() {
  const hiddenCards = document.querySelectorAll(".card.hidden").length;
  const button = document.getElementById("showMoreBtn");

  if (hiddenCards > 0) {
    button.innerHTML = `Показать еще <span id="hiddenCount">${hiddenCards}</span>`;
  } else {
    button.innerHTML = "Скрыть";
  }
}

document.getElementById("showMoreBtn").addEventListener("click", function () {
  const hiddenCards = document.querySelectorAll(".card.hidden");

  if (hiddenCards.length > 0) {
    hiddenCards.forEach((card) => card.classList.remove("hidden"));
  } else {
    document
      .querySelectorAll(".card:nth-child(n+4)")
      .forEach((card) => card.classList.add("hidden"));
  }
  updateButtonText();
});

updateButtonText();
