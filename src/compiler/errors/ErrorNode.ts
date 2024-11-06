// Imports
import { ErrorType } from "./ErrorType";

/**
 * Class for ErrorNode(s). Specifies formatting for printing errors and stores
 * its type and error message.
 */
export class ErrorNode {
    // Error type
    type: ErrorType;
    // Error message
    msg: String;

    // Constructor to set the error type and message of a
    // ErrorNode.
    constructor(type: ErrorType, msg: String) {
        this.type = type;
        this.msg = msg;
    }

    /**
     * Specifies how to format an ErrorNode into a pretty string.
     * @returns pretty error string.
     */
    toString() {
        return `${new Date().toLocaleString('en-GB')} [${ErrorType[this.type]} ERROR] ${this.msg}`;
    }

}