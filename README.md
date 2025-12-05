# 🔮 Future You Generator

A fun, interactive web app that predicts your hilarious future persona based on your personality! Travel through time with immersive animations and discover what destiny has in store.

![Future You Generator](https://img.shields.io/badge/Next.js-16.0.7-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ Features

### 🎯 Dynamic Question Generation

- **2.2 Billion+ unique question combinations** - No two quizzes are the same!
- Algorithmic generation using seeded random number generator
- 25+ question templates with variable pools
- Fresh questions every time you play

### 🚀 Immersive Time Travel Experience

- **10 unique cosmic zones** - Each question has a different themed animation:
  - 🌌 Nebula Swirl
  - ☄️ Meteor Shower
  - 🌈 Aurora Gateway
  - 🕳️ Black Hole Passage
  - 🌀 Spiral Galaxy
  - ⚛️ Quantum Field
  - ☀️ Solar Flare Region
  - ⭐ Constellation Bridge
  - 🌀 Dimension Rift
  - 💫 Hyperspace Jump

### 🚀 Epic Rocket Launch Finale

- Countdown sequence (3... 2... 1... 🚀)
- Rocket launch with smoke and exhaust flames
- Hyperspace warp tunnel effect
- Portal arrival animation

### 📊 Personality Analysis

- **Radar Chart** visualization of your personality DNA
- 6 personality traits analyzed:
  - Creative 🎨
  - Ambitious 💼
  - Adventurous 🏔️
  - Social 👥
  - Intellectual 🧠
  - Relaxed 🧘

### 🎵 Sound Effects

- Synthesized audio using Web Audio API
- Whoosh sounds during transitions
- Launch rumble during rocket sequence
- Magical arrival chimes

### 📱 Social Sharing

- Share your future on Twitter/X, Facebook, LinkedIn
- Copy to clipboard functionality

## 🛠️ Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** TailwindCSS 4
- **Animations:** CSS Keyframes + Custom animations
- **Confetti:** canvas-confetti
- **Audio:** Web Audio API (no external files needed)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/future-you.git
cd future-you

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app!

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Theme, animations, cosmic effects
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main app controller
├── components/
│   ├── Landing.tsx      # Landing page with stats
│   ├── Quiz.tsx         # Quiz with unique slide animations
│   └── Result.tsx       # Results with rocket launch & radar chart
└── lib/
    ├── types.ts         # TypeScript interfaces
    ├── questionGenerator.ts  # Dynamic question algorithm
    └── futureGenerator.ts    # Prediction generator
```

## 🎨 Customization

### Adding New Question Templates

Edit `src/lib/questionGenerator.ts` to add new question templates:

```typescript
private questionTemplates: QuestionTemplate[] = [
  {
    template: "Your custom question with {variable}?",
    variables: { variable: ["option1", "option2", "option3"] },
    emoji: "🎯"
  },
  // ... more templates
];
```

### Modifying Slide Themes

Edit `src/components/Quiz.tsx` to customize the cosmic zone themes:

```typescript
const slideThemes = [
  {
    name: "nebula",
    title: "Entering the Nebula",
    bgColor: "from-purple-900/30 to-pink-900/20",
  },
  // ... customize themes
];
```

## 🌟 Screenshots

| Landing                  | Quiz                      | Result                  |
| ------------------------ | ------------------------- | ----------------------- |
| 🔮 Mystical landing page | 🌌 Cosmic quiz experience | 🚀 Rocket launch finale |

## 📄 License

MIT License - feel free to use this for your own projects!

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [TailwindCSS](https://tailwindcss.com/)
- Confetti by [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)

---

Made with ✨ and lots of cosmic energy
