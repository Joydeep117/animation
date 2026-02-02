# Insect Cursor Animation

This small project creates a custom cursor effect using **HTML**, **CSS**, and **JavaScript**.

Instead of the normal arrow cursor, the page hides the default cursor and renders a cluster of tiny, glowing insects that chase the mouse position with a smooth easing motion. Because each insect follows slightly behind the one in front of it, the movement looks like a playful swarm rather than a single dot.

## Visual Design

- **Background**: A dark, vignetted gradient so the glowing insects stand out.
- **Insects**: Small circular bodies with soft outer glow and simple wing shapes drawn using CSS `::before` and `::after` pseudo-elements.
- **Color**: Each insect is tinted with a different hue (using `hue-rotate`) so the swarm has a rainbow look.

## Behavior

- The browser listens for `mousemove` events and records the cursor coordinates.
- Each insect has its own **position state** and an **easing factor** so it moves toward its target but never instantly snaps.
- The first insect targets the real cursor, while the others target the insect ahead of them, creating a trailing effect.
- `requestAnimationFrame` is used to update positions every frame in a smooth, efficient way.

## Files

- `index.html` – Main page that loads the styles and script and contains the elements for the insect swarm.
- `styles.css` – Layout, dark background, and all styling for the insects (shape, glow, and color variations).
- `script.js` – Cursor-tracking and animation logic that moves the insects so they trail behind the cursor.

## How to Run

1. Open the folder `c:\Users\JOYDEEP\Downloads\css\animation` in your file explorer.
2. Double-click `index.html` (or right-click and choose “Open with” → your browser).
3. Move your mouse over the page to see the cursor animation in action.

No build step or server is required; everything runs directly in the browser.

