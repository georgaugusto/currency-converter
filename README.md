# Currency Converter

A modern and responsive currency converter built with React + TypeScript, using the Currencyapi API to fetch current and historical exchange rates.

## 🚀 Live Demo

**[View Live Demo](https://currency-converter-delta-ruby-28.vercel.app/)**

Try the application online without any setup required!

> **Note**: If the demo shows API errors, the free API key may have expired. For full functionality, clone and run locally with your own API key.

## 🌟 Features

- ✅ **Real-time Conversion**: Current exchange rates between 100+ currencies
- 📅 **Historical Conversion**: Query exchange rates for specific dates
- 🔄 **Quick Swap**: Swap button to alternate source and target currencies
- ✨ **Modern Interface**: Clean and responsive design with styled-components
- 🛡️ **Validation**: Form validation with Zod and React Hook Form
- 🚨 **Error Handling**: Clear messages for network and validation errors

## 🏗️ Architecture

The project follows a modular and scalable architecture based on:

### Folder Structure

```
src/
├── components/         # Reusable UI components
├── hooks/             # Custom hooks for state logic
├── layout/            # Application layouts
├── schemas/           # Validation schemas (Zod)
├── services/          # Service layer (API)
├── template/          # Page templates
└── utils/             # Utilities and helpers
```

### Main Technologies

- **React 19** - Frontend framework
- **TypeScript** - Static typing
- **Vite** - Modern and fast build tool
- **Styled Components** - CSS-in-JS for styling
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **React Number Format** - Number formatting

### Architectural Patterns

- **Component Composition**: Small and reusable components
- **Custom Hooks**: Isolated and testable state logic
- **Service Layer**: API layer abstraction
- **Schema Validation**: Centralized validation with Zod
- **Error Boundaries**: Graceful error handling

## 🚀 How to Run Locally

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** or **yarn**
- **API Key** from [Currencyapi](https://currencyapi.com/)

### 1. Clone the Repository

```bash
git clone <repository-url>
cd currency-converter
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure the API Key

Create a `.env.local` file in the project root:

```bash
# .env.local
VITE_CURRENCYAPI_KEY=your_api_key_here
```

> **⚠️ Important**:
>
> - Never commit the `.env.local` file
> - Get your free key at [currencyapi.com](https://currencyapi.com/)
> - The variable must start with `VITE_` to be accessible in the frontend

### 4. Run the Project

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

### 5. Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Generate optimized build
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## 🔧 API Configuration

The project uses [Currencyapi](https://currencyapi.com/) which offers:

- **300 free requests/month**
- **Real-time rates** for 100+ currencies
- **Historical data** since 1999
- **High availability** (99.9% uptime)

### Used Endpoints

- `GET /v3/currencies` - List all available currencies
- `GET /v3/latest` - Current exchange rate
- `GET /v3/historical` - Historical exchange rate

## 🎯 How to Use

1. **Select currencies**: Choose source and target currency
2. **Enter amount**: Insert the amount to be converted
3. **Date (optional)**: Select a date for historical conversion
4. **Convert**: Click "Convert" or press Enter
5. **Swap currencies**: Use the ⇄ button to alternate source/target

### Validations

- **Amount**: Required, positive, up to 2 decimal places
- **Currencies**: Required, must be different
- **Date**: Optional, cannot be in the future

## 🔮 Future Improvements

### High Priority - UI Components

- [ ] **Custom Select Component**: Create a personalized select component with search, filtering, and currency flags
- [ ] **Custom Date Input Component**: Develop a custom date picker with better UX and validation
- [ ] **Style Tokenization**: Create a comprehensive design token system for colors, spacing, typography, and shadows
- [ ] **Theme Provider**: Implement centralized theme management with design tokens

### Features

- [ ] **Trend Charts**: Exchange rate variation history
- [ ] **Favorites**: Save most used currency pairs
- [ ] **Advanced Calculator**: Mathematical operations on values
- [ ] **Multiple Conversion**: Convert to multiple currencies simultaneously
- [ ] **Notifications**: Alerts when rate reaches specific value
- [ ] **Offline Mode**: Cache to work without internet

### User Experience

- [ ] **Dark Theme**: Toggle between light/dark mode
- [ ] **PWA**: Installation as native app
- [ ] **Internationalization**: Multiple language support
- [ ] **Keyboard Shortcuts**: Quick keyboard navigation
- [ ] **Auto-complete**: Smart currency search

### Performance & Techniques

- [ ] **Service Worker**: Advanced cache and offline functionality
- [ ] **Virtual Scrolling**: Optimized currency list
- [ ] **Lazy Loading**: On-demand loading
- [ ] **Bundle Splitting**: Optimized chunks
- [ ] **Real-time Updates**: WebSocket for real-time rates

### DevOps & Quality

- [ ] **E2E Tests**: Cypress for integration testing
- [ ] **CI/CD**: Automated deployment pipeline
- [ ] **Monitoring**: Performance logs and metrics
- [ ] **Docker**: Application containerization
- [ ] **Storybook**: Component documentation

## 🤝 Contributing

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

---

**Made with 💜 &nbsp;by Georg Augusto Schlegel 👋 &nbsp;[Send a Hello](https://www.linkedin.com/in/georgaugusto/)**
