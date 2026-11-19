# Nour Salepan — Portfolio

Personal portfolio site for **Nour Salepan** — cybersecurity (Nmap · Wireshark · Linux · vulnerability assessment), with a background in data analysis.

**Live site:** https://noursalepan.netlify.app · https://nour-salepan.github.io

## About

A static, dependency-free portfolio built with plain HTML, CSS and vanilla JavaScript — no build step, no framework, no npm install. Neon-accented design with light and dark themes, and a long-form writing section.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home — positioning, key stats, featured security work, transferable skills |
| `projects.html` | Security case studies (DVWA assessment, Nmap toolkit) + collapsed data-analysis archive |
| `skills.html` | Security tools and concepts, transferable skills, collapsed data stack |
| `experience.html` | Security projects, work history, education, certifications |
| `blog.html` | Writing index |
| `post-cyber-foundations.html` | *Cybersecurity Foundations, Explained Simply* — Google Cybersecurity Certificate Course 1 concepts |
| `post-complete-guide.html` | *From Clay Tablets to AI* — earlier long-form data analysis guide |
| `contact.html` | Contact details |

## Assets

| File | Purpose |
| --- | --- |
| `styles.css` | Core theme — CSS custom properties, light/dark tokens, layout, components, collapsible archives |
| `article.css` | Long-form article typography, tables, callouts, timeline |
| `theme.js` | Theme toggle with `localStorage` persistence, mobile nav, scroll animations |
| `404.html` | Custom not-found page |

## Featured security work

- **[Nmap Reconnaissance Toolkit + DVWA Security Assessment](https://github.com/Nour-salepan/scanning-project)** — Bash scripts automating the four-stage recon workflow (host discovery → port scan → version detection → NSE), plus a formal assessment of a local DVWA lab. Identified a critical credential-exposure chain: directory listing enabled on `/config/` combined with a leftover `config.inc.php.bak` served as plain text, exposing live database credentials. Documented with evidence, severity and remediation.

All testing performed against systems I own or that explicitly authorise it (`scanme.nmap.org`, local labs, TryHackMe).

## Earlier work — data analysis

- **[Marketing Campaign Audit](https://github.com/Nour-salepan/data-analyst-portfolio)** — Audited a 798-row, 6-channel dataset. Identified an 89.7x ROAS outlier as a source-data units error that had inflated blended return-on-spend by ~73% (6.4x → 3.7x corrected).
- **[Car Price Analysis](https://github.com/Nour-salepan/Car-Price-Analysis)** — Schema design and 13 progressively advanced PostgreSQL queries (CTEs, window functions, CASE banding).

## Running locally

No tooling required — open `index.html` in a browser.

For a local server (so relative paths behave as in production):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deployment

Hosted on GitHub Pages (`main` branch, root) and Netlify, both building from this repository. Any push to `main` redeploys automatically.

## Contact

- Email: noursalepan366@gmail.com
- LinkedIn: [nour-salepan-187308278](https://www.linkedin.com/in/nour-salepan-187308278)
- GitHub: [@Nour-salepan](https://github.com/Nour-salepan)
