# Hallo Wereld 👋

Een simpele "Hallo Wereld" webapp, gebouwd om te leren hoe je **Claude Code**
gecombineerd met **GitHub** gebruikt.

## Wat staat erin?

- `index.html`, `style.css`, `script.js` — een kleine statische webpagina
  met een knop die een willekeurige groet toont.
- `.github/workflows/deploy.yml` — een GitHub Actions workflow die de site
  automatisch publiceert naar **GitHub Pages** bij elke push naar `main`.

## Lokaal bekijken

Open `index.html` gewoon in je browser, of start een lokale server:

```bash
python3 -m http.server 8000
```

En ga naar `http://localhost:8000`.

## GitHub Pages inschakelen

Om de automatische deploy te laten werken, zet je in de repository-instellingen
(**Settings → Pages**) de bron op **GitHub Actions**. Daarna deployt elke push
naar `main` de site automatisch.

## Wat je hier leert

1. Hoe Claude Code bestanden aanmaakt, commits maakt en pusht naar een branch.
2. Hoe een GitHub Actions workflow automatisch draait op basis van repo-events.
3. Hoe je vanuit een pull request de app live kunt zien draaien via GitHub Pages.
