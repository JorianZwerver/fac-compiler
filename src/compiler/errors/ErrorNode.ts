import { ErrorType } from "./ErrorType";

export class ErrorNode {
    type: ErrorType;
    msg: String;

    constructor(type: ErrorType, msg: String) {
        this.type = type;
        this.msg = msg;
    }

    toString() {
        return `${new Date().toLocaleString('en-GB')} [${ErrorType[this.type]} ERROR] ${this.msg}`;
    }

}