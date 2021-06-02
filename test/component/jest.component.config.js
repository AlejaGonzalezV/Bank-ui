module.exports = {
    setupFilesAfterEnv: ["./setupTests.js"],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "../../node_modules/babel-jest",
    },
    moduleNameMapper: {
        "\\.(css|less|scss|sass|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "identity-obj-proxy"
    },
    //testEnvironment: "jsdom"
};
