const fetch = require("node-fetch"); // Vercel Node 18+ may not need this; safe to include

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const response = await fetch(
      `https://api.mailerlite.com/api/v2/groups/${process.env.MAILERLITE_GROUP_ID}/subscribers`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-MailerLite-ApiKey": process.env.MAILERLITE_API_KEY,
        },
        body: JSON.stringify({ email }),
      }
    );

    if (response.ok) {
      return res.status(200).json({ message: "Subscribed successfully" });
    } else {
      const data = await response.json();
      return res.status(400).json({ message: data.error || "Error subscribing" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};
