# Crash The Routines (Astro)

**Crash The Routines** is a personal codebase, UI library, portfolio and frontend development reference, hosted on **Astro**.
The project features mockups, ready-made interface blocks, mini-projects, and articles to speed up development and share best practices.

---

## Tech Stack

### _Frontend_

- [Astro](https://astro.build/) — project base, build, and integration components
- HTML/CSS/JS — basic templates and examples
- Markdown/MDX — articles, guides, and built-in code samples. - (coming soon) TypeScript and React components
- React
- Typescript
- NextJS

### _Backend_

- Strapi
- ExpressJS

### _Tools_

- Webpack
- CRA

---

## Projects

### Frontend

| Project                                                                | Stack                    | Discription                               |
| ---------------------------------------------------------------------- | ------------------------ | ----------------------------------------- |
| [**astro-blog**](https://astro-blog01.netlify.app/)                    | Astro, Typescript        | Astro blog with categories and search     |
| [**astro-multilang**](https://astro-multilang.netlify.app)             | Astro, React, Typescript | My old multi-lang portfolio + blog.       |
| [**astro-multilink**](https://astro-multi-link.netlify.app/)           | Astro                    | Coming Soon.                              |
| [**astroblogportfolio**](https://astroblogportfolio.netlify.app/)      | Astro, Typescript        | Astro Blog + Portfolio.                   |
| [**b2bhelpadmin**](https://reactb2badmin.netlify.app/)                 | React, Tailwind          | React dashboard.                          |
| [**codebase**](https://www.crashtheroutine.site/)                      | Astro, Typescript        | Portfolio, reference book, blog on Astro. |
| [**game-portal**](https://game-portal-react.netlify.app/)              | React, Tailwind          | React game portal.                        |
| [**luxurycar-react-landing**](https://luxury-car-landing.netlify.app/) | React                    | React landing                             |
| [**zloioperator**](https://zloioperator.netlify.app/)                  | Astro                    | Personal blog about call-center job       |

---

## Features

- A collection of solid layout solutions
- Interface components: cards, forms, players, hero blocks, etc.
- Integrations with frameworks and libraries
- Search and strengthen the structure via Astro
- Documentation and articles directly in `content/`

---

## Project Structure

```

Source/
├─ apps/ # Astro / React / Next projects
├─ backend/ # CMS, API, Server for control projects

```

After launch, the project is available at:
[http://localhost:4321](http://localhost:4321)

---

## Run and Build Locally

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

## Code Style

- Use **ESLint** and **Prettier**
- Components are small and reusable.
- Comments are only for logic.
- We focus on code readability and structure.

---

### Author

**Dmitry Lean** — Software Developer
[GitHub Profile](https://github.com/dmitrylean)
