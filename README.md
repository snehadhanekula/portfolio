<img width="1512" height="858" alt="Screenshot 2026-06-07 at 6 27 54 PM" src="https://github.com/user-attachments/assets/50825a63-e1fe-439b-b599-5485e405d6b6" />

# Sneha Dhanekula | Software Developer Portfolio 

A responsive personal portfolio built with **React** and deployed through **GitHub Pages**. The website highlights my professional experience, full-stack development projects, technical skills, education, and leadership background. It reflects my experience with technologies including Angular, TypeScript, C#, ASP.NET Web API, SQL, React, Next.js, Firebase, cloud platforms, testing, and AI-assisted development workflows. 
### Live Portfolio

**[snehadhanekula.github.io/portfolio/](https://snehadhanekula.github.io/portfolio/)**

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation & Usage](#installation--usage)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Contact](#contact)

---

## About the Project

This portfolio provides an overview of my background as a Software Developer and showcases my experience across frontend development, backend APIs, databases, cloud services, software testing, and AI-assisted engineering workflows. 

Visitors can explore: 
- Professional software development experience
- Full-stack projects and technical case studies - Programming languages, frameworks, and developer tools
- Leadership and campus involvement
- Education and professional contact information The interface is designed to be responsive, accessible, and easy to navigate.
---

## Features

- **Responsive Design**: Works on mobile, tablet, and desktop.
- **Animated Sections**: Utilizes libraries like Animate.css for smooth transitions.
- **Skills & Projects**: Showcases core competencies and highlights selected projects.
- **Contact Form (Communication)**: Allows direct communication or links to social platforms.

---

## Tech Stack

- **React**: Core library for building the UI.
- **React-Bootstrap**: For styling and layout components.
- **Animate.css**: For simple, ready-to-use animations.
- **GitHub Pages**: For easy deployment and hosting.


---

## Installation & Usage

### Prerequisites

- **Node.js** (v14 or above)
- **npm** or **yarn**

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/snehadhanekula/portfolio.git
   ```
2. **Install Dependencies**:
   ```bash
   cd portfolio
   npm install
   ```
3. **Start Development Server**:
   ```bash
   npm start
   ```
   The app will run at `http://localhost:3000`.

---

## Deployment

This project is deployed on **GitHub Pages** at:
```
https://snehadhanekula.github.io/portfolio/
```

To redeploy:

1. Set the `"homepage"` field in your `package.json`:
   ```json
   "homepage": "https://snehadhanekula.github.io/portfolio"
   ```
2. Install `gh-pages` (if not installed):
   ```bash
   npm install gh-pages --save-dev
   ```
3. Add these scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build",
     ...
   }
   ```
4. Deploy:
   ```bash
   npm run deploy
   ```
5. Your site will update at the above URL.

---

## Project Structure

```
portfolio
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   ├── ...
├── src
│   ├── assets
│   │   └── img
│   ├── components
│   │   ├── NavBar.js
│   │   ├── Banner.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Contact.js
│   │   └── ...
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

- **public**: Static files, including `index.html`.
- **src**: Main React code and assets.
- **package.json**: Project configuration and scripts.
- **README.md**: Documentation (this file).

---

## Contact

- **Portfolio**: [snehadhanekula.github.io/portfolio/](https://snehadhanekula.github.io/portfolio/)
- **LinkedIn**: [linkedin.com/in/snehadhanekula/](https://www.linkedin.com/in/snehadhanekula/)
- **GitHub**: [github.com/snehadhanekula](https://github.com/snehadhanekula)
- **Email**: [sdhanek1@asu.edu](mailto:sdhanek1@asu.edu)

Feel free to reach out if you have any questions or suggestions!

---

### Thank You!

Thank you for visiting my portfolio. If you’d like to contribute or have feedback, feel free to open an issue or send me a message.
