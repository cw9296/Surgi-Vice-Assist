# Surgi-Vice-Assist
Surgi-Vice Assist is a healthcare education tool intended to help patients learn more about their surgical procedures and how to recover.

## How to contribute to this repository (approved collaborators)
Branch off of main to develop a feature. Create a pull request before merging to main.

## How to run the app
1. Make sure the React native version in package.json is `"react-native": "0.76.7"`
1. Run `npm install` to install all relevant packages
1. Use `npx expo start` in the root directory of the project. Ensure **Expo Go** is installed on your device. 
1. Scan the QR code generated in the command line to open the app on your device.

## Adding a screen to the app
1. Write the Javascript for your screen inside `src/screens`
1. Import your screen into `App.js` using `import YourScreen from './src/screens/YourScreen'`
1. Inside the Stack Navigator component, add your screen: `<Stack.Screen name="YourScreen" component={YourScreen} />`
1. Be sure to properly link your screen to an on-click function so it opens when expected.