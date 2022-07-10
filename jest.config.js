/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  "testEnvironment": "jsdom",
  "moduleFileExtensions": [
    "js",
    "json",
    "vue"
  ],
  "transform": {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "@vue/vue3-jest"
  }
};