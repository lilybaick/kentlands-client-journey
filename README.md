# Kentlands Client Journey

An interactive visual map of how a prospective client becomes a long-term client at Kentlands Psychotherapy — built from live GoHighLevel CRM data. Now a small multi-page site.

---

## The pages

| Page | What it is | Audience |
|---|---|---|
| `index.html` | Overview hub — the "one connected loop" and links to everything | Everyone |
| `journey.html` | The 8-stage client journey (interactive accordion) | Everyone |
| `phone-tree.html` | Interactive phone menu — the front door, with what the CRM does at each step | Everyone |
| `tools.html` | The 3 custom KP tools and how each connects to GHL | 🔒 Internal reference |
| `system-map.html` | Full GHL inventory dashboard + automations, with a live data snapshot | 🔒 Internal reference |

`styles.css` is the shared design system used by every page.

> **Note on the two 🔒 pages.** `tools.html` and `system-map.html` are labeled "Internal reference." They're safe to share with the team but are operational detail, not marketing.

---

## What's in this repo

```
kentlands-client-journey/
├── index.html            ← Overview hub
├── journey.html          ← The 8-stage client journey
├── phone-tree.html       ← Interactive phone tree
├── tools.html            ← The 3 KP tools + GHL  (internal)
├── system-map.html       ← GHL inventory dashboard (internal)
├── styles.css            ← Shared design system
├── README.md             ← This file
└── content/              ← Plain-text source of truth (edit here, ask Claude to regenerate)
    ├── journey-stages.md
    ├── automations.md
    ├── phone-tree-script.md
    ├── phone-tree-detail.md
    └── our-tools-and-ghl.md
```

The `content/*.md` files are the editable source. After you change one, ask Claude to update the matching page. A few genuinely internal notes in those files (a known duplicate-record bug, an open "Roth" question, and "under construction" notes) are intentionally **kept out of the rendered pages** because the site is public.

---

## How to contribute

### If you're non-technical

1. Install **[GitHub Desktop](https://desktop.github.com)**
2. Clone this repo: `File → Clone Repository → lilybaick/kentlands-client-journey`
3. Open the file you want to edit in any text editor (edit the files in `content/`)
4. Make your changes and save
5. In GitHub Desktop, write a short description and click **Commit to main**
6. Click **Push origin** to send your changes live

### If you're technical

Standard git workflow — branch, PR, merge.

---

## Data source

Mapped from the **Kentlands demo GoHighLevel account**. No real client data.

System-map counts are a snapshot (workflows, pipelines, and forms verified against the GHL API). The page is laid out so a Netlify serverless function can feed it live numbers later without a redesign.

Last synced: July 2026
