// Imports
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

/**
 * Class for elaboration stage of the .fac compiler. Checks if all the syntax of the file 
 * is correct.
 * @extends AbstractParseTreeVisitor<any>
 * @implements facVisitor<any>
 */
export class Elaboration extends AbstractParseTreeVisitor<any> implements facVisitor<any> {

    // Output channel for messages
    output:         vscode.OutputChannel;
    // ErrorHandler
    errorHandler:   ErrorListener;
    // Table with all definitions
    defineTable!:   Map<string, string>;
    // List with all used labels
    usedLabels!:    string[];
    // List with all used references
    usedReferences!:string[];
    // Table with all labels and their location. Is given to generation fase.
    labelTable:     Map<string, number> = new Map<string, number>();
    // Counter
    labelCounter:   number = 0;

    // Constructs elaborator
    constructor(
        output:         vscode.OutputChannel, 
        errorHandler:   ErrorListener
    ) {
        super();
        this.output =       output;
        this.errorHandler = errorHandler;
    }

    /**
     * Elaborates the input string (checks syntax).
     * @param content the file to be elaborated, formatted as string 
     */
    elaborate(content: string) {

        // Lexing
        const lexer = new facLexer(
            CharStreams.fromString(content)
        );
        // Attach ErrorListener
        lexer.addErrorListener(this.errorHandler);

        // Parsing
        const parser = new facParser(
            new CommonTokenStream(lexer)
        );
        // Attach ErrorListener
        parser.addErrorListener(this.errorHandler);

        // Initialize constants, maps and lists
        this.defineTable = new Map<string, string>;
        this.labelTable = new Map<string, number>;
        this.labelCounter = 0;
        this.usedLabels = [];
        this.usedReferences = [];

        // Walk the ParseTree
        const tree = parser.file();
        this.visit(tree);
    }

    get labels(): Map<string, number> {
        return this.labelTable;
    }

    /**
     * Checks if the label is already used. If not, it
     * adds it to the list.
     * @param label name of label (or reference) as string
     * @param isLabel if true, value is label, otherwise reference
     * @returns if the label is already used as boolean
     */
    checkLabel(label: string, isLabel: boolean): boolean {

        if(isLabel) {
            if(this.usedLabels.includes(label)) {
                return false;
            } else {
                this.usedLabels.push(label);
                return true;
            }
        } else {
            this.usedReferences.push(label);
            return true;
        }

    }

    /**
     * Checks if the inputted register name is a valid register.
     * @param reg name of register
     * @returns if the register is a valid register
     */
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

    /**
     * Checks if the actual InputType is the same as the expected InputType.
     * @param ctx ParseTree node
     * @param input the InputType of the actual input
     * @param expected the expected InputType
     * @param expected2 if two types are allowed, this is a additional expected InputType
     */
    checkArgument(ctx: any, input: InputType, expected: InputType, expected2?: InputType) {
        if(expected2 !== undefined) {
            if(input !== expected && input !== expected2) {
                this.errorHandler.addError(
                    ctx, `Expected argument of type ${expected} but got ${input}.`
                );
            }
        } else {
            if(input !== expected) {
                this.errorHandler.addError(
                    ctx, `Expected argument of type ${expected} but got ${input}.`
                );
            }
        }
    }

    /**
     * Checks if the same register is used for both operands of an instruction.
     * @param ctx ParseTree node
     * @param reg1 first register ParseTree node
     * @param reg2 second register ParseTree node
     */
    checkIfEqual(ctx: any, reg1: InputContext, reg2: InputContext) {
        if(reg1.text === reg2.text) {
            this.errorHandler.addError(
                ctx, `Cannot use the same register for both arguments of the function.`
            );
        }
    }

    // Required, not used
    defaultResult() {
        return "";
    }

    /**
	 * Visit a parse tree produced by `facParser.file`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile(ctx: FileContext): any {
        super.visitChildren(ctx);

        // Checks if each reference has an accompying label. If not,
        // generates an error.
        for(var ref of this.usedReferences) {
            if(!this.usedLabels.includes(ref)) {
                this.errorHandler.addError(
                    ctx, "Reference \"" + ref + "\" has no label to jump to."
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
	 * @return the visitor result
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
	 * @return the visitor result
	 */
	visitInstruction(ctx: InstructionContext): any {
        this.labelCounter++;
        super.visitChildren(ctx);
    }

