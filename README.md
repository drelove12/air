# Western Air — GitHub Pages Website

A responsive, static website for the Western Air **virtual airline** project. No build tools, accounts, frameworks, or paid hosting are required.

## Publish with GitHub Pages

1. Sign in to https://github.com and create a new **public** repository, for example `western-air`.
2. Click **Add file → Upload files**.
3. Upload `index.html` and the **assets** folder with its three files (`styles.css`, `script.js`, `config.js`). If your browser does not support folder upload, create an `assets` folder in GitHub and upload the files there.
4. Click **Commit changes**.
5. Open **Settings → Pages** in the repository.
6. Under **Build and deployment**, choose **Deploy from a branch**, branch **main**, folder **/(root)**, then click **Save**.
7. Wait a few minutes. Your site will be at `https://YOUR-USERNAME.github.io/western-air/` if the repository is named `western-air`.

**Important:** Upload the *contents* of this folder to the repository root, not the outer `western-air-website` folder. GitHub Pages needs `index.html` in the selected publishing folder.

## Update your recruitment button

Edit `assets/config.js` on GitHub. Replace the placeholder link with your actual email address or Discord invite URL. Do this before promoting the website.

Example:
```js
window.WESTERN_AIR_CONFIG = {
  recruitmentLink: "https://discord.gg/YOUR-INVITE"
};
```

## Customize the website

- **Website text, routes, and fleet:** edit `index.html`.
- **Colors and styling:** edit `assets/styles.css`.
- **Recruitment contact:** edit `assets/config.js`.
- **Navigation/menu behavior:** `assets/script.js`.

The artwork in the homepage hero is created with CSS (not externally hosted images), so the site works without third-party image services. All navigation links lead to sections on the homepage.

This is a **virtual airline concept**. Routes, fleet, and roles are proposed. It does not accept flight bookings or collect application data.
