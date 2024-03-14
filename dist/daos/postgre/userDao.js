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
const userModel_1 = require("./models/userModel");
const utils_ts_1 = require("./src/utils.ts");
class UserDao {
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { usernames, password } = user;
                const existUser = yield userModel_1.UserModel.findOne({ usernames });
                if (!existUser) {
                    if (usernames === process.env.adminID && password === process.env.adminPass) {
                        return yield userModel_1.UserModel.create({
                            id: user.id,
                            usernames: user.usernames,
                            passwords: user.passwords,
                            gold: user.gold,
                            preferred_attraction_type_id: user.preferred_attraction,
                            is_admin: user.is_admin,
                            hashPass: (0, utils_ts_1.createHash)(password),
                        });
                    }
                    return yield userModel_1.UserModel.create({
                        id: user.id,
                        usernames: user.usernames,
                        passwords: user.passwords,
                        gold: user.gold,
                        preferred_attraction_type_id: user.preferred_attraction,
                        is_admin: user.is_admin,
                        hashPass: (0, utils_ts_1.createHash)(password),
                    });
                }
            }
            catch (error) {
                console.log(error);
                throw new Error();
            }
        });
    }
    loginUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { usernames, password } = user;
                const userExist = yield userModel_1.UserModel.findOne({ usernames });
                console.log(userExist);
                if (!userExist) {
                    const passValid = isValidPassword(userExist, password);
                    if (!passValid)
                        return false;
                    else
                        return userExist;
                }
                return false;
            }
            catch (error) {
                console.log(error);
                throw new Error();
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userExists = yield userModel_1.UserModel.findById(id);
                if (userExists) {
                    return userExists;
                }
                else
                    return false;
            }
            catch (error) {
                console.log(error);
                throw new Error();
            }
        });
    }
    getByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userExists = yield userModel_1.UserModel.findOne(username);
                if (userExists) {
                    return userExists;
                }
                else
                    return false;
            }
            catch (error) {
                console.log(error);
                throw new Error();
            }
        });
    }
}
exports.default = UserDao;
