# Dvago Brand Skill for Claude

A Claude skill that applies Dvago's visual identity to anything Claude makes for Dvago: decks, Word and PDF documents, spreadsheets, websites and web apps, HTML artifacts, and social and print creative.

It covers the DVAGO wordmark and heart-V mark, the green palette with WCAG-checked text colors, Inter for web and Arial for Office files, layout and shape rules, and tone guidance for pharmacy content (no invented claims, prices or slogans).

> **Unofficial.** Brand values were taken from the public dvago.pk website, not from an official Dvago brand book. The DVAGO name and logos are trademarks of their owner.

## Install

### Claude Code

```
/plugin marketplace add akash-is-taken/dvago-brand
/plugin install dvago-brand@dvago-brand
```

Get updates later with `/plugin marketplace update dvago-brand`.

### Claude app (claude.ai, desktop)

1. Download `dvago-brand.skill` from the [latest release](https://github.com/akash-is-taken/dvago-brand/releases/latest).
2. In Claude, open **Settings → Capabilities → Skills** and upload the file.

Team and Enterprise admins can add the skill once for the whole organization instead.

## Use

You don't need to name the skill. Ask for Dvago work and Claude picks it up, for example:

- "Make a 6-slide deck on Dvago's Q3 performance"
- "Build a landing page for Dvago's same-day delivery in Karachi"
- "Design an Instagram post for Dvago's winter vitamins sale"

## Contents

```
skills/dvago-brand/
├── SKILL.md            brand spec and workflow
├── references/web.md   web/UI rules, contrast table, UI patterns
├── assets/             logos and mark (SVG + PNG), tokens.css, tailwind.preset.js
└── evals/              test cases, runnable with `claude plugin eval`
```
