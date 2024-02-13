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
const logger_1 = __importDefault(require("../../../logger"));
var UserController;
(function (UserController) {
    UserController.signUp = (ctx) => __awaiter(this, void 0, void 0, function* () {
        try {
            // let body = ctx.request.body;
            // const secretKey = process.env.SECRET_KEY!;
            // const decryptedBytes = crypto.AES.decrypt(body, secretKey);
            // const decryptedWalletAddress = decryptedBytes.toString(crypto.enc.Utf8);
            // const token = jwt.sign(
            //   { id: "uid_here" },
            //   JSON.stringify(SHA256(process.env.ADMIN_TOKEN!).words),
            //   { expiresIn: "1d" }
            // );
            ctx.body = {
                response: "success",
                data: {},
            };
        }
        catch (error) {
            logger_1.default.error(JSON.stringify(error));
            ctx.status = 500;
            ctx.body = {
                response: "failure",
                error: error,
            };
        }
    });
    UserController.signIn = (ctx) => __awaiter(this, void 0, void 0, function* () {
        try {
            ctx.body = {
                response: "success",
                data: {},
            };
        }
        catch (error) {
            logger_1.default.error({ error, inputs: ctx.request.body });
            ctx.status = 500;
            ctx.body = {
                response: "failure",
                error: error,
            };
        }
    });
})(UserController || (UserController = {}));
exports.default = UserController;
