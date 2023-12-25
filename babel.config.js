module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'], // 取决于你的 src 目录在哪里
        alias: {
          "@src": "./src", // 你在 tsconfig 的 paths 配置的别名
          // 其他路径别名
        },
      },
    ],
  ],
};
