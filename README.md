# ⚡ Crash The Routines (Astro)

📚 **Crash The Routines** is a personal codebase, UI library, and frontend development reference, hosted on **Astro**.
The project features mockups, ready-made interface blocks, mini-projects, and articles to speed up development and share best practices.

---

## 💡 Project Idea

This repository is more than just a collection of demos or templates.
Here I store my own layout projects (**HTML/CSS/JS**), which I use as a **codebase** and knowledge base.

When I looked through repositories with HTML projects, many of the codes were outdated and confusing.
So, I decided to gather everything that has happened over the past year in one place—in a modern format and with a clear structure.

**Crash The Routines** was conceived as a reference guide where you can quickly find out how to create a specific block, add a necessary function, or view the logic of a component.
Simply put, it's my personal "developer's field kit,"
which over time has evolved into a full-fledged open source project.

---

## 🔧 Tech Stack

- [Astro](https://astro.build/) — project base, build, and integration components
- HTML/CSS/JS — basic templates and examples
- Markdown/MDX — articles, guides, and built-in code samples. - (coming soon) TypeScript and React components

---

## 🚀 Features

- A collection of solid layout solutions
- Interface components: cards, forms, players, hero blocks, etc.
- Integrations with frameworks and libraries
- Search and strengthen the structure via Astro
- Documentation and articles directly in `content/`

---

## 📂 Project Structure

```

Source/
├─ Components/ # UI and Functional Blocks
├─ Contents/ # Articles, Cheat Sheets, and Examples
├─ Layouts/ # Page Templates
└─ Public/ # Icons, Images, and Assets. Enable selection of websites where static sites are stored.
└─ data/ #templates in email templates (Astro/React/Next) and abandoned projects in email projects (PHP/Python)

```

After launch, the project is available at:
👉 [http://localhost:4321](http://localhost:4321)

---

## 🔹 7. Run and Build Locally

### All Projects at Once

```bash
pnpm dev # runs all dev servers in parallel
pnpm build # builds everything
```

### Single Project

```bash
pnpm turbo run dev --filter=astro-app
pnpm turbo run build --filter=next-app
```

Check the list of available projects:

```bash
pnpm list -r
```

---

## 🤝 How to contribute

The project is open to contributors, designers, and developers.
You can add new UI components, improve articles, fix bugs, or update the documentation.

### 🔹 Steps

1. Fork the repository and clone your fork:

```bash
git clone https://github.com/your-username/crash-the-routines.git
```

2. Create a branch:

```bash
git checkout -b function/your-function
```

3. Make your changes, description sections, and commit:

```bash
git commit -m "Add: new MusicPlayer component"
```

4. Open a **Pull Request** and briefly describe your contribution.

> 💬 Anything that makes the project better—from text revisions to code—is welcome!

---

## 🧠 Code Style

- Use **ESLint** and **Prettier**
- Components are small and reusable.
- Comments are only for logic.
- We focus on code readability and structure.

---

## 💬 Community

If you have ideas, questions, or would like to participate, please submit a request for membership or discuss in [Discussions](../../discussions).

🎧 The project is open for contributions.

---

## 🧡 Acknowledgments

Thanks to everyone who helps the project grow.
Crash The Routines isn't just code; it's an attempt to transform the chaos of ideas into a structured experience.

---

### Author

**Dmitry Lean** — Software Developer 🎶
[GitHub Profile](https://github.com/dmitrylean)
