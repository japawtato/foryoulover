const noButtonTexts = ["No", "Are you sure?", "Last chance? :(", "Give it another thought!", "Don't be so cold :(", "Is that your final answer?", "You're breaking my heart :(", "Say Yes PLEASE :("];
window.onload = function () {
  setTimeout(function () {
    document.getElementById("loadingOverlay").classList.add("hidden");
    document.getElementById("dateContainer").style.display = "block";
    document.getElementById("dateGif").style.display = "block";
  }, 2000); // 2 seconds delay for loading effect
};

function validateDate() {
  const correctDate = "19/06/2024";
  const inputDate = document.getElementById("dateInput").value;
  const errorMessage = document.getElementById("errorMessage");
  showLoading();
  if (inputDate === correctDate) {
    setTimeout(() => {
      errorMessage.classList.add("hidden");
      document.getElementById("dateContainer").style.display = "none";
      document.getElementById("valentineContainer").style.display = "block";
      document.getElementById("dateGif").style.display = "none";
      document.getElementById("valentineGif").style.display = "block";
      hideLoading();
    }, 1000);
  } else {
    setTimeout(() => {
      errorMessage.classList.remove("hidden");
      hideLoading();
    }, 1000);
  }
}

function moveNoButton() {
  const randomIndex = Math.floor(Math.random() * noButtonTexts.length);
  const noButton = document.querySelector(".no-button");
  noButton.innerText = noButtonTexts[randomIndex];
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
}

function acceptValentine() {
  showLoading();
  setTimeout(() => {
    document.getElementById("valentineContainer").style.display = "none";
    document.getElementById("planContainer").style.display = "block";
    document.getElementById("valentineGif").style.display = "none";
    document.getElementById("planGif").style.display = "block";
    hideLoading();
  }, 1000);
}

function savePlan() {
  const place = document.getElementById("placeInput").value;
  const food = document.getElementById("foodInput").value;
  const activity = document.getElementById("activityInput").value;
  const date = document.getElementById("dateInputPlan").value;
  const error = document.getElementById("planError");

  // Show loading when saving plan
  showLoading();
  if (!place || !food || !activity || !date) {
    setTimeout(() => {
      error.classList.remove("hidden");
      hideLoading();
    }, 1000);
    return;
  }
  error.classList.add("hidden");

  // Simulate saving process
  setTimeout(() => {
    document.getElementById("savedPlace").innerText = place;
    document.getElementById("savedFood").innerText = food;
    document.getElementById("savedActivity").innerText = activity;
    document.getElementById("savedDate").innerText = date;

    document.getElementById("planContainer").style.display = "none";
    document.getElementById("showPlanContainer").style.display = "block";
    document.getElementById("planGif").style.display = "none";
    document.getElementById("showPlanGif").style.display = "block";
    hideLoading();
  }, 1000); // Delay before hiding the loading
}

function showLoading() {
  document.getElementById("loadingOverlay").classList.remove("hidden");
}

function hideLoading() {
  document.getElementById("loadingOverlay").classList.add("hidden");
}
