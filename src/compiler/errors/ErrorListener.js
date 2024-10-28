"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorListener = void 0;
const ErrorNode_1 = require("./ErrorNode");
const ErrorType_1 = require("./ErrorType");
class ErrorListener {
    errors;
    constructor() {
        this.errors = [];
    }
    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
        this.errors.push(new ErrorNode_1.ErrorNode(ErrorType_1.ErrorType.PARSE, `Line ${line}:${charPositionInLine} - ${msg}`));
    }
    hasErrors() {
        return (this.errors.length > 0);
    }
    getErrors() {
        return this.errors;
    }
}
exports.ErrorListener = ErrorListener;
//# sourceMappingURL=ErrorListener.js.map