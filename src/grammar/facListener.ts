// Generated from src/grammar/fac.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { FileContext } from "./facParser";
import { DeclerationsContext } from "./facParser";
import { DeclerationContext } from "./facParser";
import { DefineContext } from "./facParser";
import { InstructionsContext } from "./facParser";
import { InstructionContext } from "./facParser";
import { LwContext } from "./facParser";
import { SwContext } from "./facParser";
import { MultContext } from "./facParser";
import { AddContext } from "./facParser";
import { AddiContext } from "./facParser";
import { ShrContext } from "./facParser";
import { ShlContext } from "./facParser";
import { JumpContext } from "./facParser";
import { BeqContext } from "./facParser";
import { BneqContext } from "./facParser";
import { OrContext } from "./facParser";
import { AndContext } from "./facParser";
import { XorContext } from "./facParser";
import { NotContext } from "./facParser";
import { LabelContext } from "./facParser";
import { NopContext } from "./facParser";
import { DbgContext } from "./facParser";
import { ReferenceContext } from "./facParser";
import { InputContext } from "./facParser";
import { NumberContext } from "./facParser";
import { StringContext } from "./facParser";
import { RegisterContext } from "./facParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `facParser`.
 */
export interface facListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `facParser.file`.
	 * @param ctx the parse tree
	 */
	enterFile?: (ctx: FileContext) => void;
	/**
	 * Exit a parse tree produced by `facParser.file`.
	 * @param ctx the parse tree
	 */
	exitFile?: (ctx: FileContext) => void;

	/**
	 * Enter a parse tree produced by `facParser.declerations`.
	 * @param ctx the parse tree
	 */
	enterDeclerations?: (ctx: DeclerationsContext) => void;
	/**
	 * Exit a parse tree produced by `facParser.declerations`.
	 * @param ctx the parse tree
	 */
	exitDeclerations?: (ctx: DeclerationsContext) => void;

	/**
	 * Enter a parse tree produced by `facParser.decleration`.
	 * @param ctx the parse tree
	 */
	enterDecleration?: (ctx: DeclerationContext) => void;
	/**
	 * Exit a parse tree produced by `facParser.decleration`.
	 * @param ctx the parse tree
	 */
	exitDecleration?: (ctx: DeclerationContext) => void;

	/**
	 * Enter a parse tree produced by `facParser.define`.
	 * @param ctx the parse tree
	 */
	enterDefine?: (ctx: DefineContext) => void;
	/**
	 * Exit a parse tree produced by `facParser.define`.
	 * @param ctx the parse tree
	 */
	exitDefine?: (ctx: DefineContext) => void;

	/**
	 * Enter a parse tree produced by `facParser.instructions`.
	 * @param ctx the parse tree
	 */
	enterInstructions?: (ctx: InstructionsContext) => void;
	/**
	 * Exit a parse tree produced by `facParser.instructions`.
	 * @param ctx the parse tree
	 */
	exitInstructions?: (ctx: InstructionsContext) => void;

	/**
	 * Enter a parse tree produced by `facParser.instruction`.
	 * @param ctx the parse tree
	 */
	enterInstruction?: (ctx: InstructionContext) => void;
	/**
	 * Exit a parse tree produced by `facParser.instruction`.
	 * @param ctx the parse tree
	 */
	exitInstruction?: (ctx: InstructionContext) => void;

	/**
	 * Enter a parse tree produced by `facParser.lw`.
	 * @param ctx the parse tree
	 */
	enterLw?: (ctx: LwContext) => void;
	/**
	 * Exit a parse tree produced by `facParser.lw`.
	 * @param ctx the parse tree
	 */
	exitLw?: (ctx: LwContext) => void;

	/**
	 * Enter a parse tree produced by `facParser.sw`.
	 * @param ctx the parse tree
	 */
	enterSw?: (ctx: SwContext) => void;
	/**
	 * Exit a parse tree produced by `facParser.sw`.
	 * @param ctx the parse tree
	 */
	exitSw?: (ctx: SwContext) => void;

	/**
	 * Enter a parse tree produced by `facParser.mult`.
	 * @param ctx the parse tree
	 */
	enterMult?: (ctx: MultContext) => void;
	/**
	 * Exit a parse tree produced by `facParser.mult`.
	 * @param ctx the parse tree
	 */
	exitMult?: (ctx: MultContext) => void;

	/**
	 * Enter a parse tree produced by `facParser.add`.
	 * @param ctx the parse tree
	 */
	enterAdd?: (ctx: AddContext) => void;
	/**
	 * Exit a parse tree produced by `facParser.add`.
	 * @param ctx the parse tree
	 */
	exitAdd?: (ctx: AddContext) => void;

	/**
	 * Enter a parse tree produced by `facParser.addi`.
	 * @param ctx the parse tree
	 */
	enterAddi?: (ctx: AddiContext) => void;
	/**
	 * Exit a parse tree produced by `facParser.addi`.
	 * @param ctx the parse tree
	 */
	exitAddi?: (ctx: AddiContext) => void;

	/**
	 * Enter a parse tree produced by `facParser.shr`.
	 * @param ctx the parse tree
	 */
	enterShr?: (ctx: ShrContext) => void;
	/**
	 * Exit a parse tree produced by `facParser.shr`.
	 * @param ctx the parse tree
	 */
	exitShr?: (ctx: ShrContext) => void;

	/**
	 * Enter a parse tree produced by `facParser.shl`.
	 * @param ctx the parse tree
	 */
	enterShl?: (ctx: ShlContext) => void;
	/**
	 * Exit a parse tree produced by `facParser.shl`.
	 * @param ctx the parse tree
	 */
	exitShl?: (ctx: ShlContext) => void;

	/**
	 * Enter a parse tree produced by `facParser.jump`.
	 * @param ctx the parse tree
	 */
	enterJump?: (ctx: JumpContext) => void;
	/**
	 * Exit a parse tree produced by `facParser.jump`.
	 * @param ctx the parse tree
	 */
	exitJump?: (ctx: JumpContext) => void;

	/**
	 * Enter a parse tree produced by `facParser.beq`.
	 * @param ctx the parse tree
	 */
	enterBeq?: (ctx: BeqContext) => void;
	/**
	 * Exit a parse tree produced by `facParser.beq`.
	 * @param ctx the parse tree
	 */
	exitBeq?: (ctx: BeqContext) => void;

	/**
	 * Enter a parse tree produced by `facParser.bneq`.
	 * @param ctx the parse tree
	 */
	enterBneq?: (ctx: BneqContext) => void;
	/**
	 * Exit a parse tree produced by `facParser.bneq`.
	 * @param ctx the parse tree
	 */
	exitBneq?: (ctx: BneqContext) => void;

	/**
	 * Enter a parse tree produced by `facParser.or`.
	 * @param ctx the parse tree
	 */
	enterOr?: (ctx: OrContext) => void;
	/**
	 * Exit a parse tree produced by `facParser.or`.
	 * @param ctx the parse tree
	 */
	exitOr?: (ctx: OrContext) => void;

	/**
	 * Enter a parse tree produced by `facParser.and`.
	 * @param ctx the parse tree
	 */
	enterAnd?: (ctx: AndContext) => void;
	/**
	 * Exit a parse tree produced by `facParser.and`.
	 * @param ctx the parse tree
	 */
	exitAnd?: (ctx: AndContext) => void;

	/**
	 * Enter a parse tree produced by `facParser.xor`.
	 * @param ctx the parse tree
	 */
	enterXor?: (ctx: XorContext) => void;
	/**
	 * Exit a parse tree produced by `facParser.xor`.
	 * @param ctx the parse tree
	 */
	exitXor?: (ctx: XorContext) => void;

	/**
	 * Enter a parse tree produced by `facParser.not`.
	 * @param ctx the parse tree
	 */
	enterNot?: (ctx: NotContext) => void;
	/**
	 * Exit a parse tree produced by `facParser.not`.
	 * @param ctx the parse tree
	 */
	exitNot?: (ctx: NotContext) => void;

	/**
	 * Enter a parse tree produced by `facParser.label`.
	 * @param ctx the parse tree
	 */
	enterLabel?: (ctx: LabelContext) => void;
	/**
	 * Exit a parse tree produced by `facParser.label`.
	 * @param ctx the parse tree
	 */
	exitLabel?: (ctx: LabelContext) => void;

	/**
	 * Enter a parse tree produced by `facParser.nop`.
	 * @param ctx the parse tree
	 */
	enterNop?: (ctx: NopContext) => void;
	/**
	 * Exit a parse tree produced by `facParser.nop`.
	 * @param ctx the parse tree
	 */
	exitNop?: (ctx: NopContext) => void;

	/**
	 * Enter a parse tree produced by `facParser.dbg`.
	 * @param ctx the parse tree
	 */
	enterDbg?: (ctx: DbgContext) => void;
	/**
	 * Exit a parse tree produced by `facParser.dbg`.
	 * @param ctx the parse tree
	 */
	exitDbg?: (ctx: DbgContext) => void;

	/**
	 * Enter a parse tree produced by `facParser.reference`.
	 * @param ctx the parse tree
	 */
	enterReference?: (ctx: ReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `facParser.reference`.
	 * @param ctx the parse tree
	 */
	exitReference?: (ctx: ReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `facParser.input`.
	 * @param ctx the parse tree
	 */
	enterInput?: (ctx: InputContext) => void;
	/**
	 * Exit a parse tree produced by `facParser.input`.
	 * @param ctx the parse tree
	 */
	exitInput?: (ctx: InputContext) => void;

	/**
	 * Enter a parse tree produced by `facParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `facParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `facParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `facParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by `facParser.register`.
	 * @param ctx the parse tree
	 */
	enterRegister?: (ctx: RegisterContext) => void;
	/**
	 * Exit a parse tree produced by `facParser.register`.
	 * @param ctx the parse tree
	 */
	exitRegister?: (ctx: RegisterContext) => void;
}

