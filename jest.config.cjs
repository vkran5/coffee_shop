module.exports = {
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  moduleDirectories: ['node_modules', 'src', 'components'],
  testEnvironment: 'jsdom',
};
