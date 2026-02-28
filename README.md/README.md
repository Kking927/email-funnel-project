# Lead Magnet Email Funnel

This is a simple lead capture landing page with a MailerLite email automation funnel. Users can enter their email to receive a free guide, and the emails are sent automatically through MailerLite.

---

## Features

- Landing page with email signup form
- Backend integration with MailerLite API to add subscribers to a group
- Three-email automation funnel:
  1. Welcome email
  2. Guide email
  3. Next steps email
- Emails designed with inline CSS and tables for cross-client compatibility
- Uses serverless function for email submission (deployed on Vercel)

---

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js serverless function (`api/subscribe.js`)
- **Deployment:** Vercel
- **Email Platform:** MailerLite

---

## Skills Demonstrated

- Basic API integration with a third-party service
- Handling form submission with frontend JavaScript
- Using environment variables for API keys
- Setting up email automation in MailerLite
- Writing simple email HTML
