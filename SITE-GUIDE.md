# BAA Denison Website — Editor Guide

This guide is for anyone on the BAA team who needs to publish or update content on the website. You do not need to know how to code. Everything runs through a browser-based editor.

---

## Where to Go

**Your CMS (content editor):** `https://[your-site].netlify.app/admin`

You'll need an invite from the site admin to log in the first time. After that, use your email and password.

---

## Publishing a Newsletter Issue (8 Steps)

### 1. Go to the CMS
Open your browser and go to `/admin` on your site URL. Log in with your email and password.

### 2. Click "Newsletter Issues" in the left menu
You'll see a list of all published and draft issues.

### 3. Click "New Newsletter Issue"
A form opens. Fill in the fields:

| Field | What to put |
|---|---|
| **Issue Title** | The headline for this issue (e.g. "Summer 2026: The BAA at 50") |
| **Issue Label** | Volume and number (e.g. "Vol. 1, No. 2 — Summer 2026") |
| **Publish Date** | The date this issue should go live |
| **Short Description** | 1–2 sentences. This is what subscribers see in their email preview. |
| **Hero Image** | Upload a photo. Best size: 1400 × 600px. Leave blank for a crimson gradient. |
| **Pull Quote** | One great sentence from the issue to feature in the green band. |
| **Scholarship Raised** | Current dollar amount raised (number only, no $ sign) |
| **Scholarship Goal** | Target dollar amount |
| **Body** | The main article. Use the rich text editor. ## creates a section heading. |

The other fields (stats, stories, events) are optional. Fill them in if you have the content.

### 4. Save as Draft
Click **Save** in the top-right corner. Your work is saved but not live yet.

### 5. Preview your draft
Click the **Check for Preview** button (top right) — Netlify will build a preview link within about 60 seconds. Click it to see exactly how the issue will look.

### 6. Get a second set of eyes (optional)
In the Status dropdown (top left), set it to **In Review**. This notifies any other editors that the draft is ready to be checked.

### 7. Mark it Ready
When you're satisfied, set Status to **Ready**. This tells the system it's approved.

### 8. Publish
Click **Publish Now**. The issue goes live on the site within about 2 minutes. Mailchimp will automatically detect the new RSS entry and send the email to subscribers within 24 hours (depending on your Mailchimp RSS campaign settings).

---

## Editing an Existing Issue

1. Go to `/admin`
2. Click **Newsletter Issues**
3. Click the issue you want to edit
4. Make your changes
5. Click **Save** → then **Publish Now** to push the update live

---

## Adding a Perspectives Essay

1. Go to `/admin`
2. Click **Perspectives Essays**
3. Select the essay slot you want to update (Essay 01 or Essay 02)
4. Edit the title and description
5. To update the body text, you'll need to edit the `.njk` file directly (ask your site admin for help with this, or contact the person who built the site)

> **Note:** For new essays beyond the two already on the site, ask your site admin to add a new file. This takes about 10 minutes.

---

## Managing Site Pages (About, Contact, Home)

Basic metadata (page title and description) for the main pages can be edited through the CMS under **Site Pages**. For body content changes to those pages, contact your site admin.

---

## Uploading Images

- Go to any newsletter issue in the CMS
- In the Hero Image field (or any image field), click **Choose an image**
- You can upload directly from your computer — JPG or PNG, under 5MB
- Uploaded images are stored in `/public/images/` and served at `/images/`

**Recommended sizes:**
- Hero image: 1400 × 600px
- Story card images: 800 × 500px

---

## Troubleshooting

**"I can't log in"** — Ask your site admin to resend your Netlify Identity invite, or reset your password from the login screen.

**"My changes aren't showing up"** — The site takes 1–2 minutes to rebuild after you publish. Hard-refresh your browser (Ctrl+Shift+R on Windows, Cmd+Shift+R on Mac).

**"The preview link says 'Site not found'"** — Wait 60 seconds and try again. Netlify is building your preview.

**"I accidentally published something I didn't mean to"** — Contact your site admin immediately. They can roll back to the previous version in about 5 minutes via the Netlify dashboard.

---

## Who to Contact

For site questions, content issues, or to request new features: **baaDenison@denison.edu**

For technical emergencies (site is down, content can't be edited): contact your site administrator directly.

---

*Last updated: March 2026 · Built by Consept for BAA Denison*
