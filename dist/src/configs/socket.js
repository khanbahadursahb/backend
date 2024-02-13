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
    }));
});
exports.default = io;
