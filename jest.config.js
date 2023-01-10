module.exports = {
  testPathIgnorePatterns: ["/node_modules/","/.next"], //quais pastas quero ignorar nos testes
  setupFilesAfterEnv:[ //arrays de arquivos que eu quero que o jest execute antes de executar os testes
    "<rootDir>/src/tests/setupTests.ts"
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
  },
  moduleNameMapper:{
    "\\.(scss|css|sass)$": "identity-obj-proxy"
  },
  collectCoverage:true,
  collectCoverageFrom:[
    "src/**/*.tsx",
    "src/**/*.spec.tsx",
    "!src/**/_app.tsx",
    "!src/**/_document.tsx", 
  ],
  coverageReporters:["lcov","json"],
  testEnvironment: "jsdom" // indica em que ambiente nossos testes estão executando
};