const babelConfig = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: 'last 2 Chrome versions',
      },
    ],
    [
      '@babel/preset-react',
      {
        development: process.env.NODE_ENV !== 'production',
      },
    ],
    '@babel/preset-typescript',
  ],
};

export default babelConfig;
