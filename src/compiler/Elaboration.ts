import * as vscode from 'vscode';
import { ErrorListener } from './errors/ErrorListener';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { facLexer } from '../grammar/facLexer';
import { facParser } from '../grammar/facParser';
import { facVisitor } from '../grammar/facVisitor';
import { 
    FileContext, 
    DeclerationContext, 
    DeclerationsContext, 
    DefineContext, 
    InstructionsContext, 
    InstructionContext, 
    LwContext, 
    SwContext, 
    AddContext, 
    AddiContext, 
    OrContext, 
    XorContext, 
    MultContext,
    ShrContext,
    ShlContext,
    JumpContext,
    AndContext,
    BeqContext,
    BneqContext,
    NopContext,
    NotContext,
    DbgContext,
    LabelContext,
    ReferenceContext,
    InputContext,
    RegisterContext,
    StringContext,
    NumberContext
} from '../grammar/facParser';

import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'; 
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import exp from 'constants';

export class Elaboration extends AbstractParseTreeVisitor<any> implements facVisitor<any> {

    output:         vscode.OutputChannel;
    errorHandler:   ErrorListener;
    defineTable!:   Map<string, string>;

    usedLabels!:    string[];
    pendLabels!:    string[];

    labelTable:     Map<string, number> = new Map<string, number>();
    labelCounter:   number = 0;

    constructor(
        output:         vscode.OutputChannel, 
        errorHandler:   ErrorListener
    ) {
        super();
        this.output =       output;
        this.errorHandler = errorHandler;
    }

    elaborate(content: string) {

        // Lexing
        const lexer = new facLexer(
            CharStreams.fromString(content)
        );
        lexer.addErrorListener(this.errorHandler);

        // Parsing
        const parser = new facParser(
            new CommonTokenStream(lexer)
        );
        parser.addErrorListener(this.errorHandler);

        this.defineTable = new Map<string, string>;

        this.labelTable = new Map<string, number>;
        this.labelCounter = 0;

        this.usedLabels = [];
        this.pendLabels = [];

        const tree = parser.file();
        this.visit(tree);
    }

    get labels(): Map<string, number> {
        return this.labelTable;
    }

    checkLabel(label: string): boolean {
        if(this.usedLabels.includes(label)) {
            return false;
        } else {
            if(this.pendLabels.includes(label)) {
                this.usedLabels.push(label);
                return true;
            } else {
                this.pendLabels.push(label);
                return true;
            }
        }
    }

    checkReg(reg: string): boolean {
        const registers = [
            "$zero",
            "$v0",
            "$v1",
            "$a0",
            "$a1",
            "$a2",
            "$a3",
            "$t0",
            "$t1",
            "$t2",
            "$t3",
            "$t4",
            "$t5",
            "$t6",
            "$t7",
            "$t8",
            "$t9",
            "$t10",
            "$t11",
            "$s0",
            "$s1",
            "$s2",
            "$s3",
            "$s4",
            "$s5",
            "$s6",
            "$s7",
            "$s8",
            "$s9",
            "$s10",
            "$s11",
            "$ra"
        ];

        for(var register of registers) {
            if(register === reg) {
                return true;
            }
        }

        return false;
    }

    checkArgument(ctx: any, input: InputType, expected: InputType): boolean {
        if(input !== expected) {
            this.errorHandler.addError(
                ctx, `Expected argument of type ${input} but got ${expected}.`
            );
        }
        return false;
    }

    defaultResult() {
        return "";
    }

    /**
	 * Visit a parse tree produced by `facParser.file`.
	 * @param ctx the parse tree
	 * @return the visitor any
	 */
	visitFile(ctx: FileContext): any {
        super.visitChildren(ctx);

        for(var label of this.pendLabels) {
            if(!this.usedLabels.includes(label)) {
                this.errorHandler.addError(
                    ctx, "Label \"" + label + "\" unused."
                );
            }
        }
    }

	/**
	 * Visit a parse tree produced by `facParser.declerations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclerations(ctx: DeclerationsContext): any {
        super.visitChildren(ctx);
    }

	/**
	 * Visit a parse tree produced by `facParser.decleration`.
	 * @param ctx the parse tree
	 * @return the visitor any
	 */
	visitDecleration(ctx: DeclerationContext): any {
        super.visitChildren(ctx);
    }

