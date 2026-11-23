# Roland Machingambi – portfolio

Plain HTML, CSS and a little JavaScript. No build step.

## Before your first push
1. Put two images in `assets/`:
   - `headshot.jpg` – square-ish, used in the menu and on the About page
   - `evoke.jpg` – the tilted photo on the home page
   (If a file is missing, that image just hides. Nothing breaks.)
2. Open `js/content.js` and fill in `SITE` (linkedin, github, cloudcraft, builderCenter).
3. In `about.html`, replace the short intro with your own story.

## Run it locally
Open the folder in VS Code and use the Live Server extension, or just double-click `index.html`.

## Push to GitHub
```
git init
git add .
git commit -m "first version of my portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```
(create the empty `portfolio` repo on github.com first)

## Deploy (GitHub Pages)
Repo → Settings → Pages → Source: "Deploy from a branch" → Branch: `main`, folder `/ (root)` → Save.
Your site appears at `https://YOUR-USERNAME.github.io/portfolio/` in a minute or two.

## Adding things later
Everything is in `js/content.js`:
- new article → add to `POSTS`
- new Loom video → add to `VIDEOS`
- new project → add to `PROJECTS`
Save, commit, push. The site updates itself.
