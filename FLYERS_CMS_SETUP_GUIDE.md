# Flyers CMS Setup Guide

This project has been updated with a new `/flyers` page and Decap CMS configuration.

## What was added

- `src/pages/Flyers.tsx`
- `/flyers` route in `src/App.tsx`
- `Flyers` link in `src/components/Navbar.tsx`
- `admin/index.html`
- `admin/config.yml`
- `public/data/flyers.json`
- `public/uploads/flyers/`

## Local test

Run:

```bash
npm install
npm run dev
```

Open the website URL shown in terminal, usually:

```text
http://localhost:3000
```

Then open:

```text
http://localhost:3000/flyers
```

## CMS test

Local CMS page:

```text
http://localhost:3000/admin
```

Login/save will fully work only after Netlify setup.

## Netlify live CMS setup

After pushing to GitHub and importing into Netlify:

1. Netlify Dashboard → Site configuration → Identity → Enable Identity
2. Set registration to Invite only
3. Enable Git Gateway
4. Invite the client email
5. Open `https://your-site.netlify.app/admin`

Client can then edit:

- Flyer title
- Flyer image
- Description
- Display order
- Visible / hidden
