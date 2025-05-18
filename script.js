// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // 1. Event Handling

  // Button Click
  const clickBtn = document.getElementById("click-btn");
  clickBtn.addEventListener("click", () => {
    alert("Button clicked!");
  });

  // Hover Effects
  const hoverBox = document.getElementById("hover-box");
  hoverBox.addEventListener("mouseenter", () => {
    hoverBox.classList.add("hovered");
  });
  hoverBox.addEventListener("mouseleave", () => {
    hoverBox.classList.remove("hovered");
  });

  // Keypress Detection
  const keypressInput = document.getElementById("keypress-input");
  const keypressFeedback = document.getElementById("keypress-feedback");
  keypressInput.addEventListener("keydown", (e) => {
    keypressFeedback.textContent = `You pressed: ${e.key}`;
  });

  // Bonus: Secret action on double-click on clickBtn
  clickBtn.addEventListener("dblclick", () => {
    alert("Secret double-click action triggered!");
  });

  // 2. Interactive Elements

  // Button changes text or color
  const colorChangeBtn = document.getElementById("color-change-btn");
  colorChangeBtn.addEventListener("click", () => {
    if (colorChangeBtn.style.backgroundColor === "green") {
      colorChangeBtn.style.backgroundColor = "#3498db";
      colorChangeBtn.textContent = "Change my color";
    } else {
      colorChangeBtn.style.backgroundColor = "green";
      colorChangeBtn.textContent = "I'm green now!";
    }
  });

  // Image gallery / slideshow
  const slides = [
    "https://via.placeholder.com/300x200?text=Slide+1",
    "https://via.placeholder.com/300x200?text=Slide+2",
    "https://via.placeholder.com/300x200?text=Slide+3",
  ];
  let currentSlide = 0;
  const slideImg = document.getElementById("slide-img");
  const prevSlideBtn = document.getElementById("prev-slide");
  const nextSlideBtn = document.getElementById("next-slide");

  function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;
    slideImg.style.opacity = 0;
    setTimeout(() => {
      slideImg.src = slides[currentSlide];
      slideImg.style.opacity = 1;
    }, 300);
  }

  prevSlideBtn.addEventListener("click", () => {
    showSlide(currentSlide - 1);
  });

  nextSlideBtn.addEventListener("click", () => {
    showSlide(currentSlide + 1);
  });

  // Tabs
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      tabContents.forEach((content) => {
        content.classList.remove("active");
      });
      const tabToShow = btn.dataset.tab;
      document.getElementById(tabToShow).classList.add("active");
    });
  });

  // 3. Form Validation
  const form = document.getElementById("signup-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  const formMessage = document.getElementById("form-message");

  // Helper regex for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Real-time validation
  nameInput.addEventListener("input", () => {
    if (!nameInput.value.trim()) {
      nameError.textContent = "Name is required.";
    } else {
      nameError.textContent = "";
    }
  });

  emailInput.addEventListener("input", () => {
    if (!emailInput.value.trim()) {
      emailError.textContent = "Email is required.";
    } else if (!emailRegex.test(emailInput.value)) {
      emailError.textContent = "Please enter a valid email.";
    } else {
      emailError.textContent = "";
    }
  });

  passwordInput.addEventListener("input", () => {
    if (!passwordInput.value.trim()) {
      passwordError.textContent = "Password is required.";
    } else if (passwordInput.value.length < 8) {
      passwordError.textContent = "Password must be at least 8 characters.";
    } else {
      passwordError.textContent = "";
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;

    if (!nameInput.value.trim()) {
      nameError.textContent = "Name is required.";
      valid = false;
    } else {
      nameError.textContent = "";
    }

    if (!emailInput.value.trim()) {
      emailError.textContent = "Email is required.";
      valid = false;
    } else if (!emailRegex.test(emailInput.value)) {
      emailError.textContent = "Please enter a valid email.";
      valid = false;
    } else {
      emailError.textContent = "";
    }

    if (!passwordInput.value.trim()) {
      passwordError.textContent = "Password is required.";
      valid = false;
    } else if (passwordInput.value.length < 8) {
      passwordError.textContent = "Password must be at least 8 characters.";
      valid = false;
    } else {
      passwordError.textContent = "";
    }

    if (valid) {
      formMessage.style.color = "green";
      formMessage.textContent = "Form submitted successfully!";
      form.reset();
    } else {
      formMessage.style.color = "red";
      formMessage.textContent = "Please fix errors before submitting.";
    }
  });
});
