# Basic Calculator

A professional, modern, and responsive basic calculator built with HTML, CSS, and JavaScript. The design is inspired by the BL 206 electronic calculator, featuring a soft blue default theme with optional dark and light mode themes.

## Features

- **Core Functions**: Basic operations (`+`, `-`, `×`, `÷`), decimal point handling, and percentage calculation (`%`).
- **Memory Functions**: `MRC` (Memory Recall/Clear), `M-` (Subtract from Memory), `M+` (Add to Memory).
- **Square Root**: Built-in square root function (`√`).
- **Theming**: Toggle between Blue (Default), Dark, and Light themes via the top theme switcher.
- **Keyboard Support**: Fully supports keyboard input for all basic operations (Numpad, Enter, Backspace/Delete, Esc).
- **Responsive Design**: Adapts beautifully to desktop and mobile screens.
- **Animations**: Smooth micro-animations on button press and calculator hover/entrance.

## File Structure

- `index.html`: Contains the structural markup of the calculator and the grid layout.
- `style.css`: Defines the aesthetics, CSS variables for theming, responsive grid layout, and animations.
- `script.js`: Handles the calculator logic, state management, button events, and keyboard inputs.

## Setup and Usage

This project consists entirely of static files. To run it:

1. Clone or download the repository.
2. Open `index.html` in any modern web browser.
3. No build tools or servers are required.

## Technical Details

- **CSS Grid**: Utilized for the precise layout of the calculator buttons, allowing the `+` button to span multiple rows smoothly.
- **Class-based JavaScript**: The calculator logic is encapsulated within a `Calculator` class, keeping the code modular, readable, and maintainable.
- **Theme Variables**: CSS variables (`:root` and `[data-theme]`) manage colors seamlessly without requiring heavy JavaScript manipulation.

## Keyboard Shortcuts

| Action           | Key Binding          |
|------------------|----------------------|
| Numbers 0-9      | `0` - `9`            |
| Decimal Point    | `.`                  |
| Add / Subtract   | `+` / `-`            |
| Multiply / Divide| `*` or `x` / `/`     |
| Calculate (=)    | `Enter` or `=`       |
| Clear (ON/C)     | `Escape`, `Delete`, `Backspace` |
| Percentage       | `%`                  |
