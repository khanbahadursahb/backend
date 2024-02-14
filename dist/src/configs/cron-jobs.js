"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeCronJobs = void 0;
var cron = require("node-cron");
var crons;
(function (crons) {
    crons.sampleCronJob = () => {
        console.log("cron jobran");
    };
})(crons || (crons = {}));
const initializeCronJobs = () => {
    // cron.schedule("0 0 * * *", async function () {
    //   console.log("Cron job added");
    // });
    // Run every minute
    cron.schedule("* * * * *", function () {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Cron job added");
        });
    });
};
exports.initializeCronJobs = initializeCronJobs;
exports.default = crons;
