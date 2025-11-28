# Email Filter App

A React application that filters valid email addresses from a list of strings. Built with Tailwind CSS and tested with Jest.

## Features

- 📧 Filter valid emails from a list of strings
- ✅ Emails must contain both `@` and `.` to be valid
- 🎨 Beautiful dark-themed UI with Tailwind CSS
- 🧪 Comprehensive test coverage with Jest

## Screenshot

The app provides a simple interface where you can:
- Enter strings (one per line)
- Click "Filter Emails" to extract valid emails
- Load sample data to test the functionality

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/basilisSam/email-filter-app.git

# Navigate to the project
cd email-filter-app

# Install dependencies
npm install
```

### Running the App

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Running Tests

```bash
npm test
```

Tests run in CI mode by default and exit after completion.

For watch mode during development:
```bash
npm run test:watch
```

## The Filter Function

The core function filters strings that contain both `@` and `.`:

```javascript
function filterEmails(items) {
  const result = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    if (item.length > 0) {
      if (item.includes("@")) {
        if (item.includes(".")) {
          result.push(item);
        }
      }
    }
  }

  return result;
}
```

## Project Structure

```
src/
├── utils/
│   ├── __tests__/
│   │   └── emailFilter.test.js
│   └── emailFilter.js
├── App.js
├── App.css
└── index.js
```

## Tech Stack

- **React** 19
- **Tailwind CSS** 4
- **Jest** + React Testing Library

## License

MIT