	/**
	 * Visit a parse tree produced by `facParser.lw`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLw(ctx: LwContext): any {
        let args = 3;
        if(ctx.input().length !== args) {
            this.errorHandler.addError(
                ctx, `Only applied ${ctx.input().length} arguments, required ${args}.`
            );
        } else {
            this.checkArgument(
                ctx,
                super.visit(ctx.input(0)),
                InputType.REG
            );
            this.checkArgument(
                ctx,
                super.visit(ctx.input(1)),
                InputType.NUM,
                InputType.STRING
            );
            this.checkArgument(
                ctx,
                super.visit(ctx.input(2)),
                InputType.REG
            );
        }
    }

	/**
	 * Visit a parse tree produced by `facParser.sw`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSw(ctx: SwContext): any {
        let args = 3;
        if(ctx.input().length !== args) {
            this.errorHandler.addError(
                ctx, `Only applied ${ctx.input().length} arguments, required ${args}.`
            );
        } else {
            this.checkArgument(
                ctx,
                super.visit(ctx.input(0)),
                InputType.REG
            );
            this.checkArgument(
                ctx,
                super.visit(ctx.input(1)),
                InputType.NUM,
                InputType.STRING
            );
            this.checkArgument(
                ctx,
                super.visit(ctx.input(2)),
                InputType.REG
            );
        }
    }

	/**
	 * Visit a parse tree produced by `facParser.mult`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMult(ctx: MultContext): any {
        let args = 3;
        if(ctx.input().length !== args) {
            this.errorHandler.addError(
                ctx, `Only applied ${ctx.input().length} arguments, required ${args}.`
            );
        } else {
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
            this.checkIfEqual(
                ctx,
                ctx.input(1),
                ctx.input(2)
            );
        }
    }

	/**
	 * Visit a parse tree produced by `facParser.add`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdd(ctx: AddContext): any {
        let args = 3;
        if(ctx.input().length !== args) {
            this.errorHandler.addError(
                ctx, `Only applied ${ctx.input().length} arguments, required ${args}.`
            );
        } else {
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
            this.checkIfEqual(
                ctx,
                ctx.input(1),
                ctx.input(2)
            );
        }
    }

	/**
	 * Visit a parse tree produced by `facParser.addi`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddi(ctx: AddiContext): any {
        let args = 3;
        if(ctx.input().length !== args) {
            this.errorHandler.addError(
                ctx, `Only applied ${ctx.input().length} arguments, required ${args}.`
            );
        } else {
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
            this.checkIfEqual(
                ctx,
                ctx.input(1),
                ctx.input(2)
            );
        }
    }

	/**
	 * Visit a parse tree produced by `facParser.shr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShr(ctx: ShrContext): any {
        let args = 3;
        if(ctx.input().length !== args) {
            this.errorHandler.addError(
                ctx, `Only applied ${ctx.input().length} arguments, required ${args}.`
            );
        } else {
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
    }

	/**
	 * Visit a parse tree produced by `facParser.shl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShl(ctx: ShlContext): any {
        let args = 3;
        if(ctx.input().length !== args) {
            this.errorHandler.addError(
                ctx, `Only applied ${ctx.input().length} arguments, required ${args}.`
            );
        } else {
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
    }

	/**
	 * Visit a parse tree produced by `facParser.jump`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJump(ctx: JumpContext): any {
        super.visit(ctx.reference());
    }

	/**
	 * Visit a parse tree produced by `facParser.beq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBeq(ctx: BeqContext): any {
        let args = 2;
        if(ctx.input().length !== args) {
            this.errorHandler.addError(
                ctx, `Only applied ${ctx.input().length} arguments, required ${args}.`
            );
        } else {
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
        super.visit(ctx.reference());
    }

	/**
	 * Visit a parse tree produced by `facParser.bneq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBneq(ctx: BneqContext): any {
        let args = 2;
        if(ctx.input().length !== args) {
            this.errorHandler.addError(
                ctx, `Only applied ${ctx.input().length} arguments, required ${args}.`
            );
        } else {
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
        super.visit(ctx.reference());
    }

	/**
	 * Visit a parse tree produced by `facParser.or`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOr(ctx: OrContext): any {
        let args = 3;
        if(ctx.input().length !== args) {
            this.errorHandler.addError(
                ctx, `Only applied ${ctx.input().length} arguments, required ${args}.`
            );
        } else {
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
            this.checkIfEqual(
                ctx,
                ctx.input(1),
                ctx.input(2)
            );
        }
    }

	/**
	 * Visit a parse tree produced by `facParser.and`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnd(ctx: AndContext): any {
        let args = 3;
        if(ctx.input().length !== args) {
            this.errorHandler.addError(
                ctx, `Only applied ${ctx.input().length} arguments, required ${args}.`
            );
        } else {
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
            this.checkIfEqual(
                ctx,
                ctx.input(1),
                ctx.input(2)
            );
        }
    }

	/**
	 * Visit a parse tree produced by `facParser.xor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXor(ctx: XorContext): any {
        let args = 3;
        if(ctx.input().length !== args) {
            this.errorHandler.addError(
                ctx, `Only applied ${ctx.input().length} arguments, required ${args}.`
            );
        } else {
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
            this.checkIfEqual(
                ctx,
                ctx.input(1),
                ctx.input(2)
            );
        }
    }

	/**
	 * Visit a parse tree produced by `facParser.not`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNot(ctx: NotContext): any {
        let args = 2;
        if(ctx.input().length !== args) {
            this.errorHandler.addError(
                ctx, `Only applied ${ctx.input().length} arguments, required ${args}.`
            );
        } else {
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
	 * @return the visitor result
	 */
	visitLabel(ctx: LabelContext): any {
        const letters = ctx.LETTERS();
        if(!(letters === null)) {
            if(!this.checkLabel(letters.text, true)) {
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
            if(!this.checkLabel(letters.text, false)) {
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

/**
 * Types of input for instructions.
 */
enum InputType {
    REG,
    STRING,
    NUM
}