	/**
	 * Visit a parse tree produced by `facParser.define`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefine(ctx: DefineContext): any {
        if(ctx.REG() !== null && ctx.REG() !== undefined) {
            const reg = ctx.REG() as TerminalNode;

            if(!this.checkReg(reg.text)) {
                this.errorHandler.addError(
                    ctx, "Use of nonexisting register."
                );
            } else {
                if(ctx.STRING() !== undefined && ctx.STRING() !== null) {
                    const string = ctx.STRING() as TerminalNode;
                    this.defineTable.set(string.text, reg.text);
                } else {
                    this.errorHandler.addError(
                        ctx, "Undefined string."
                    );
                }
            }

        } else {
            if(ctx.NUMBER() !== null && ctx.NUMBER() !== undefined) {
                if(ctx.STRING() !== undefined && ctx.STRING() !== null) {
                    const string = ctx.STRING() as TerminalNode;
                    const num = ctx.NUMBER() as TerminalNode;
                    this.defineTable.set(string.text, num.text);
                } else {
                    this.errorHandler.addError(
                        ctx, "Undefined string."
                    );
                }
            }
        }
    }

	/**
	 * Visit a parse tree produced by `facParser.instructions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstructions(ctx: InstructionsContext): any {
        super.visitChildren(ctx);
    }

	/**
	 * Visit a parse tree produced by `facParser.instruction`.
	 * @param ctx the parse tree
	 * @return the visitor any
	 */
	visitInstruction(ctx: InstructionContext): any {
        this.labelCounter++;
        super.visitChildren(ctx);
    }

	/**
	 * Visit a parse tree produced by `facParser.lw`.
	 * @param ctx the parse tree
	 * @return the visitor any
	 */
	visitLw(ctx: LwContext): any {
        this.checkArgument(
            ctx,
            super.visit(ctx.input(0)),
            InputType.REG
        );
        this.checkArgument(
            ctx,
            super.visit(ctx.input(1)),
            InputType.REG
        );
    }

	/**
	 * Visit a parse tree produced by `facParser.sw`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSw(ctx: SwContext): any {
        this.checkArgument(
            ctx,
            super.visit(ctx.input(0)),
            InputType.REG
        );
        this.checkArgument(
            ctx,
            super.visit(ctx.input(1)),
            InputType.REG
        );
    }

	/**
	 * Visit a parse tree produced by `facParser.mult`.
	 * @param ctx the parse tree
	 * @return the visitor any
	 */
	visitMult(ctx: MultContext): any {
        this.checkArgument(
            ctx,
            super.visit(ctx.input(0)),
            InputType.REG
        );
        this.checkArgument(
            ctx,
            super.visit(ctx.input(1)),
            InputType.REG
        );
        this.checkArgument(
            ctx,
            super.visit(ctx.input(2)),
            InputType.REG
        );
    }

	/**
	 * Visit a parse tree produced by `facParser.add`.
	 * @param ctx the parse tree
	 * @return the visitor any
	 */
	visitAdd(ctx: AddContext): any {
        this.checkArgument(
            ctx,
            super.visit(ctx.input(0)),
            InputType.REG
        );
        this.checkArgument(
            ctx,
            super.visit(ctx.input(1)),
            InputType.REG
        );
        this.checkArgument(
            ctx,
            super.visit(ctx.input(2)),
            InputType.REG
        );
    }

	/**
	 * Visit a parse tree produced by `facParser.addi`.
	 * @param ctx the parse tree
	 * @return the visitor any
	 */
	visitAddi(ctx: AddiContext): any {
        this.checkArgument(
            ctx,
            super.visit(ctx.input(0)),
            InputType.REG
        );
        this.checkArgument(
            ctx,
            super.visit(ctx.input(1)),
            InputType.REG
        );
        this.checkArgument(
            ctx,
            super.visit(ctx.input(2)),
            InputType.NUM
        );
    }

