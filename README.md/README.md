# Lead Magnet Funnel Project

This is a simple lead magnet sales funnel project, including a landing page, email sequence, and assets/screenshots. It is set up to work with MailerLite for email capture and automated welcome emails.

## Folder Structure
project-root/
├── front-end/
│ ├── index.html
│ ├── style.css
│ └── script.js
├── emails/
│ ├── welcome-email-1.html
│ ├── welcome-email-2.html
│ └── welcome-email-3.html
└── README.md


## Front-End

The `front-end/` folder contains:

- `index.html` – The landing page with hero section and email signup form.  
- `style.css` – Styles for the landing page, including responsive layout.  
- `script.js` – Handles form submission directly to MailerLite via API.  

### Setup

1. Replace `YOUR_API_KEY` and `YOUR_GROUP_ID` in `script.js` with your MailerLite credentials.  
2. Deploy the `front-end/` folder to **Netlify**, **Vercel**, or another static host.  
3. The landing page will send emails directly to MailerLite and trigger the welcome email sequence.

---

## Email Sequence

The `emails/` folder contains the **three welcome emails** sent via MailerLite:

1. `welcome-email-1.html` – Immediate welcome and thank you.  
2. `welcome-email-2.html` – Deliver the lead magnet / guide.  
3. `welcome-email-3.html` – Engagement follow-up / next steps.  

---

## Notes

- The project uses **MailerLite** to handle email storage, validation, and the welcome sequence.  
- No backend is required; the form submits directly to MailerLite via `script.js`.  
- The project is responsive and works on mobile and desktop.  
- Designed for portfolio demonstration purposes.