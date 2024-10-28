import * as vscode from 'vscode';
import { ErrorListener } from './errors/ErrorListener';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { facLexer } from '../grammar/facLexer';
import { facParser, InputContext, NumberContext, RegisterContext, StringContext } from '../grammar/facParser';
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
	ReferenceContext
} from '../grammar/facParser';

import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { RuleNode } from 'antlr4ts/tree/RuleNode';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';
import { Instructions } from './instruction/Instructions';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { InstructionType } from './instruction/InstructionType';

export class Generation extends AbstractParseTreeVisitor<string> implements facVisitor<string> {

    output:         vscode.OutputChannel;
    errorHandler:   ErrorListener;

	labelTable!: 	Map<string, number>;
	defineTable!: 	Map<string, string>;

	instructions!: Instructions[];
	instructionCounter!: number;

	registerMap: Map<string, string> = new Map<string, string>([
		["$zero", "00000"],
        ["$v0", "00001"],
        ["$v1", "00010"],
        ["$a0", "00011"],
        ["$a1", "00100"],
        ["$a2", "00101"],
        ["$a3", "00110"],
    	["$t0", "00111"],
        ["$t1", "01000"],
        ["$t2", "01001"],
        ["$t3", "01010"],
        ["$t4", "01011"],
        ["$t5", "01100"],
        ["$t6", "01101"],
        ["$t7", "01110"],
        ["$t8", "01111"],
        ["$t9", "10000"],
        ["$t10", "10001"],
        ["$t11", "10010"],
        ["$s0", "10011"],
        ["$s1", "10100"],
    	["$s2", "10101"],
        ["$s3", "10110"],
        ["$s4", "10111"],
        ["$s5", "11000"],
        ["$s6", "11001"],
        ["$s7", "11010"],
        ["$s8", "11011"],
        ["$s9", "11100"],
        ["$s10", "11101"],
        ["$s11", "11110"],
        ["$ra", "11111"]
	]);

    constructor(
        output:         vscode.OutputChannel, 
        errorHandler:   ErrorListener
    ) {
        super();
        this.output =       output;
        this.errorHandler = errorHandler;
    }

	generate(content: string, table: Map<string, number>): Instructions[] {

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

		this.instructions = [];
		this.instructionCounter = 1;

		this.labelTable = table;
		this.defineTable = new Map<string, string>;

		const tree = parser.file();
        this.visit(tree);

        // Checks for errors
		return this.instructions;
	}

	addInstruction(instr: Instructions) {
		this.instructions.push(instr);
		this.instructionCounter++;
	}

	defaultResult() {
		return "";
	}

    /**
	 * Visit a parse tree produced by `facParser.file`.
	 * @param ctx the parse tree
	 * @return the visitor string
	 */
	visitFile(ctx: FileContext): string {
        return super.visitChildren(ctx);
    }

	/**
	 * Visit a parse tree produced by `facParser.declerations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclerations(ctx: DeclerationsContext): string {
		return super.visitChildren(ctx);
    }

	/**
	 * Visit a parse tree produced by `facParser.decleration`.
	 * @param ctx the parse tree
	 * @return the visitor string
	 */
	visitDecleration(ctx: DeclerationContext): string {
		return super.visitChildren(ctx);
    }

	/**
	 * Visit a parse tree produced by `facParser.define`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefine(ctx: DefineContext): string {
		if(
			ctx.REG() !== null 
			&& ctx.REG() !== undefined
			&& ctx.STRING() !== null
			&& ctx.STRING() !== undefined
		) {
			const reg = ctx.REG() as TerminalNode;
            const string = ctx.STRING() as TerminalNode;
            this.defineTable.set(string.text, reg.text);

        } else if(
			ctx.STRING() !== null 
			&& ctx.STRING() !== undefined
			&& ctx.NUMBER() !== null
			&& ctx.NUMBER() !== undefined
		) {
            const string = ctx.STRING() as TerminalNode;
            const num = ctx.NUMBER() as TerminalNode;
            this.defineTable.set(string.text, num.text);
        }
		return "";
    }

	/**
	 * Visit a parse tree produced by `facParser.instructions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstructions(ctx: InstructionsContext): string {
		return super.visitChildren(ctx);
    }

	/**
	 * Visit a parse tree produced by `facParser.instruction`.
	 * @param ctx the parse tree
	 * @return the visitor string
	 */
	visitInstruction(ctx: InstructionContext): string {
		return super.visitChildren(ctx);
    }

