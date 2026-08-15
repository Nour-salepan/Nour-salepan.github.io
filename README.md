# Nour Salepan — Portfolio

Personal portfolio site for **Nour Salepan**, data analyst (SQL · Advanced Excel · Power BI · Python).

**Live site:** https://nour-salepan.github.io

## About

A static, dependency-free portfolio built with plain HTML, CSS, and vanilla JavaScript — no build step, no framework, no npm install. Features a neon-accented design with light and dark themes, and a long-form writing section.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home — profile, key stats, featured work |
| `projects.html` | Project case studies with methodology and findings |
| `skills.html` | Tools and competencies with proficiency indicators |
| `experience.html` | Work history, education, certifications, languages |
| `blog.html` | Writing index |
| `post-complete-guide.html` | Long-form guide: *From Clay Tablets to AI: The Complete Field Guide to Data Analysis* |
| `contact.html` | Contact details |

## Assets

| File | Purpose |
| --- | --- |
| `styles.css` | Core theme — CSS custom properties, light/dark tokens, layout, components |
| `article.css` | Long-form article typography, tables, callouts, timeline |
| `theme.js` | Theme toggle with `localStorage` persistence, mobile nav, scroll animations |
| `404.html` | Custom not-found page |

## Featured projects

- **[Marketing Campaign Performance Analysis](https://github.com/Nour-salepan/data-analyst-portfolio)** — Audited a 798-row, 6-channel ad dataset in Excel. Identified an 89.7x ROAS outlier as a source-data units error that had inflated blended return-on-spend by roughly 73% (6.4x → 3.7x corrected), and quantified $345.5K of underperforming budget.
- **[Car Price Analysis](https://github.com/Nour-salepan/Car-Price-Analysis)** — Schema design and 13 progressively advanced PostgreSQL queries (CTEs, window functions, CASE banding) against a public vehicle-listings dataset.

## Running locally

No tooling required — open `index.html` in a browser.

For a local server (recommended, so relative paths behave exactly as they will in production):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deployment

Hosted on GitHub Pages from the `main` branch, root directory. Any push to `main` redeploys automatically.

## Browser support

Uses `color-mix()` and CSS custom properties — supported in all current major browsers. Degrades gracefully in older ones.

## Contact

- Email: noursalepan366@gmail.com
- LinkedIn: [nour-salepan-187308278](https://www.linkedin.com/in/nour-salepan-187308278)
- GitHub: [@Nour-salepan](https://github.com/Nour-salepan)
