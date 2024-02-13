"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const validate_authorization_1 = require("../../middlewares/validate-authorization");
const user_controller_1 = __importDefault(require("./user-controller"));
const koa_router_1 = __importDefault(require("koa-router"));
exports.userRouter = new koa_router_1.default();
exports.userRouter.post("/sign-in", validate_authorization_1.validateAuthorization, user_controller_1.default.signIn);
exports.userRouter.post("/sign-up", user_controller_1.default.signUp);
exports.userRouter.get("/", user_controller_1.default.signUp);
