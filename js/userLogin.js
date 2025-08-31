// userLogin.js
document.addEventListener("DOMContentLoaded", () => {
  const studentCard = document.querySelector('a[href="#User-login"]');
  const homeSection = document.querySelector(".home");
  const userLogin = document.getElementById("User-login");
  const adminLogin = document.getElementById("Admin-login");
  const userLoginForm = document.getElementById("User-login-form"); // Fixed ID
  const userDashboard = document.getElementById("user-dashboard");
  const logoutBtn = document.getElementById("logout-btn"); // Logout button
  const logoutLink = document.getElementById("logout-link");

  // Hide dashboard initially
  if (userDashboard) userDashboard.style.display = "none";

  // Clicking "User" shows user login
  if (studentCard) {
    studentCard.addEventListener("click", (e) => {
      e.preventDefault();
      if (homeSection) homeSection.style.display = "none";
      if (userLogin) userLogin.style.display = "block";
      if (adminLogin) adminLogin.style.display = "none";
    });
  }

  // User login form submit
  if (userLoginForm) {
    userLoginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value; // Fixed ID
      const password = document.getElementById("password").value; // Fixed ID

      // Predefined user credentials
      if (email === "user1@gmail.com" && password === "1157") {
        showPopupMessage("✅ User login successful!", true, () => {
          if (userLogin) userLogin.style.display = "none";
          if (userDashboard) userDashboard.style.display = "flex";
        });
      } else {
        showPopupMessage("❌ Invalid user credentials!", false);
        if (userDashboard) userDashboard.style.display = "none"; // ensure dashboard stays hidden
      }

      userLoginForm.reset();
    });
  }

  // Logout functionality
  if (logoutLink) {
    logoutLink.addEventListener("click", (e) => {
      e.preventDefault(); // prevent default anchor behavior
      if (userDashboard) userDashboard.style.display = "none";
      if (userLogin) userLogin.style.display = "block"; // show login again
      showPopupMessage("🔓 Logged out successfully!", true);
    });
  }
});
