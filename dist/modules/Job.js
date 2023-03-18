"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Job = void 0;
class Job {
    role;
    _salary;
    constructor(role, salary) {
        this.role = role;
        this._salary = salary;
    }
    work(personName) {
        console.log(`${personName} сейчас работает как ${this.role}`);
    }
    get salary() {
        return this._salary;
    }
}
exports.Job = Job;
