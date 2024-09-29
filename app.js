const events = [
  {
    id: 1,
    title: "Hội thảo Khoa học Công nghệ",
    date: "2024-10-15",
    description:
      "Khám phá những tiến bộ mới nhất trong lĩnh vực công nghệ thông tin và ứng dụng.",
    image:
      "data:image/jpeg;base64,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",
    category: "Hội thảo",
  },
  {
    id: 2,
    title: "Cuộc thi Lập trình Sáng tạo",
    date: "2024-11-20",
    description:
      "Thử thách kỹ năng lập trình của bạn và giành giải thưởng hấp dẫn!",
    image: "/api/placeholder/300/200",
    category: "Cuộc thi",
  },
  {
    id: 3,
    title: "Seminar về Trí tuệ Nhân tạo",
    date: "2024-12-05",
    description:
      "Tìm hiểu về AI và các ứng dụng của nó trong cuộc sống hàng ngày.",
    image: "/api/placeholder/300/200",
    category: "Seminar",
  },
];

// Function to create event cards
function createEventCard(event) {
  return `
      <div class="event-card">
        <img src="${event.image}" alt="${event.title}" class="event-image" />
        <div class="event-details">
          <h3>${event.title}</h3>
          <p class="event-date">${new Date(event.date).toLocaleDateString(
            "vi-VN"
          )}</p>
          <p class="event-description">${event.description}</p>
          <div class="event-actions">
            <span class="event-category">${event.category}</span>
            <div class="event-buttons">
              <button class="like-btn" data-id="${event.id}">
                <i class="bx bx-heart"></i>
              </button>
              <button class="share-btn" data-id="${event.id}">
                <i class="bx bx-share-alt"></i>
              </button>
            </div>
          </div>
          <div class="popup" style="display: none;">
            <p>Chia sẻ sự kiện này</p>
            <div class="share-options">
              <a href="#" class="share-option"><i class="bx bxl-facebook"></i></a>
              <a href="#" class="share-option"><i class="bx bxl-twitter"></i></a>
              <a href="#" class="share-option"><i class="bx bxl-whatsapp"></i></a>
            </div>
          </div>
        </div>
      </div>
    `;
}

// Populate event list
const eventList = document.getElementById("eventList");
events.forEach((event) => {
  eventList.innerHTML += createEventCard(event);
});

// Active Navbar Item
const navItems = document.querySelectorAll(".nav-item");
navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    navItems.forEach((item) => {
      item.parentElement.classList.remove("active");
    });
    navItem.parentElement.classList.add("active");
  });
});

// Dark mode toggle
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;
const moonIcon = darkModeToggle.querySelector(".moon");
const sunIcon = darkModeToggle.querySelector(".sun");

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
  } else {
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
  }
});

// Share Button Popup
const shareButtons = document.querySelectorAll(".share-btn");
shareButtons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const popup = btn.closest(".event-details").querySelector(".popup");
    btn.classList.toggle("active");
    popup.style.display = popup.style.display === "none" ? "block" : "none";
    event.stopPropagation();
  });
});

document.addEventListener("click", (event) => {
  const popups = document.querySelectorAll(".popup");
  popups.forEach((popup) => {
    if (popup.style.display === "block" && !popup.contains(event.target)) {
      popup.style.display = "none";
      const shareBtn = popup
        .closest(".event-details")
        .querySelector(".share-btn");
      shareBtn.classList.remove("active");
    }
  });
});

// Like Buttons
const likeButtons = document.querySelectorAll(".like-btn");
likeButtons.forEach((likeBtn) => {
  likeBtn.addEventListener("click", () => {
    const icon = likeBtn.querySelector("i");
    if (icon.classList.contains("bxs-heart")) {
      icon.classList.remove("bxs-heart");
      icon.classList.add("bx-heart");
      icon.classList.remove("bounce-in");
    } else {
      icon.classList.add("bxs-heart");
      icon.classList.remove("bx-heart");
      icon.classList.add("bounce-in");
    }
  });
});

// Chart JS
const chartData = {
  labels: ["Workshop", "Hội thảo", "Seminar", "Cuộc thi"],
  data: [40, 25, 20, 15],
};

const ctx = document.getElementById("eventTypeChart").getContext("2d");
new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: chartData.labels,
    datasets: [
      {
        data: chartData.data,
        backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#f6c23e"],
        hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf", "#f4b619"],
        hoverBorderColor: "rgba(234, 236, 244, 1)",
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: "#dddfeb",
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false,
    },
    cutoutPercentage: 80,
  },
});
