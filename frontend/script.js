const form = document.getElementById("signup-form");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;

  try {
    const res = await fetch(
      "https://api.mailerlite.com/api/v2/groups/YOUR_GROUP_ID/subscribers",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-MailerLite-ApiKey": "YOUR_API_KEY"
        },
        body: JSON.stringify({ email })
      }
    );

    if (res.ok) {
      message.textContent = "Thanks! Check your inbox for your guide.";
      form.reset();
    } else {
      const data = await res.json();
      message.textContent = data.error || "Oops! Something went wrong.";
    }
  } catch (err) {
    console.error(err);
    message.textContent = "Error connecting to MailerLite.";
  }
});