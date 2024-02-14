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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeSocket = void 0;
const socket_io_1 = require("socket.io");
const environment_1 = __importDefault(require("../constants/environment"));
let io = new socket_io_1.Server();
const initializeSocket = (server) => {
    io = new socket_io_1.Server(server, {
        cors: {
            origin: environment_1.default.WHITE_LIST,
            methods: ["GET", "POST"],
        },
    });
    channel();
};
exports.initializeSocket = initializeSocket;
const channel = () => __awaiter(void 0, void 0, void 0, function* () {
    io.on("connection", (socket) => __awaiter(void 0, void 0, void 0, function* () {
        // Listen here
        // socket.on("event", callback);
        runArraysSocket();
    }));
});
const generateRandomNumber = () => {
    return ("AIx" +
        Math.floor(Math.random() * 100000)
            .toString()
            .padStart(5, "0"));
};
let mainArray = [];
let secondaryArray = [];
const runArraysSocket = () => {
    // Run the timeout every 100ms and send the blocks data to user
    const tick = () => {
        if (mainArray.length < 100) {
            mainArray.push(generateRandomNumber());
        }
        else {
            if (secondaryArray.length < 10) {
                secondaryArray = Array.from({ length: 10 }, () => []);
            }
            secondaryArray[0] = [...secondaryArray[0], generateRandomNumber()];
            secondaryArray[1] = [...secondaryArray[1], generateRandomNumber()];
            secondaryArray[2] = [...secondaryArray[2], generateRandomNumber()];
            secondaryArray[3] = [...secondaryArray[3], generateRandomNumber()];
            secondaryArray[4] = [...secondaryArray[4], generateRandomNumber()];
            secondaryArray[5] = [...secondaryArray[5], generateRandomNumber()];
            secondaryArray[6] = [...secondaryArray[6], generateRandomNumber()];
            secondaryArray[7] = [...secondaryArray[7], generateRandomNumber()];
            secondaryArray[8] = [...secondaryArray[8], generateRandomNumber()];
            secondaryArray[9] = [...secondaryArray[9], generateRandomNumber()];
            // for (let i in secondaryArray) {
            //   const index = Number(i);
            //   secondaryArray[index] = [...secondaryArray[index], generateRandomNumber()];
            // }
            if (secondaryArray[secondaryArray.length - 1].length === 100) {
                mainArray = [];
                secondaryArray = [];
                return;
            }
        }
        io.emit("data", { main: mainArray, sub: secondaryArray });
    };
    setInterval(tick, 2000);
};
exports.default = io;
