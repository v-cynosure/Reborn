"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const init = (path) => {
    mongoose.connect(path).then(() => {
        console.log(`Connected to database: ${path}`);
    }, error => {
        console.log(`Unable to connect to database: ${path}`);
    });
};
exports.default = init;