	/**
	 * Visit a parse tree produced by `facParser.shr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShr(ctx: ShrContext): any {
        this.checkArgument(
            ctx,
            super.visit(ctx.input(0)),
            InputType.REG
        );
        this.checkArgument(
            ctx,
            super.visit(ctx.input(1)),
            InputType.REG
        );
        this.checkArgument(
            ctx,
            super.visit(ctx.input(2)),
            InputType.NUM
        );
    }

	/**
	 * Visit a parse tree produced by `facParser.shl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShl(ctx: ShlContext): any {
        this.checkArgument(
            ctx,
            super.visit(ctx.input(0)),
            InputType.REG
        );
        this.checkArgument(
            ctx,
            super.visit(ctx.input(1)),
            InputType.REG
        );
        this.checkArgument(
            ctx,
            super.visit(ctx.input(2)),
            InputType.NUM
        );
    }

	/**
	 * Visit a parse tree produced by `facParser.jump`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJump(ctx: JumpContext): any {
        super.visitChildren(ctx);
    }

	/**
	 * Visit a parse tree produced by `facParser.beq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBeq(ctx: BeqContext): any {
        this.checkArgument(
            ctx,
            super.visit(ctx.input(0)),
            InputType.REG
        );
        this.checkArgument(
            ctx,
            super.visit(ctx.input(1)),
            InputType.REG
        );
    }

	/**
	 * Visit a parse tree produced by `facParser.bneq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBneq(ctx: BneqContext): any {
        this.checkArgument(
            ctx,
            super.visit(ctx.input(0)),
            InputType.REG
        );
        this.checkArgument(
            ctx,
            super.visit(ctx.input(1)),
            InputType.REG
        );
    }

	/**
	 * Visit a parse tree produced by `facParser.or`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOr(ctx: OrContext): any {
        this.checkArgument(
            ctx,
            super.visit(ctx.input(0)),
            InputType.REG
        );
        this.checkArgument(
            ctx,
            super.visit(ctx.input(1)),
            InputType.REG
        );
        this.checkArgument(
            ctx,
            super.visit(ctx.input(2)),
            InputType.REG
        );
    }

	/**
	 * Visit a parse tree produced by `facParser.and`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnd(ctx: AndContext): any {
        this.checkArgument(
            ctx,
            super.visit(ctx.input(0)),
            InputType.REG
        );
        this.checkArgument(
            ctx,
            super.visit(ctx.input(1)),
            InputType.REG
        );
        this.checkArgument(
            ctx,
            super.visit(ctx.input(2)),
            InputType.REG
        );
    }

	/**
	 * Visit a parse tree produced by `facParser.xor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXor(ctx: XorContext): any {
        this.checkArgument(
            ctx,
            super.visit(ctx.input(0)),
            InputType.REG
        );
        this.checkArgument(
            ctx,
            super.visit(ctx.input(1)),
            InputType.REG
        );
        this.checkArgument(
            ctx,
            super.visit(ctx.input(2)),
            InputType.REG
        );
    }

	/**
	 * Visit a parse tree produced by `facParser.not`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNot(ctx: NotContext): any {
        this.checkArgument(
            ctx,
            super.visit(ctx.input(0)),
            InputType.REG
        );
        this.checkArgument(
            ctx,
            super.visit(ctx.input(1)),
            InputType.REG
        );
    }

	/**
	 * Visit a parse tree produced by `facParser.nop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNop(ctx: NopContext): any {
        super.visitChildren(ctx);
    }

	/**
	 * Visit a parse tree produced by `facParser.deb`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDbg(ctx: DbgContext): any {
        super.visitChildren(ctx);
    }

	/**
	 * Visit a parse tree produced by `facParser.label`.
	 * @param ctx the parse tree
	 * @return the visitor any
	 */
	visitLabel(ctx: LabelContext): any {
        const letters = ctx.LETTERS();
        if(!(letters === null)) {
            if(!this.checkLabel(letters.text)) {
                this.errorHandler.addError(
                    ctx, "Wrong use of label \"" + letters.text + "\"."
                );
            } else {
                this.labelTable.set(letters.text, this.labelCounter);
                this.labelCounter--;
            }
        }
    }

    /**
	 * Visit a parse tree produced by `facParser.reference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReference(ctx: ReferenceContext): any {
        const letters = ctx.LETTERS();
        if(!(letters === null)) {
            if(!this.checkLabel(letters.text)) {
                this.errorHandler.addError(
                    ctx, "Wrong use of label \"" + letters.text + "\"."
                );
            }
        }
    }

    /**
	 * Visit a parse tree produced by `facParser.input`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInput(ctx: InputContext): any {
        return super.visitChildren(ctx);
    }

    /**
	 * Visit a parse tree produced by `facParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber(ctx: NumberContext): any {
        return InputType.NUM;
    }

	/**
	 * Visit a parse tree produced by `facParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString(ctx: StringContext): any {
        if(!this.defineTable.has(ctx.STRING().text)) {
            this.errorHandler.addError(
                ctx, `The string \"${ctx.STRING().text}\" is unkown to me.`
            );
            return InputType.STRING;
        } else {
            const value = this.defineTable.get(ctx.STRING().text) as string;
            if(this.checkReg(value)) {
                return InputType.REG;
            } else {
                return InputType.NUM;
            }
        }
        
    }

	/**
	 * Visit a parse tree produced by `facParser.register`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegister(ctx: RegisterContext): any {
        if(!this.checkReg(ctx.REG().text)) {
            this.errorHandler.addError(
                ctx, `Use of nonexisting register \"${ctx.REG().text}\".`
            );
        }
        return InputType.REG;
    }

}

enum InputType {
    REG,
    STRING,
    NUM
}