// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
  const nav = document.getElementById("mainNav");
  const navLogo = document.getElementById("navLogo");
  const navLinks = document.getElementById("navLinks");

  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
    nav.classList.remove("py-6");
    nav.classList.add("py-3");
    navLogo.classList.replace("text-white", "text-blue-600");
    navLinks.classList.replace("text-white", "text-gray-800");
  } else {
    nav.classList.remove("scrolled");
    nav.classList.remove("py-3");
    nav.classList.add("py-6");
    navLogo.classList.replace("text-blue-600", "text-white");
    navLinks.classList.replace("text-gray-800", "text-white");
  }
});

// Chat Toggle Logic
function toggleChat() {
  const chat = document.getElementById("chatWindow");
  chat.classList.toggle("active");
}

// Simple Chat Message Logic
function sendMessage() {
  const input = document.getElementById("chatInput");
  const body = document.getElementById("chatBody");

  if (input.value.trim() !== "") {
    // User Message
    const msg = document.createElement("div");
    msg.className =
      "bg-blue-600 text-white p-3 rounded-lg shadow-sm self-end ml-auto max-w-[80%]";
    msg.textContent = input.value;
    body.appendChild(msg);

    const currentText = input.value;
    input.value = "";

    // Auto Reply after 1 second
    setTimeout(() => {
      const reply = document.createElement("div");
      reply.className =
        "bg-white p-3 rounded-lg shadow-sm border self-start max-w-[80%]";
      reply.textContent =
        "Thanks for your message! Tanzim Ahmed Utsho's team will get back to you soon regarding your query.";
      body.appendChild(reply);
      body.scrollTop = body.scrollHeight;
    }, 1000);

    body.scrollTop = body.scrollHeight;
  }
}

// Handle 'Enter' key in chat
document
  .getElementById("chatInput")
  ?.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

// Booking Form Submission
document.getElementById("bookingForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert(
    "Success! Your booking request has been sent to Tanzim Travels. We will contact you shortly.",
  );
  e.target.reset();
});
