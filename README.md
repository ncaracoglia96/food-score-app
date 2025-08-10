# Food Score App

A React Native app to scan food products, fetch nutrition data from Open Food Facts, and calculate a health score based on glycemic index, nutrient density, ingredient quality, and more.

## Features

- Scan barcodes using your phone's camera
- Fetch nutrition info from Open Food Facts
- Calculate and display a health score for each food
- Simple React Navigation setup

## Getting Started

1. **Clone the repository**
   ```sh
   git clone https://github.com/ncaracoglia96/food-score-app.git
   cd food-score-app
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Start the app**
   ```sh
   npx expo start
   ```

## Dependencies

- react-native
- expo
- expo-barcode-scanner
- @react-navigation/native
- @react-navigation/stack

## File structure

```
App.js
src/
  api/
    openFoodFacts.js
  screens/
    ScanScreen.js
    ResultScreen.js
  utils/
    scoring.js
```

## License

MIT
