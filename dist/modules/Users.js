"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
;
class Users {
    _userList = [];
    add(user) {
        this._userList.push(user);
    }
    ;
    remove(id) {
        const index = this._userList.findIndex(item => item.id === id);
        if (index === -1)
            return false;
        this._userList.splice(index, 1);
        return true;
    }
    ;
    get(id) {
        return this._userList.find(item => item.id === id) ?? null;
    }
}
exports.Users = Users;
;
