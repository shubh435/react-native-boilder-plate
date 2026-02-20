# React Native Boilerplate

Lightweight, open-source starter for React Native (0.84 / React 19). It ships with a minimal flow: **Splash → Login → Home** plus theming, SVG icons, and a few utility components so you can plug in your own APIs and screens quickly.

## Features
- Opinionated TypeScript setup with `@react-native-community/cli`
- Minimal navigation stack (native-stack) with splash/login/home only
- Custom theming (light/dark aware) and styled inputs
- SVG icon pipeline via `react-native-svg` + transformer
- Basic storage helper and network wrapper ready to extend

## Project Structure
- `App.tsx` – entry point wiring NavigationContainer
- `src/navigation/MainStack.tsx` – splash, login, home routes
- `src/screen/` – `SplashScreens`, `LoginScreen`, `HomeScreen`
- `src/components/` – common UI (TextInput, Snackbar, Button, etc.)
- `src/utils/` – networking, storage, scaling helpers
- `src/assets/` – fonts and SVG icons

## Prerequisites
- Node 22+ (see `package.json` engines)
- Xcode for iOS, Android Studio for Android
- [React Native environment setup](https://reactnative.dev/docs/set-up-your-environment) completed

## Installation
```sh
npm install

# iOS pods (first time or after native deps change)
cd ios && bundle install && bundle exec pod install && cd ..
```

## Running
```sh
# start Metro
npm start

# run platforms (in another terminal)
npm run android
npm run ios
```

## Customizing
- Add your own screens to `src/navigation/MainStack.tsx`.
- Replace placeholder login logic in `src/screen/LoginScreen.tsx` with your API.
- Adjust theme tokens in `src/global/theme.ts`.
- Add/remove SVG icons in `src/assets/images/svg/` and import where needed.

## Scripts
- `npm start` – start Metro
- `npm run android` – install/run on Android
- `npm run ios` – install/run on iOS
- `npm test` – run Jest tests (if added)
- `npm run lint` – run ESLint

## Contributing
Issues and PRs are welcome. Please include steps to reproduce and platform info when filing bugs.

## License
MIT
