// Imports
import { Recognizer,  RecognitionException, ANTLRErrorListener, ParserRuleContext } from "antlr4ts";
import { ErrorNode } from "./ErrorNode";
import { ErrorType } from "./ErrorType";

/**
 * ErrorListener class for getting all errors from the Lexer and Parser.
 * Stores all errors as ErrorNodes, which can be printed to the output channel.
 * @implements ANTLRErrorListener
 */
export class ErrorListener implements ANTLRErrorListener<any> {

    // Stores all errors.
    errors: ErrorNode[];

    // Constructor, intializes the error storage.
    constructor() {
        this.errors = [];
    }

    // Overwrite of ANTLRErrorListener. See ANTLR documentation for information
    // on this function.
    syntaxError(
        recognizer: Recognizer<any, any>, 
        offendingSymbol: any | undefined, 
        line: number, 
        charPositionInLine: number, 
        msg: string, 
        e: RecognitionException | undefined
    ) {
        // Adds PARSE error to error list
        this.errors.push(
            new ErrorNode(
                ErrorType.PARSE,
                `Line ${line}:${charPositionInLine} - ${msg}`
            )
        );
    }

    /**
     * Function to check if the ErrorListener has found errors.
     * @returns stores boolean true if errors are present, otherwise false
     */
    hasErrors() {
        return (this.errors.length > 0);
    }

    /**
     * Getter for the error list.
     * @returns the stored errors.
     */
    getErrors() {
        return this.errors;
    }

    /**
     * Adds error to the ErrorListener.
     * @param ctx ParseTree node for line and char position information.
     * @param msg error message.
     */
    addError(ctx: ParserRuleContext, msg: string) {
        this.errors.push(
            new ErrorNode(
                ErrorType.PARSE,
                `Line ${ctx._start.line}:${ctx._start.charPositionInLine} - ${msg}`
            )
        );
    }

}