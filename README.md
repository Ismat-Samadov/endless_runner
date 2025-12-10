# Endless Runner Game

An engaging endless runner game built with Next.js, TypeScript, and Canvas API. Jump over obstacles, beat your high score, and enjoy smooth animations!

## Features

- **Smooth Gameplay**: 60 FPS canvas-based rendering with requestAnimationFrame
- **Progressive Difficulty**: Game speeds up every 100 points
- **Multiple Obstacle Types**: Box, spike, and tall obstacles for varied gameplay
- **Visual Effects**:
  - Particle effects on jump and collision
  - Animated starry background
  - Smooth gradients and shadows
  - Player rotation during jumps
- **Responsive Controls**:
  - Keyboard: SPACE, Arrow Up, or W key
  - Touch: Tap anywhere on the canvas
- **Score Tracking**: Persistent high score saved in localStorage
- **Attractive UI**:
  - Beautiful gradient backgrounds
  - Animated start and game over screens
  - Real-time score display

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Canvas API** - High-performance 2D rendering
- **requestAnimationFrame** - Smooth 60 FPS game loop

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to play the game!

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Deploying to Vercel

This project is optimized for Vercel deployment:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with default settings

Or use the Vercel CLI:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## How to Play

1. Press **SPACE**, **Arrow Up**, or **W** to start the game
2. Jump over obstacles by pressing the same keys or tapping the screen
3. Survive as long as possible to maximize your score
4. Game speeds up every 100 points - stay sharp!

## Game Mechanics

- **Gravity System**: Realistic jump physics with gravity
- **Collision Detection**: Precise hitbox detection
- **Procedural Generation**: Random obstacle types and intervals
- **Dynamic Difficulty**: Speed increases progressively
- **Score System**: 10 points per obstacle avoided

## Project Structure

```
endless_runner/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   └── EndlessRunner.tsx # Main game component
├── package.json
├── tsconfig.json
└── README.md
```

## Customization

You can easily customize the game by modifying `components/EndlessRunner.tsx`:

- Adjust `gravity` for jump height
- Modify `jumpStrength` for jump power
- Change `gameSpeed` for initial speed
- Customize colors in the gradient and obstacle rendering
- Add new obstacle types

## Browser Support

Works on all modern browsers with Canvas API support:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Android)

## License

MIT

---

Built with ❤️ using Next.js and Canvas API
