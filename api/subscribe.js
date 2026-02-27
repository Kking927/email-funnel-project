export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body;

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
      return res.status(400).json({ message: data.error || "Error" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
}
