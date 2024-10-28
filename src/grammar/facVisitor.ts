// Generated from src/grammar/fac.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `facParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface facVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `facParser.file`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile?: (ctx: FileContext) => Result;

	/**
	 * Visit a parse tree produced by `facParser.declerations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclerations?: (ctx: DeclerationsContext) => Result;

	/**
	 * Visit a parse tree produced by `facParser.decleration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecleration?: (ctx: DeclerationContext) => Result;

	/**
	 * Visit a parse tree produced by `facParser.define`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefine?: (ctx: DefineContext) => Result;

	/**
	 * Visit a parse tree produced by `facParser.instructions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstructions?: (ctx: InstructionsContext) => Result;

	/**
	 * Visit a parse tree produced by `facParser.instruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction?: (ctx: InstructionContext) => Result;

	/**
	 * Visit a parse tree produced by `facParser.lw`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLw?: (ctx: LwContext) => Result;

	/**
	 * Visit a parse tree produced by `facParser.sw`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSw?: (ctx: SwContext) => Result;

	/**
	 * Visit a parse tree produced by `facParser.mult`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMult?: (ctx: MultContext) => Result;

	/**
	 * Visit a parse tree produced by `facParser.add`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdd?: (ctx: AddContext) => Result;

	/**
	 * Visit a parse tree produced by `facParser.addi`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddi?: (ctx: AddiContext) => Result;

	/**
	 * Visit a parse tree produced by `facParser.shr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShr?: (ctx: ShrContext) => Result;

	/**
	 * Visit a parse tree produced by `facParser.shl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShl?: (ctx: ShlContext) => Result;

	/**
	 * Visit a parse tree produced by `facParser.jump`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJump?: (ctx: JumpContext) => Result;

	/**
	 * Visit a parse tree produced by `facParser.beq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBeq?: (ctx: BeqContext) => Result;

	/**
	 * Visit a parse tree produced by `facParser.bneq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBneq?: (ctx: BneqContext) => Result;

	/**
	 * Visit a parse tree produced by `facParser.or`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOr?: (ctx: OrContext) => Result;

	/**
	 * Visit a parse tree produced by `facParser.and`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnd?: (ctx: AndContext) => Result;

	/**
	 * Visit a parse tree produced by `facParser.xor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXor?: (ctx: XorContext) => Result;

	/**
	 * Visit a parse tree produced by `facParser.not`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNot?: (ctx: NotContext) => Result;

	/**
	 * Visit a parse tree produced by `facParser.label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabel?: (ctx: LabelContext) => Result;

	/**
	 * Visit a parse tree produced by `facParser.nop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNop?: (ctx: NopContext) => Result;

	/**
	 * Visit a parse tree produced by `facParser.dbg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDbg?: (ctx: DbgContext) => Result;

	/**
	 * Visit a parse tree produced by `facParser.reference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReference?: (ctx: ReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by `facParser.input`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInput?: (ctx: InputContext) => Result;

	/**
	 * Visit a parse tree produced by `facParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `facParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by `facParser.register`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegister?: (ctx: RegisterContext) => Result;
}

