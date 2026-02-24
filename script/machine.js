let interviewList = [];
let rejectedList = [];
let currentFilter = "all";

const totalCountEl = document.getElementById("total-count");
const interviewCountEl = document.getElementById("interview-count");
const rejectedCountEl = document.getElementById("rejected-count");
const countDisplay = document.getElementById("count-display");
const cardsContainer = document.getElementById("cards-container");

const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

// Calculate & Update Counts
function calculateCount() {
  const allCards = document.getElementsByClassName("job-card");
  totalCountEl.innerText = allCards.length;
  countDisplay.innerText = allCards.length;
  interviewCountEl.innerText = interviewList.length;
  rejectedCountEl.innerText = rejectedList.length;

  if (currentFilter === "all") {
    countDisplay.innerText = totalCards;
  } else if (currentFilter === "interview") {
    countDisplay.innerText = interviewList.length;
  } else if (currentFilter === "rejected") {
    countDisplay.innerText = rejectedList.length;
  }
}

const emptyState = document.getElementById("empty-state");

function checkEmptyState() {
  if (currentFilter === "interview") {
    if (interviewList.length === 0) {
      emptyState.classList.remove("hidden");
    } else {
      emptyState.classList.add("hidden");
    }
  } else if (currentFilter === "rejected") {
    if (rejectedList.length === 0) {
      emptyState.classList.remove("hidden");
    } else {
      emptyState.classList.add("hidden");
    }
  } else {
    emptyState.classList.add("hidden");
  }
}

function setActiveFilter(activeId) {
  allFilterBtn.classList.remove("bg-black", "text-white");
  interviewFilterBtn.classList.remove("bg-black", "text-white");
  rejectedFilterBtn.classList.remove("bg-black", "text-white");

  document.getElementById(activeId).classList.add("bg-black", "text-white");
}

allFilterBtn.addEventListener("click", function () {
  currentFilter = "all";
  setActiveFilter("all-filter-btn");

  const allCards = document.getElementsByClassName("job-card");
  for (let i = 0; i < allCards.length; i++) {
    allCards[i].style.display = "block";
  }
  checkEmptyState();
  calculateCount();
});

interviewFilterBtn.addEventListener("click", function () {
  currentFilter = "interview";
  setActiveFilter("interview-filter-btn");

  const allCards = document.getElementsByClassName("job-card");
  for (let i = 0; i < allCards.length; i++) {
    const badge = allCards[i].getElementsByClassName("status-badge")[0];
    if (badge && badge.innerText === "Interview") {
      allCards[i].style.display = "block";
    } else {
      allCards[i].style.display = "none";
    }
  }
  checkEmptyState();
  calculateCount();
});

rejectedFilterBtn.addEventListener("click", function () {
  currentFilter = "rejected";
  setActiveFilter("rejected-filter-btn");

  const allCards = document.getElementsByClassName("job-card");
  for (let i = 0; i < allCards.length; i++) {
    const badge = allCards[i].getElementsByClassName("status-badge")[0];
    if (badge && badge.innerText === "Rejected") {
      allCards[i].style.display = "block";
    } else {
      allCards[i].style.display = "none";
    }
  }
  checkEmptyState();
  calculateCount();
});

// delegation
cardsContainer.addEventListener("click", function (e) {
  //  Interview Button
  if (
    e.target.classList.contains("btn-interview") ||
    e.target.closest(".btn-interview")
  ) {
    const card = e.target.closest(".job-card");
    const company = card.getElementsByTagName("h2")[0].innerText;

    const badge = card.getElementsByClassName("status-badge")[0];
    badge.innerText = "Interview";
    badge.className =
      "status-badge bg-green-100 text-green-700 mb-3 font-medium px-3 py-2 rounded-md";

    interviewList = interviewList.filter((j) => j !== company);
    rejectedList = rejectedList.filter((j) => j !== company);
    interviewList.push(company);

    if (currentFilter === "rejected") {
      card.style.display = "none";
    }

    checkEmptyState();
    calculateCount();
  }

  // rejected btn
  else if (
    e.target.classList.contains("btn-rejected") ||
    e.target.closest(".btn-rejected")
  ) {
    const card = e.target.closest(".job-card");
    const company = card.getElementsByTagName("h2")[0].innerText;

    const badge = card.getElementsByClassName("status-badge")[0];
    badge.innerText = "Rejected";
    badge.className =
      "status-badge bg-red-100 text-red-700 mb-3 font-medium px-3 py-2 rounded-md";

    rejectedList = rejectedList.filter((j) => j !== company);
    interviewList = interviewList.filter((j) => j !== company);
    rejectedList.push(company);

    if (currentFilter === "interview") {
      card.style.display = "none";
    }

    checkEmptyState();
    calculateCount();
  }

  // delete btn
  else if (
    e.target.classList.contains("btn-delete") ||
    e.target.closest(".btn-delete")
  ) {
    const card = e.target.closest(".job-card");
    const company = card.getElementsByTagName("h2")[0].innerText;

    interviewList = interviewList.filter((j) => j !== company);
    rejectedList = rejectedList.filter((j) => j !== company);

    card.remove();

    checkEmptyState();
    calculateCount();
  }
});

calculateCount();
