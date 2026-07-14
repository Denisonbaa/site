# BAA Denison Website — Editor Guide

This guide is for anyone on the BAA team who needs to publish or update content on the website. You do not need to know how to code. Everything runs through a browser-based editor.

---

## Where to Go

**When working locally (development):** `http://localhost:8080/admin`  
Start the local server first with `npm start` in the project folder (see below).

**When editing on the live site:** `https://[your-site].netlify.app/admin`  
You'll need an invite from the site admin to log in the first time.

---

## Starting the Local Dev Server

Open a terminal in the project folder and run:

```
npm install
npm start
```

Two things will start: the Eleventy site (on port 8080) and the CMS proxy server (on port 8081). Both must be running for the CMS to save content locally. Press **Ctrl+C** to stop both.

---

## Publishing a Newsletter Issue (6 Steps)

### 1. Go to the CMS
Open your browser and go to `https://denisonbaa.org/admin`. Log in with your email and password.

### 2. Click "Newsletter Issues" in the left menu
You'll see a list of all published issues and any saved drafts.

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

### 4. Save your draft
Click **Save** in the top-right corner. Your draft is saved. It will appear in the Newsletter Issues list under the **Workflow** tab (not the main list yet — that's normal).

### 5. Preview the draft
Click **Check for Preview** in the editor toolbar. Netlify will build a preview of your draft — this takes about 1–2 minutes. When it's ready, the button changes to **View Preview**. Click it to open the fully rendered newsletter page in a new tab. This is exactly how it will look when published.

Make any adjustments in the editor, click Save again, and refresh the preview tab after ~1–2 minutes to see the updates.

### 6. Publish
When you're satisfied with the preview, click **Publish Now**. The issue goes live on the site within about 2 minutes. Mailchimp will automatically detect the new RSS entry and send the email to subscribers within 24 hours (depending on your Mailchimp RSS campaign settings).

---

## Editing an Existing Issue

1. Go to `/admin`
2. Click **Newsletter Issues**
3. Click the issue you want to edit
4. Make your changes
5. Click **Save** — changes are live on the next site deploy

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
- In any image field (Hero Image, story card Image, event Image), click **Choose an image**
- You can upload directly from your computer — JPG or PNG, under 5MB
- Uploaded images are stored in `/public/images/` and served at `/images/`

**Body content images:** When you insert an image using the toolbar inside the Body text editor, it will show a **placeholder/broken icon in the CMS editor** — this is normal. The image is saved in your draft but won't load in the editor preview because it's not on the live site yet. It WILL appear correctly on the **Netlify deploy preview** (after clicking "Check for Preview" and waiting ~2 minutes).

**Recommended sizes:**
- Hero image: 1400 × 600px
- Story card images: 800 × 500px
- Body images: 1000px wide max

---

## Troubleshooting

**"I can't log in" (live site)** — Ask your site admin to resend your Netlify Identity invite, or reset your password from the login screen.

**"The CMS saves but nothing shows up" (local)** — Make sure you ran `npm start`, not just `eleventy --serve`. Both the proxy server (port 8081) and eleventy (port 8080) must be running together.

**"My changes aren't showing up on the live site"** — The site takes 1–2 minutes to rebuild after you deploy. Hard-refresh your browser (Ctrl+Shift+R on Windows, Cmd+Shift+R on Mac).

**"I accidentally saved/published something I didn't mean to"** — Contact your site admin immediately. They can roll back to the previous version via the git history.

---

## Who to Contact

For site questions, content issues, or to request new features: **baaDenison@denison.edu**

For technical emergencies (site is down, content can't be edited): contact your site administrator directly.

---

*Last updated: March 2026 · Built by Consept for BAA Denison*
