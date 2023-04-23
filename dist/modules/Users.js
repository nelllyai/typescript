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
    ;
    sorted(type = 'up') {
        return [...this._userList].sort((user1, user2) => type === 'up' ? user1.id - user2.id : user2.id - user1.id);
    }
    ;
}
exports.Users = Users;
;
