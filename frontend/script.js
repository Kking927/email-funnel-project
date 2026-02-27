const form = document.getElementById("signup-form");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;

  try {
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (res.ok) {
      message.textContent = "Thanks! Check your inbox for your guide.";
      form.reset();
    } else {
      message.textContent = data.message || "Oops! Something went wrong.";
    }
  } catch (err) {
    console.error(err);
    message.textContent = "Error connecting to server.";
  }
});
