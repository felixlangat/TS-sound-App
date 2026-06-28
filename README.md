# TS Sound App

A TypeScript + Vite soundboard web app that plays sounds with **button clicks** and **keyboard shortcuts**.

## Features

- Interactive soundboard UI with visual button feedback
- Keyboard-triggered sound playback
- Mix of hosted sounds and local meme sounds from `public/sound-app`
- Lightweight setup using Vite + TypeScript

## Tech Stack

- TypeScript
- Vite
- HTML/CSS

## Project Structure

```text
.
├── my-random-site/
│   ├── index.html
│   ├── src/
│   │   ├── main.ts
│   │   └── style.css
│   ├── public/
│   │   └── sound-app/
│   └── package.json
└── README.md
```

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/felixlangat/TS-sound-App.git
cd TS-sound-App/my-random-site
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

5. Preview the production build:

```bash
npm run preview
```

## How It Works

Sound definitions (name, key, and audio URL/path) are configured in:

- `my-random-site/src/main.ts`

Each sound is rendered as a button in the board. Sounds can be triggered by:

- Clicking the button
- Pressing the mapped keyboard key

## Notes

- Local audio assets live in `my-random-site/public/sound-app`.
- Keyboard mappings are case-sensitive to how keys are defined in the `SOUNDS` array.
