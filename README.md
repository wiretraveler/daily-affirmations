# Daily Affirmations

A clean, mobile-first web app that delivers one thoughtfully curated affirmation each day.

Designed to create a calm, intentional experience, the app displays a single affirmation based on the current date, along with a personalized greeting, today's date, and a focus category to provide context for the message.

## Features

- Dynamic greeting (Good Morning, Good Afternoon, Good Evening, Good Night)
- Displays the current date
- One unique affirmation each day
- Daily focus category
- Mobile-first responsive design
- Frosted glass interface with a soft pastel color palette
- Custom app icon and Home Screen support for iPhone
- Runs entirely in the browser — no backend or database required

## Project Structure

```
.
├── index.html
├── style.css
├── script.js
├── affirmations.json
└── icons/
    ├── app-icon.png
    └── heart.png
```

## How It Works

- Affirmations are stored in `affirmations.json`.
- The app selects one affirmation based on the current date, ensuring everyone sees the same affirmation for that day.
- Greeting and date update automatically based on the user's local time.

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- JSON

## Usage

Visit the GitHub Pages site or add it to your iPhone Home Screen for an app-like experience.

## Future Enhancements

- Progressive Web App (PWA) support
- Offline availability
- Improved cache management
- Enhanced installation experience across devices
