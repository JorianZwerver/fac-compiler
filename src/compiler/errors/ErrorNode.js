"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorNode = void 0;
class ErrorNode {
    type;
    msg;
    constructor(type, msg) {
        this.type = type;
        this.msg = msg;
    }
    toString() {
        return "[" + this.type.toString() + "] " + this.msg;
    }
}
exports.ErrorNode = ErrorNode;
//# sourceMappingURL=ErrorNode.js.map