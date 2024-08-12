# Piccy

![Static Badge](https://img.shields.io/badge/Expo_Compatible-expo?style=for-the-badge&logo=expo&logoColor=fff&labelColor=000&color=4630EB) ![NPM Downloads](https://img.shields.io/npm/d18m/%40piccy%2Fnative?style=for-the-badge) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/%40piccy%2Fnative?style=for-the-badge) ![GitHub repo file or directory count (in path)](https://img.shields.io/github/directory-file-count/krishna-gujjjar/piccy/packages%2Fnative%2Fsrc%2Fshapes?type=file&extension=tsx&style=for-the-badge&label=Total%20SVG%20Shapes&color=%23FF5858) ![NPM License](https://img.shields.io/npm/l/%40piccy%2Fnative?style=for-the-badge)

> Save time and effort with our ready-to-use SVG shapes. Create beautiful, professional designs without the hassle.

## Demo

| Screenshot-01 | Screenshot-02 | Screenshot-03 |
|---|---|---|
|![Screenshot_2024-08-07-21-59-14-921_host exp exponent](https://github.com/user-attachments/assets/de2e712c-96ae-4c7e-b90d-cdc565f0634b) | ![Screenshot_2024-08-07-21-35-21-326_host exp exponent](https://github.com/user-attachments/assets/eab1b26b-cd18-4f76-a71a-fda133d45040) | ![Screenshot_2024-08-07-21-35-02-913_host exp exponent](https://github.com/user-attachments/assets/d86c7496-9146-42b0-b7f7-9815d3e5649c) |


## Installation

#### Using NPM

```bash
npm install @piccy/native
```

#### Using Yarn

```bash
yarn add @piccy/native
```

#### Using PNPM

```bash
pnpm add @piccy/native
```

#### Using Bun

```bash
bun add @piccy/native
```

## Dependencies

#### For Expo

```bash
bunx expo install react-native-reanimated react-native-svg
```

#### For React Native

```bash
bun add react-native-reanimated react-native-svg
```


## Usage

```tsx
import { View } from "react-native";
import { Avatar } from "@piccy/native";

export default () => (
  <View style={{ flex: 1 }}>
    <Avatar
      source={{ uri: "https://picsum.photos/100" }}
      value="krishnagujjjar@gmail.com"
    />
    <Avatar value="krishna gujjjar" />
    <Avatar value="another@user.com" withShape={false} />
    <Avatar value="piccy" />
  </View>
);
```


## License

MIT © [Krishna Gujjjar](https://github.com/krishna-gujjjar)


## Contributing

Contributions are welcome! Please open an issue or submit a pull request on [GitHub](https://github.com/krishna-gujjjar/piccy).


## Acknowledgements

- Inspired by [Avvvatars](https://github.com/nusu/avvvatars)
- SVG shapes by [Monika Michalczyk](https://www.monikamichalczyk.com/)
