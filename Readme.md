# API-Test

A Playwright-based API testing framework for automated testing of RESTful endpoints. This project provides a simple, chainable request handler and a suite of example tests for GET, POST, and smoke testing API endpoints.

## Features
- Chainable `RequestHandler` class for building API requests
- Playwright test integration
- Example tests for GET, POST, and smoke scenarios
- Customizable headers, query parameters, and request bodies
- Easy to extend for new endpoints and test cases

## Project Structure
```
API-Test/
├── package.json
├── playwright.config.ts
├── tests/
│   ├── GetTags.spec.ts
│   ├── PostAPI.spec.ts
│   └── smokeTest.spec.ts
├── utils/
│   ├── fixtures.ts
│   └── request-handler.ts
├── playwright-report/
│   └── index.html
└── test-results/
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm

### Installation
1. Clone the repository:
   ```cmd
   git clone https://github.com/saeedkhan-github/API-Test.git
   cd API-Test
   ```
2. Install dependencies:
   ```cmd
   npm install
   ```

### Running Tests
To run all Playwright tests:
```cmd
npx playwright test
```

To run a specific test file:
```cmd
npx playwright test tests/GetTags.spec.ts
```

### Viewing Reports
After running tests, view the HTML report:
```cmd
npx playwright show-report
```
Or open `playwright-report/index.html` in your browser.

## Usage Example

```typescript
import { RequestHandler } from './utils/request-handler';

const api = new RequestHandler()
  .url('https://conduit-api.bondaracademy.com/api')
  .path('/articles')
  .params({ limit: 10, offset: 0 })
  .headers({ Authorization: process.env.Token })
  .body({ user: { email: 'your-email', password: 'your-password' } });
```

## Customization
- Add new test files in the `tests/` directory.
- Extend `RequestHandler` in `utils/request-handler.ts` for more request features.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
MIT
