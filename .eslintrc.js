module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jest": true,
  },
  "extends": [
    "eslint:recommended", 
    "plugin:react/recommended", 
    "standard"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
    "ecmaVersion": 6,
    "sourceType": "module",
  },
  "plugins": ["react"],
  "rules": {
    "quotes": ["error"],
    "semi": ["error", "always"],
  },
};
