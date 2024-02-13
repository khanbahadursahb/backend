"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_js_1 = require("crypto-js");
var CommonUtils;
(function (CommonUtils) {
    CommonUtils.generateHashPass = (password) => {
        return JSON.stringify((0, crypto_js_1.SHA256)(password).words);
    };
    CommonUtils.objectToParams = (obj) => {
        let str = "";
        for (const key in obj) {
            if (obj[key] !== undefined && obj[key] !== null) {
                if (str !== "") {
                    str += "&";
                }
                str += key + "=" + encodeURIComponent(obj[key]);
            }
        }
        return str;
    };
    CommonUtils.getOrdinal = (number) => {
        if (number === 0) {
            return "0th"; // Handle 0 separately
        }
        const lastDigit = number % 10;
        const lastTwoDigits = number % 100;
        if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
            return number + "th"; // Special case for 11th, 12th, and 13th
        }
        switch (lastDigit) {
            case 1:
                return number + "st";
            case 2:
                return number + "nd";
            case 3:
                return number + "rd";
            default:
                return number + "th";
        }
    };
})(CommonUtils || (CommonUtils = {}));
exports.default = CommonUtils;
