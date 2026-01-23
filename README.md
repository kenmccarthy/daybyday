# Day by Day

**Cycles, made manageable**

[![Version](https://img.shields.io/badge/version-1.5.0-blue.svg)](CHANGELOG.md)
[![License](https://img.shields.io/badge/license-Apache%202.0-green.svg)](LICENSE.md)

## Contents

- [Why This App Exists](#why-this-app-exists)
- [Who It's For](#who-its-for)
- [Design Principles](#design-principles)
- [How It Works](#how-it-works)
- [Privacy & Data](#privacy--data)
- [Versioning](#versioning)
- [Acknowledgements](#acknowledgements)
- [Medical Disclaimer](#medical-disclaimer)
- [Contact](#contact)

## Why This App Exists

Day by Day was built for my wife, **Hazel**, while she is undergoing chemotherapy for breast cancer. It started as a simple request: "Can you make me a spreadsheet to track my medications?"

The spreadsheet worked – but it wasn't the right shape for real life. We needed something that was **always to hand**, **mobile-first**, and **quick to update** as medications were taken. So I took the spreadsheet idea one step further and built Day by Day as a small, calm web app.

## Who It's For

Day by Day is for anyone going through treatment (or supporting someone who is) who needs a simple way to stay on top of a busy day – without turning life into a full-time admin job.

- **Track:** medications and daily tasks you need to remember
- **Record:** temperature, weight, and "how I'm feeling" notes
- **Summarise:** generate a daily email that captures how the day went

## Design Principles

### Reassurance Over Complexity

The goal is not "more features". The goal is **less stress**. If something adds friction, confusion, or clutter, it probably doesn't belong.

### Private by Default

No accounts. No sign-in. No syncing. No server. Your data stays on your device and remains yours.

### Helpful, Not Clinical

This isn't trying to be a medical system. It's meant to be quietly supportive: reminders, a record of the day, and quick access to useful information and contacts.

## How It Works

Day by Day is a self-contained web app designed for a phone screen first. You can add it to your home screen and use it like an app.

- Tick off medications and tasks as you go
- Capture a few simple health measures (such as temperature and weight)
- Write quick notes about symptoms, mood, sleep, or anything else that matters
- View symptom trends across each cycle to spot patterns
- Generate a daily summary email as a record for yourself or your care team

### The "two-second" test

If it takes more than a couple of seconds to log something, you'll stop doing it. This app is built around keeping the basics easy.

## Privacy & Data

Day by Day stores data **locally** in your browser on your device. There is no backend and no account system, so nothing is uploaded by default.

If you choose to email a daily summary, that email is sent using your own email app and settings. You are in control of what is shared and with whom.

## Versioning

Day by Day follows [Semantic Versioning](https://semver.org/) (SemVer): `MAJOR.MINOR.PATCH`

- **MAJOR** version changes indicate breaking changes that may require user action
- **MINOR** version changes introduce new features in a backwards-compatible manner
- **PATCH** version changes include bug fixes and minor improvements

**Current version:** 1.5.0

For a detailed list of changes in each version, see the [CHANGELOG](CHANGELOG.md).

## Acknowledgements

Day by Day was developed by **Ken McCarthy**. Generative AI tools – **Claude** and **ChatGPT** – were used during development to help draft, refine, and iterate the HTML, CSS, JavaScript, and interaction patterns based on prompt-driven instructions.

The app uses the following open-source libraries and external services:

- **Chart.js** – for rendering symptom trend charts ([chartjs.org](https://www.chartjs.org))
- **Google Fonts** – DM Sans and Fraunces typefaces ([fonts.google.com](https://fonts.google.com))
- **Quotable API** – for daily inspirational quotes ([github.com/lukePeavey/quotable](https://github.com/lukePeavey/quotable))

The navigation icons follow the **Heroicons** style ([heroicons.com](https://heroicons.com)).

The aim was to use these tools as practical accelerators, while keeping the intent, design choices, and responsibility for the app firmly human.

## Medical Disclaimer

Day by Day does **not** provide medical advice, diagnosis, or treatment recommendations. It is an organisational tool only.

Always follow the guidance of your medical team. If you are worried about symptoms or side effects, use the contact numbers provided by your care team or seek urgent medical attention where appropriate.

## Contact

Feedback and ideas are welcome – especially if they keep the app simple and genuinely useful.

- **Developer:** Ken McCarthy
- **Email:** [kenmccarthy@gmail.com](mailto:kenmccarthy@gmail.com)
