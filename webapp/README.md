# M4 Webapp README

This file provides instructions on how to run and build the M4 web application.

## Setup
```bash
cd webapp        # Navigate to webapp directory
npm install      # Install dependencies
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open the local URL printed by Vite to view it in the browser.

The page will reload if you make edits.

### `npm run build`

Builds the app for production to the `build` folder.

## Optional Contact Form Configuration

The contact form uses EmailJS only when these Vite environment variables are set:

```bash
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

Keep provider credentials out of source control and configure them in the deployment environment.