	/**
	 * Visit a parse tree produced by `facParser.lw`.
	 * @param ctx the parse tree
	 * @return the visitor string
	 */
	visitLw(ctx: LwContext): string {
		this.addInstruction(
			new Instructions(
				InstructionType.I,
				"0000",
				0,
				super.visit(ctx.input(0)),
				super.visit(ctx.input(1))
			)
		);
		return "";
    }

	/**
	 * Visit a parse tree produced by `facParser.sw`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSw(ctx: SwContext): string {
		this.addInstruction(
			new Instructions(
				InstructionType.I,
				"0001",
				0,
				super.visit(ctx.input(0)),
				super.visit(ctx.input(1))
			)
		);
		return "";
    }

	/**
	 * Visit a parse tree produced by `facParser.mult`.
	 * @param ctx the parse tree
	 * @return the visitor string
	 */
	visitMult(ctx: MultContext): string {
		this.addInstruction(
			new Instructions(
				InstructionType.R,
				"0010",
				0,
				super.visit(ctx.input(0)),
				super.visit(ctx.input(1)),
				super.visit(ctx.input(2))
			)
		);
		return "";
    }

	/**
	 * Visit a parse tree produced by `facParser.add`.
	 * @param ctx the parse tree
	 * @return the visitor string
	 */
	visitAdd(ctx: AddContext): string {
		this.addInstruction(
			new Instructions(
				InstructionType.R,
				"0011",
				0,
				super.visit(ctx.input(0)),
				super.visit(ctx.input(1)),
				super.visit(ctx.input(2))
			)
		);
		return "";
    }

	/**
	 * Visit a parse tree produced by `facParser.addi`.
	 * @param ctx the parse tree
	 * @return the visitor string
	 */
	visitAddi(ctx: AddiContext): string {
		this.addInstruction(
			new Instructions(
				InstructionType.I,
				"0100",
				Number(super.visit(ctx.input(2))),
				super.visit(ctx.input(0)),
				super.visit(ctx.input(1))
			)
		);
		return "";
    }

