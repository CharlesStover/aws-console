// Don't process node_modules except for AWS UI.
module.exports = {
  ignore: [/node_modules\/?!@awsui\//],
  presets: ['@babel/preset-env'],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true,
      },
    ],
  ],
};
