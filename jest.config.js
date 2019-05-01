module.exports = {
    verbose: true,
    "setupFilesAfterEnv": [
        "<rootDir>/setup.enzyme.js"
    ],
    "moduleNameMapper":{
        "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
        "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js"
   }
};