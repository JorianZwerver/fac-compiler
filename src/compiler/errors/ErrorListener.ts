import { Recognizer,  RecognitionException, ANTLRErrorListener, ParserRuleContext } from "antlr4ts";
import { ErrorNode } from "./ErrorNode";
import { ErrorType } from "./ErrorType";

export class ErrorListener implements ANTLRErrorListener<any> {

    errors: ErrorNode[];

    constructor() {
        this.errors = [];
    }

    syntaxError(
        recognizer: Recognizer<any, any>, 
        offendingSymbol: any | undefined, 
        line: number, 
        charPositionInLine: number, 
        msg: string, 
        e: RecognitionException | undefined
    ) {
        this.errors.push(
            new ErrorNode(
                ErrorType.PARSE,
                `Line ${line}:${charPositionInLine} - ${msg}`
            )
        );
    }

    hasErrors() {
        return (this.errors.length > 0);
    }

    getErrors() {
        return this.errors;
    }

    addError(ctx: ParserRuleContext, msg: string) {
        this.errors.push(
            new ErrorNode(
                ErrorType.PARSE,
                `Line ${ctx._start.line}:${ctx._start.charPositionInLine} - ${msg}`
            )
        );
    }

}