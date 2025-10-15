# 🛠 Project Starter Template

A universal starter template that includes setups for **pure HTML/CSS**, **React**, and **WordPress**.  
Use it to quickly spin up a new project without wasting time on initial configuration.

---

## 📂 Project Structure

```

/
├── html-css/ # Default HTML + CSS setup
├── react/ # Clean React (Create React App)
├── wordpress/ # Basic WP theme with pre-built blocks
└── README.md # This file

```

---

## 🔹 HTML/CSS

The `html-css` folder contains:

- Basic HTML5 structure.
- Included `reset.css`.
- Simple grid and typography styles.
- Example JavaScript connection.

**Run:**

Open `index.html` directly in your browser
_or_ use a local dev server (e.g., VS Code Live Server).

---

## 🔹 React

The `react` folder contains a clean **Create React App** setup:

- Standard `/src` and `/public` structure.
- React 18.
- ESLint with a base config.

**Run:**

```bash
cd react
npm install
npm start
```

---

## 🔹 WordPress

The `wordpress` folder is a minimal WordPress theme:

- Prepared template files (`header.php`, `footer.php`, `index.php`, etc.).
- Pre-built blocks for quick HTML-to-WP integration.
- Styles and scripts already enqueued.
- Template parts split into manageable chunks.

**Setup:**

1. Copy the `wordpress` folder to `/wp-content/themes/` in your WP installation.
2. Activate the theme via **Appearance → Themes**.
3. Start integrating your HTML/CSS into the ready-made blocks.

---

## 🚀 How to Use

1. Clone the repository:

```bash
git clone https://github.com/adamlean/web-template.git
```

2. Pick the folder for your project type.
3. Run or integrate into your environment.

---

## 📌 Notes

- This is a lightweight starter kit, kept intentionally simple.
- For large projects, extend the setup with linters, tests, and CI/CD.
- The WordPress theme works with the latest WP versions.

---

## 📄 License

Free to use, modify, and share.