	/**
	 * Visit a parse tree produced by `facParser.shr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShr(ctx: ShrContext): string {
		this.addInstruction(
			new Instructions(
				InstructionType.R,
				"0101",
				Number(super.visit(ctx.input(2))),
				super.visit(ctx.input(0)),
				super.visit(ctx.input(1))
			)
		);
		return "";
    }

	/**
	 * Visit a parse tree produced by `facParser.shl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShl(ctx: ShlContext): string {
		this.addInstruction(
			new Instructions(
				InstructionType.R,
				"0110",
				Number(super.visit(ctx.input(2))),
				super.visit(ctx.input(0)),
				super.visit(ctx.input(1))
			)
		);
		return "";
    }

	/**
	 * Visit a parse tree produced by `facParser.jump`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJump(ctx: JumpContext): string {
		super.visitChildren(ctx);
		this.addInstruction(
			new Instructions(
				InstructionType.J,
				"0111",
				Number(super.visit(ctx.reference()))
			)
		);
		return "";
    }

	/**
	 * Visit a parse tree produced by `facParser.beq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBeq(ctx: BeqContext): string {
		super.visitChildren(ctx);
		this.addInstruction(
			new Instructions(
				InstructionType.I,
				"1000",
				Number(super.visit(ctx.reference())),
				super.visit(ctx.input(0)),
				super.visit(ctx.input(1))
			)
		);
		return "";
    }

	/**
	 * Visit a parse tree produced by `facParser.bneq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBneq(ctx: BneqContext): string {
		super.visitChildren(ctx);
		this.addInstruction(
			new Instructions(
				InstructionType.I,
				"1001",
				Number(super.visit(ctx.reference())),
				super.visit(ctx.input(0)),
				super.visit(ctx.input(1))
			)
		);
		return "";
    }

	/**
	 * Visit a parse tree produced by `facParser.or`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOr(ctx: OrContext): string {
		this.addInstruction(
			new Instructions(
				InstructionType.R,
				"1010",
				0,
				super.visit(ctx.input(0)),
				super.visit(ctx.input(1)),
				super.visit(ctx.input(2))
			)
		);
		return "";
    }

	/**
	 * Visit a parse tree produced by `facParser.and`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnd(ctx: AndContext): string {
		this.addInstruction(
			new Instructions(
				InstructionType.R,
				"1011",
				0,
				super.visit(ctx.input(0)),
				super.visit(ctx.input(1)),
				super.visit(ctx.input(2))
			)
		);
		return "";
    }

	/**
	 * Visit a parse tree produced by `facParser.xor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXor(ctx: XorContext): string {
		this.addInstruction(
			new Instructions(
				InstructionType.R,
				"1100",
				0,
				super.visit(ctx.input(0)),
				super.visit(ctx.input(1)),
				super.visit(ctx.input(2))
			)
		);
		return "";
    }

	/**
	 * Visit a parse tree produced by `facParser.not`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNot(ctx: NotContext): string {
		this.addInstruction(
			new Instructions(
				InstructionType.R,
				"1101",
				0,
				super.visit(ctx.input(0)),
				super.visit(ctx.input(1)),
				"00000"
			)
		);
		return "";
    }

	/**
	 * Visit a parse tree produced by `facParser.nop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNop(ctx: NopContext): string {
		this.addInstruction(
			new Instructions(
				InstructionType.R,
				"1110",
				0,
				"00000",
				"00000",
				"00000"
			)
		);
		return "";
    }

	/**
	 * Visit a parse tree produced by `facParser.deb`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDbg(ctx: DbgContext): string {
		this.addInstruction(
			new Instructions(
				InstructionType.R,
				"1111",
				0,
				"00000",
				"00000",
				"00000"
			)
		);
		return "";
    }

	/**
	 * Visit a parse tree produced by `facParser.label`.
	 * @param ctx the parse tree
	 * @return the visitor string
	 */
	visitLabel(ctx: LabelContext): string {
		return super.visitChildren(ctx);
    }

	visitReference(ctx: ReferenceContext): string {
		const letters = ctx.LETTERS();
        if(letters !== null) {
			let labelLoc = this.labelTable.get(letters.text);
			return `${Number(labelLoc) - this.instructionCounter}`;
        }
		return "";
    }

	visitInput(ctx: InputContext): string {
		return super.visitChildren(ctx);
	}

	visitRegister(ctx: RegisterContext): string {
		const result = this.registerMap.get(ctx.REG().text);
		if (result === undefined) {
			this.errorHandler.addError(
				ctx, "Unkown reference."
			);
			return "";
		}
		return result;
	}

	visitString(ctx: StringContext): string {
		const value = this.defineTable.get(ctx.STRING().text);
		if(value !== undefined) {
			if(this.registerMap.has(value)) {
				if(this.registerMap.get(value) !== undefined) {
					return this.registerMap.get(value) as string;
				}
			} else {
				return value;
			}
		}
		return "";
	}

	visitNumber(ctx: NumberContext): string {
		return ctx.NUMBER().text;
	}

    // visitReg(ctx: RegContext): string {
	// 	if(ctx.REG() !== undefined) {
    //         const reg = ctx.REG() as TerminalNode;
	// 		const result = this.registerMap.get(reg.text);
	// 		if (result === undefined) {
	// 			this.errorHandler.addError(
	// 				ctx, "Unkown reference."
	// 			);
	// 			return "";
	// 		}
	// 		return result;

    //     } else if(ctx.STRING() !== undefined) {
    //         const string = ctx.STRING() as TerminalNode;
	// 		const value = this.defineTable.get(string.text);
	// 		if(value !== undefined) {
	// 			if(this.registerMap.has(value)) {
	// 				if(this.registerMap.get(value) !== undefined) {
	// 					return this.registerMap.get(value) as string;
	// 				}
	// 			} else {
	// 				// TODO: implement define for numbers
	// 			}
	// 		}
	// 		return "";
    //     }
	// 	this.errorHandler.addError(
	// 		ctx, "Undefined register."
	// 	);
	// 	return "";
    // }
}