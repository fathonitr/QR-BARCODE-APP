module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.js', '.json'],
        root: ['.'],
        alias: {
          '@components': './src/components',
          '@containers': './src/containers',
          '@navigation': './src/navigation',
          '@utils': './src/utils',
          '@assets': './assets',
        },
      },
    ],
  ],
};
