"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const User_1 = require("../models/User");
const Database_1 = require("../database/Database");
class UserService {
    createUser(name, email, username, password) {
        if (Database_1.db.users.some(u => u.username === username)) {
            throw new Error("Username já existe.");
        }
        const user = new User_1.User(name, email, username, password);
        Database_1.db.addUser(user);
        return user;
    }
    getUserByUsername(username) {
        return Database_1.db.users.find(user => user.username === username);
    }
}
exports.UserService = UserService;
