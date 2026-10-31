# Maximux Studio website

Public website for **Maximux Studio**, a software and mobile application development brand operated by **Asereje360 LLC**.
Live at https://www.maximuxstudio.com (after deployment).

Plain HTML and CSS, one small script, no build step, no dependencies. Hosted free on GitHub Pages.

## Structure

```
site/                      ← everything in here is published
  index.html               Home
  apps/index.html          Our Apps (RBT Quest + future apps)
  support/index.html       Support
  privacy/index.html       Privacy Policy (DRAFT structure)
  terms/index.html         Terms of Service (DRAFT structure)
  delete-account/index.html  Account Deletion (DRAFT structure)
  404.html
  assets/css/styles.css
  assets/js/main.js        mobile menu toggle only
  assets/img/favicon.svg
  robots.txt, sitemap.xml, CNAME
.github/workflows/deploy.yml  ← deploys site/ to GitHub Pages on push to main
```

Only `site/` is published; this README and the workflow are not.

## Preview locally

```bash
cd site
python3 -m http.server 8000
# open http://localhost:8000
```

Opening the HTML files directly (file://) works for single pages, but folder links like `apps/` need a local server.

## Editing

- Header and footer are repeated in each page. If you change a nav link, change it in all six pages plus `404.html`.
- Links between pages are relative (`../support/`), so the site works both at `username.github.io/maximuxstudio-website/` and at the custom domain.
- `404.html` uses root links (`/support/`) because GitHub serves it from any path; it works once the custom domain is active.
- Colors and spacing are CSS variables at the top of `styles.css`.

## Draft legal pages

`privacy/`, `terms/` and `delete-account/` are **structures only**. Every yellow "To complete" block must be replaced with accurate, reviewed content. While they are drafts they carry `noindex` and are left out of `sitemap.xml`. When finalized:

1. Remove the `draft-banner` block and all `todo` blocks.
2. Change `<meta name="robots" content="noindex, follow">` to `index, follow`.
3. Add the page to `sitemap.xml`.

The Privacy Policy must match what you declare in App Store Connect (App Privacy) and Google Play (Data safety).

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
Custom domain is set in **Settings → Pages → Custom domain** (`www.maximuxstudio.com`). With Actions-based deployment GitHub uses that setting; the `site/CNAME` file is kept for reference.
