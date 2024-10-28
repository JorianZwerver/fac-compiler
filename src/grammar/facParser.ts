// Generated from src/grammar/fac.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { facListener } from "./facListener";
import { facVisitor } from "./facVisitor";


export class facParser extends Parser {
	public static readonly DECL = 1;
	public static readonly DEFINE = 2;
	public static readonly INSTR = 3;
	public static readonly LW = 4;
	public static readonly SW = 5;
	public static readonly MULT = 6;
	public static readonly ADD = 7;
	public static readonly ADDI = 8;
	public static readonly SHR = 9;
	public static readonly SHL = 10;
	public static readonly JUMP = 11;
	public static readonly BEQ = 12;
	public static readonly BNEQ = 13;
	public static readonly OR = 14;
	public static readonly AND = 15;
	public static readonly XOR = 16;
	public static readonly NOT = 17;
	public static readonly NOP = 18;
	public static readonly DBG = 19;
	public static readonly REG = 20;
	public static readonly END = 21;
	public static readonly DOUBLE_COLON = 22;
	public static readonly COMMA = 23;
	public static readonly BO = 24;
	public static readonly BC = 25;
	public static readonly DOT = 26;
	public static readonly HASH = 27;
	public static readonly STRING = 28;
	public static readonly LETTERS = 29;
	public static readonly LETTER = 30;
	public static readonly NUMBER = 31;
	public static readonly NUM = 32;
	public static readonly COMMENT = 33;
	public static readonly WS = 34;
	public static readonly RULE_file = 0;
	public static readonly RULE_declerations = 1;
	public static readonly RULE_decleration = 2;
	public static readonly RULE_define = 3;
	public static readonly RULE_instructions = 4;
	public static readonly RULE_instruction = 5;
	public static readonly RULE_lw = 6;
	public static readonly RULE_sw = 7;
	public static readonly RULE_mult = 8;
	public static readonly RULE_add = 9;
	public static readonly RULE_addi = 10;
	public static readonly RULE_shr = 11;
	public static readonly RULE_shl = 12;
	public static readonly RULE_jump = 13;
	public static readonly RULE_beq = 14;
	public static readonly RULE_bneq = 15;
	public static readonly RULE_or = 16;
	public static readonly RULE_and = 17;
	public static readonly RULE_xor = 18;
	public static readonly RULE_not = 19;
	public static readonly RULE_label = 20;
	public static readonly RULE_nop = 21;
	public static readonly RULE_dbg = 22;
	public static readonly RULE_reference = 23;
	public static readonly RULE_input = 24;
	public static readonly RULE_number = 25;
	public static readonly RULE_string = 26;
	public static readonly RULE_register = 27;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "declerations", "decleration", "define", "instructions", "instruction", 
		"lw", "sw", "mult", "add", "addi", "shr", "shl", "jump", "beq", "bneq", 
		"or", "and", "xor", "not", "label", "nop", "dbg", "reference", "input", 
		"number", "string", "register",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'.decl'", "'.define'", "'.instr'", "'lw'", "'sw'", "'mult'", 
		"'add'", "'addi'", "'shr'", "'shl'", "'j'", "'beq'", "'bneq'", "'or'", 
		"'and'", "'xor'", "'not'", "'nop'", "'dbg'", undefined, "';'", "':'", 
		"','", "'('", "')'", "'.'", "'#'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "DECL", "DEFINE", "INSTR", "LW", "SW", "MULT", "ADD", "ADDI", 
		"SHR", "SHL", "JUMP", "BEQ", "BNEQ", "OR", "AND", "XOR", "NOT", "NOP", 
		"DBG", "REG", "END", "DOUBLE_COLON", "COMMA", "BO", "BC", "DOT", "HASH", 
		"STRING", "LETTERS", "LETTER", "NUMBER", "NUM", "COMMENT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(facParser._LITERAL_NAMES, facParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return facParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "fac.g4"; }

	// @Override
	public get ruleNames(): string[] { return facParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return facParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(facParser._ATN, this);
	}
	// @RuleVersion(0)
	public file(): FileContext {
		let _localctx: FileContext = new FileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, facParser.RULE_file);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 56;
			this.declerations();
			this.state = 57;
			this.instructions();
			this.state = 58;
			this.match(facParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declerations(): DeclerationsContext {
		let _localctx: DeclerationsContext = new DeclerationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, facParser.RULE_declerations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			this.match(facParser.DECL);
			this.state = 64;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === facParser.DEFINE) {
				{
				{
				this.state = 61;
				this.decleration();
				}
				}
				this.state = 66;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public decleration(): DeclerationContext {
		let _localctx: DeclerationContext = new DeclerationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, facParser.RULE_decleration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			this.define();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public define(): DefineContext {
		let _localctx: DefineContext = new DefineContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, facParser.RULE_define);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			this.match(facParser.DEFINE);
			this.state = 70;
			_la = this._input.LA(1);
			if (!(_la === facParser.REG || _la === facParser.NUMBER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 71;
			this.match(facParser.COMMA);
			this.state = 72;
			this.match(facParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instructions(): InstructionsContext {
		let _localctx: InstructionsContext = new InstructionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, facParser.RULE_instructions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			this.match(facParser.INSTR);
			this.state = 78;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << facParser.LW) | (1 << facParser.SW) | (1 << facParser.MULT) | (1 << facParser.ADD) | (1 << facParser.ADDI) | (1 << facParser.SHR) | (1 << facParser.SHL) | (1 << facParser.JUMP) | (1 << facParser.BEQ) | (1 << facParser.BNEQ) | (1 << facParser.OR) | (1 << facParser.AND) | (1 << facParser.XOR) | (1 << facParser.NOT) | (1 << facParser.NOP) | (1 << facParser.DBG) | (1 << facParser.HASH))) !== 0)) {
				{
				{
				this.state = 75;
				this.instruction();
				}
				}
				this.state = 80;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instruction(): InstructionContext {
		let _localctx: InstructionContext = new InstructionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, facParser.RULE_instruction);
		try {
			this.state = 98;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case facParser.LW:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 81;
				this.lw();
				}
				break;
			case facParser.SW:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 82;
				this.sw();
				}
				break;
			case facParser.MULT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 83;
				this.mult();
				}
				break;
			case facParser.ADD:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 84;
				this.add();
				}
				break;
			case facParser.ADDI:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 85;
				this.addi();
				}
				break;
			case facParser.SHR:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 86;
				this.shr();
				}
				break;
			case facParser.SHL:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 87;
				this.shl();
				}
				break;
			case facParser.JUMP:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 88;
				this.jump();
				}
				break;
			case facParser.BEQ:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 89;
				this.beq();
				}
				break;
			case facParser.BNEQ:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 90;
				this.bneq();
				}
				break;
			case facParser.OR:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 91;
				this.or();
				}
				break;
			case facParser.AND:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 92;
				this.and();
				}
				break;
			case facParser.XOR:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 93;
				this.xor();
				}
				break;
			case facParser.NOT:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 94;
				this.not();
				}
				break;
			case facParser.NOP:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 95;
				this.nop();
				}
				break;
			case facParser.DBG:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 96;
				this.dbg();
				}
				break;
			case facParser.HASH:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 97;
				this.label();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lw(): LwContext {
		let _localctx: LwContext = new LwContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, facParser.RULE_lw);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 100;
			this.match(facParser.LW);
			this.state = 101;
			this.input();
			this.state = 102;
			this.match(facParser.COMMA);
			this.state = 103;
			this.input();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sw(): SwContext {
		let _localctx: SwContext = new SwContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, facParser.RULE_sw);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 105;
			this.match(facParser.SW);
			this.state = 106;
			this.input();
			this.state = 107;
			this.match(facParser.COMMA);
			this.state = 108;
			this.input();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mult(): MultContext {
		let _localctx: MultContext = new MultContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, facParser.RULE_mult);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 110;
			this.match(facParser.MULT);
			this.state = 111;
			this.input();
			this.state = 112;
			this.match(facParser.COMMA);
			this.state = 113;
			this.input();
			this.state = 114;
			this.match(facParser.COMMA);
			this.state = 115;
			this.input();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public add(): AddContext {
		let _localctx: AddContext = new AddContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, facParser.RULE_add);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 117;
			this.match(facParser.ADD);
			this.state = 118;
			this.input();
			this.state = 119;
			this.match(facParser.COMMA);
			this.state = 120;
			this.input();
			this.state = 121;
			this.match(facParser.COMMA);
			this.state = 122;
			this.input();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public addi(): AddiContext {
		let _localctx: AddiContext = new AddiContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, facParser.RULE_addi);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 124;
			this.match(facParser.ADDI);
			this.state = 125;
			this.input();
			this.state = 126;
			this.match(facParser.COMMA);
			this.state = 127;
			this.input();
			this.state = 128;
			this.match(facParser.COMMA);
			this.state = 129;
			this.input();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public shr(): ShrContext {
		let _localctx: ShrContext = new ShrContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, facParser.RULE_shr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 131;
			this.match(facParser.SHR);
			this.state = 132;
			this.input();
			this.state = 133;
			this.match(facParser.COMMA);
			this.state = 134;
			this.input();
			this.state = 135;
			this.match(facParser.COMMA);
			this.state = 136;
			this.input();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public shl(): ShlContext {
		let _localctx: ShlContext = new ShlContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, facParser.RULE_shl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 138;
			this.match(facParser.SHL);
			this.state = 139;
			this.input();
			this.state = 140;
			this.match(facParser.COMMA);
			this.state = 141;
			this.input();
			this.state = 142;
			this.match(facParser.COMMA);
			this.state = 143;
			this.input();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jump(): JumpContext {
		let _localctx: JumpContext = new JumpContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, facParser.RULE_jump);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 145;
			this.match(facParser.JUMP);
			this.state = 146;
			this.reference();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public beq(): BeqContext {
		let _localctx: BeqContext = new BeqContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, facParser.RULE_beq);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 148;
			this.match(facParser.BEQ);
			this.state = 149;
			this.input();
			this.state = 150;
			this.match(facParser.COMMA);
			this.state = 151;
			this.input();
			this.state = 152;
			this.match(facParser.COMMA);
			this.state = 153;
			this.reference();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bneq(): BneqContext {
		let _localctx: BneqContext = new BneqContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, facParser.RULE_bneq);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 155;
			this.match(facParser.BNEQ);
			this.state = 156;
			this.input();
			this.state = 157;
			this.match(facParser.COMMA);
			this.state = 158;
			this.input();
			this.state = 159;
			this.match(facParser.COMMA);
			this.state = 160;
			this.reference();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public or(): OrContext {
		let _localctx: OrContext = new OrContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, facParser.RULE_or);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 162;
			this.match(facParser.OR);
			this.state = 163;
			this.input();
			this.state = 164;
			this.match(facParser.COMMA);
			this.state = 165;
			this.input();
			this.state = 166;
			this.match(facParser.COMMA);
			this.state = 167;
			this.input();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public and(): AndContext {
		let _localctx: AndContext = new AndContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, facParser.RULE_and);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 169;
			this.match(facParser.AND);
			this.state = 170;
			this.input();
			this.state = 171;
			this.match(facParser.COMMA);
			this.state = 172;
			this.input();
			this.state = 173;
			this.match(facParser.COMMA);
			this.state = 174;
			this.input();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public xor(): XorContext {
		let _localctx: XorContext = new XorContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, facParser.RULE_xor);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 176;
			this.match(facParser.XOR);
			this.state = 177;
			this.input();
			this.state = 178;
			this.match(facParser.COMMA);
			this.state = 179;
			this.input();
			this.state = 180;
			this.match(facParser.COMMA);
			this.state = 181;
			this.input();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public not(): NotContext {
		let _localctx: NotContext = new NotContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, facParser.RULE_not);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 183;
			this.match(facParser.NOT);
			this.state = 184;
			this.input();
			this.state = 185;
			this.match(facParser.COMMA);
			this.state = 186;
			this.input();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public label(): LabelContext {
		let _localctx: LabelContext = new LabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, facParser.RULE_label);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 188;
			this.match(facParser.HASH);
			this.state = 189;
			this.match(facParser.LETTERS);
			this.state = 190;
			this.match(facParser.DOUBLE_COLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nop(): NopContext {
		let _localctx: NopContext = new NopContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, facParser.RULE_nop);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 192;
			this.match(facParser.NOP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dbg(): DbgContext {
		let _localctx: DbgContext = new DbgContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, facParser.RULE_dbg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 194;
			this.match(facParser.DBG);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reference(): ReferenceContext {
		let _localctx: ReferenceContext = new ReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, facParser.RULE_reference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 196;
			this.match(facParser.HASH);
			this.state = 197;
			this.match(facParser.LETTERS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public input(): InputContext {
		let _localctx: InputContext = new InputContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, facParser.RULE_input);
		try {
			this.state = 202;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case facParser.REG:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 199;
				this.register();
				}
				break;
			case facParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 200;
				this.string();
				}
				break;
			case facParser.NUMBER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 201;
				this.number();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, facParser.RULE_number);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 204;
			this.match(facParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, facParser.RULE_string);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 206;
			this.match(facParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public register(): RegisterContext {
		let _localctx: RegisterContext = new RegisterContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, facParser.RULE_register);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 208;
			this.match(facParser.REG);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03$\xD5\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x07\x03A\n" +
		"\x03\f\x03\x0E\x03D\v\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x06\x03\x06\x07\x06O\n\x06\f\x06\x0E\x06R\v\x06\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07e\n\x07" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19" +
		"\x03\x1A\x03\x1A\x03\x1A\x05\x1A\xCD\n\x1A\x03\x1B\x03\x1B\x03\x1C\x03" +
		"\x1C\x03\x1D\x03\x1D\x03\x1D\x02\x02\x02\x1E\x02\x02\x04\x02\x06\x02\b" +
		"\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02" +
		"\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x02" +
		"6\x028\x02\x02\x03\x04\x02\x16\x16!!\x02\xCC\x02:\x03\x02\x02\x02\x04" +
		">\x03\x02\x02\x02\x06E\x03\x02\x02\x02\bG\x03\x02\x02\x02\nL\x03\x02\x02" +
		"\x02\fd\x03\x02\x02\x02\x0Ef\x03\x02\x02\x02\x10k\x03\x02\x02\x02\x12" +
		"p\x03\x02\x02\x02\x14w\x03\x02\x02\x02\x16~\x03\x02\x02\x02\x18\x85\x03" +
		"\x02\x02\x02\x1A\x8C\x03\x02\x02\x02\x1C\x93\x03\x02\x02\x02\x1E\x96\x03" +
		"\x02\x02\x02 \x9D\x03\x02\x02\x02\"\xA4\x03\x02\x02\x02$\xAB\x03\x02\x02" +
		"\x02&\xB2\x03\x02\x02\x02(\xB9\x03\x02\x02\x02*\xBE\x03\x02\x02\x02,\xC2" +
		"\x03\x02\x02\x02.\xC4\x03\x02\x02\x020\xC6\x03\x02\x02\x022\xCC\x03\x02" +
		"\x02\x024\xCE\x03\x02\x02\x026\xD0\x03\x02\x02\x028\xD2\x03\x02\x02\x02" +
		":;\x05\x04\x03\x02;<\x05\n\x06\x02<=\x07\x02\x02\x03=\x03\x03\x02\x02" +
		"\x02>B\x07\x03\x02\x02?A\x05\x06\x04\x02@?\x03\x02\x02\x02AD\x03\x02\x02" +
		"\x02B@\x03\x02\x02\x02BC\x03\x02\x02\x02C\x05\x03\x02\x02\x02DB\x03\x02" +
		"\x02\x02EF\x05\b\x05\x02F\x07\x03\x02\x02\x02GH\x07\x04\x02\x02HI\t\x02" +
		"\x02\x02IJ\x07\x19\x02\x02JK\x07\x1E\x02\x02K\t\x03\x02\x02\x02LP\x07" +
		"\x05\x02\x02MO\x05\f\x07\x02NM\x03\x02\x02\x02OR\x03\x02\x02\x02PN\x03" +
		"\x02\x02\x02PQ\x03\x02\x02\x02Q\v\x03\x02\x02\x02RP\x03\x02\x02\x02Se" +
		"\x05\x0E\b\x02Te\x05\x10\t\x02Ue\x05\x12\n\x02Ve\x05\x14\v\x02We\x05\x16" +
		"\f\x02Xe\x05\x18\r\x02Ye\x05\x1A\x0E\x02Ze\x05\x1C\x0F\x02[e\x05\x1E\x10" +
		"\x02\\e\x05 \x11\x02]e\x05\"\x12\x02^e\x05$\x13\x02_e\x05&\x14\x02`e\x05" +
		"(\x15\x02ae\x05,\x17\x02be\x05.\x18\x02ce\x05*\x16\x02dS\x03\x02\x02\x02" +
		"dT\x03\x02\x02\x02dU\x03\x02\x02\x02dV\x03\x02\x02\x02dW\x03\x02\x02\x02" +
		"dX\x03\x02\x02\x02dY\x03\x02\x02\x02dZ\x03\x02\x02\x02d[\x03\x02\x02\x02" +
		"d\\\x03\x02\x02\x02d]\x03\x02\x02\x02d^\x03\x02\x02\x02d_\x03\x02\x02" +
		"\x02d`\x03\x02\x02\x02da\x03\x02\x02\x02db\x03\x02\x02\x02dc\x03\x02\x02" +
		"\x02e\r\x03\x02\x02\x02fg\x07\x06\x02\x02gh\x052\x1A\x02hi\x07\x19\x02" +
		"\x02ij\x052\x1A\x02j\x0F\x03\x02\x02\x02kl\x07\x07\x02\x02lm\x052\x1A" +
		"\x02mn\x07\x19\x02\x02no\x052\x1A\x02o\x11\x03\x02\x02\x02pq\x07\b\x02" +
		"\x02qr\x052\x1A\x02rs\x07\x19\x02\x02st\x052\x1A\x02tu\x07\x19\x02\x02" +
		"uv\x052\x1A\x02v\x13\x03\x02\x02\x02wx\x07\t\x02\x02xy\x052\x1A\x02yz" +
		"\x07\x19\x02\x02z{\x052\x1A\x02{|\x07\x19\x02\x02|}\x052\x1A\x02}\x15" +
		"\x03\x02\x02\x02~\x7F\x07\n\x02\x02\x7F\x80\x052\x1A\x02\x80\x81\x07\x19" +
		"\x02\x02\x81\x82\x052\x1A\x02\x82\x83\x07\x19\x02\x02\x83\x84\x052\x1A" +
		"\x02\x84\x17\x03\x02\x02\x02\x85\x86\x07\v\x02\x02\x86\x87\x052\x1A\x02" +
		"\x87\x88\x07\x19\x02\x02\x88\x89\x052\x1A\x02\x89\x8A\x07\x19\x02\x02" +
		"\x8A\x8B\x052\x1A\x02\x8B\x19\x03\x02\x02\x02\x8C\x8D\x07\f\x02\x02\x8D" +
		"\x8E\x052\x1A\x02\x8E\x8F\x07\x19\x02\x02\x8F\x90\x052\x1A\x02\x90\x91" +
		"\x07\x19\x02\x02\x91\x92\x052\x1A\x02\x92\x1B\x03\x02\x02\x02\x93\x94" +
		"\x07\r\x02\x02\x94\x95\x050\x19\x02\x95\x1D\x03\x02\x02\x02\x96\x97\x07" +
		"\x0E\x02\x02\x97\x98\x052\x1A\x02\x98\x99\x07\x19\x02\x02\x99\x9A\x05" +
		"2\x1A\x02\x9A\x9B\x07\x19\x02\x02\x9B\x9C\x050\x19\x02\x9C\x1F\x03\x02" +
		"\x02\x02\x9D\x9E\x07\x0F\x02\x02\x9E\x9F\x052\x1A\x02\x9F\xA0\x07\x19" +
		"\x02\x02\xA0\xA1\x052\x1A\x02\xA1\xA2\x07\x19\x02\x02\xA2\xA3\x050\x19" +
		"\x02\xA3!\x03\x02\x02\x02\xA4\xA5\x07\x10\x02\x02\xA5\xA6\x052\x1A\x02" +
		"\xA6\xA7\x07\x19\x02\x02\xA7\xA8\x052\x1A\x02\xA8\xA9\x07\x19\x02\x02" +
		"\xA9\xAA\x052\x1A\x02\xAA#\x03\x02\x02\x02\xAB\xAC\x07\x11\x02\x02\xAC" +
		"\xAD\x052\x1A\x02\xAD\xAE\x07\x19\x02\x02\xAE\xAF\x052\x1A\x02\xAF\xB0" +
		"\x07\x19\x02\x02\xB0\xB1\x052\x1A\x02\xB1%\x03\x02\x02\x02\xB2\xB3\x07" +
		"\x12\x02\x02\xB3\xB4\x052\x1A\x02\xB4\xB5\x07\x19\x02\x02\xB5\xB6\x05" +
		"2\x1A\x02\xB6\xB7\x07\x19\x02\x02\xB7\xB8\x052\x1A\x02\xB8\'\x03\x02\x02" +
		"\x02\xB9\xBA\x07\x13\x02\x02\xBA\xBB\x052\x1A\x02\xBB\xBC\x07\x19\x02" +
		"\x02\xBC\xBD\x052\x1A\x02\xBD)\x03\x02\x02\x02\xBE\xBF\x07\x1D\x02\x02" +
		"\xBF\xC0\x07\x1F\x02\x02\xC0\xC1\x07\x18\x02\x02\xC1+\x03\x02\x02\x02" +
		"\xC2\xC3\x07\x14\x02\x02\xC3-\x03\x02\x02\x02\xC4\xC5\x07\x15\x02\x02" +
		"\xC5/\x03\x02\x02\x02\xC6\xC7\x07\x1D\x02\x02\xC7\xC8\x07\x1F\x02\x02" +
		"\xC81\x03\x02\x02\x02\xC9\xCD\x058\x1D\x02\xCA\xCD\x056\x1C\x02\xCB\xCD" +
		"\x054\x1B\x02\xCC\xC9\x03\x02\x02\x02\xCC\xCA\x03\x02\x02\x02\xCC\xCB" +
		"\x03\x02\x02\x02\xCD3\x03\x02\x02\x02\xCE\xCF\x07!\x02\x02\xCF5\x03\x02" +
		"\x02\x02\xD0\xD1\x07\x1E\x02\x02\xD17\x03\x02\x02\x02\xD2\xD3\x07\x16" +
		"\x02\x02\xD39\x03\x02\x02\x02\x06BPd\xCC";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!facParser.__ATN) {
			facParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(facParser._serializedATN));
		}

		return facParser.__ATN;
	}

}

export class FileContext extends ParserRuleContext {
	public declerations(): DeclerationsContext {
		return this.getRuleContext(0, DeclerationsContext);
	}
	public instructions(): InstructionsContext {
		return this.getRuleContext(0, InstructionsContext);
	}
	public EOF(): TerminalNode { return this.getToken(facParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return facParser.RULE_file; }
	// @Override
	public enterRule(listener: facListener): void {
		if (listener.enterFile) {
			listener.enterFile(this);
		}
	}
	// @Override
	public exitRule(listener: facListener): void {
		if (listener.exitFile) {
			listener.exitFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: facVisitor<Result>): Result {
		if (visitor.visitFile) {
			return visitor.visitFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclerationsContext extends ParserRuleContext {
	public DECL(): TerminalNode { return this.getToken(facParser.DECL, 0); }
	public decleration(): DeclerationContext[];
	public decleration(i: number): DeclerationContext;
	public decleration(i?: number): DeclerationContext | DeclerationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclerationContext);
		} else {
			return this.getRuleContext(i, DeclerationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return facParser.RULE_declerations; }
	// @Override
	public enterRule(listener: facListener): void {
		if (listener.enterDeclerations) {
			listener.enterDeclerations(this);
		}
	}
	// @Override
	public exitRule(listener: facListener): void {
		if (listener.exitDeclerations) {
			listener.exitDeclerations(this);
		}
	}
	// @Override
	public accept<Result>(visitor: facVisitor<Result>): Result {
		if (visitor.visitDeclerations) {
			return visitor.visitDeclerations(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclerationContext extends ParserRuleContext {
	public define(): DefineContext {
		return this.getRuleContext(0, DefineContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return facParser.RULE_decleration; }
	// @Override
	public enterRule(listener: facListener): void {
		if (listener.enterDecleration) {
			listener.enterDecleration(this);
		}
	}
	// @Override
	public exitRule(listener: facListener): void {
		if (listener.exitDecleration) {
			listener.exitDecleration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: facVisitor<Result>): Result {
		if (visitor.visitDecleration) {
			return visitor.visitDecleration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefineContext extends ParserRuleContext {
	public DEFINE(): TerminalNode { return this.getToken(facParser.DEFINE, 0); }
	public COMMA(): TerminalNode { return this.getToken(facParser.COMMA, 0); }
	public STRING(): TerminalNode { return this.getToken(facParser.STRING, 0); }
	public REG(): TerminalNode | undefined { return this.tryGetToken(facParser.REG, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(facParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return facParser.RULE_define; }
	// @Override
	public enterRule(listener: facListener): void {
		if (listener.enterDefine) {
			listener.enterDefine(this);
		}
	}
	// @Override
	public exitRule(listener: facListener): void {
		if (listener.exitDefine) {
			listener.exitDefine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: facVisitor<Result>): Result {
		if (visitor.visitDefine) {
			return visitor.visitDefine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstructionsContext extends ParserRuleContext {
	public INSTR(): TerminalNode { return this.getToken(facParser.INSTR, 0); }
	public instruction(): InstructionContext[];
	public instruction(i: number): InstructionContext;
	public instruction(i?: number): InstructionContext | InstructionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InstructionContext);
		} else {
			return this.getRuleContext(i, InstructionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return facParser.RULE_instructions; }
	// @Override
	public enterRule(listener: facListener): void {
		if (listener.enterInstructions) {
			listener.enterInstructions(this);
		}
	}
	// @Override
	public exitRule(listener: facListener): void {
		if (listener.exitInstructions) {
			listener.exitInstructions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: facVisitor<Result>): Result {
		if (visitor.visitInstructions) {
			return visitor.visitInstructions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstructionContext extends ParserRuleContext {
	public lw(): LwContext | undefined {
		return this.tryGetRuleContext(0, LwContext);
	}
	public sw(): SwContext | undefined {
		return this.tryGetRuleContext(0, SwContext);
	}
	public mult(): MultContext | undefined {
		return this.tryGetRuleContext(0, MultContext);
	}
	public add(): AddContext | undefined {
		return this.tryGetRuleContext(0, AddContext);
	}
	public addi(): AddiContext | undefined {
		return this.tryGetRuleContext(0, AddiContext);
	}
	public shr(): ShrContext | undefined {
		return this.tryGetRuleContext(0, ShrContext);
	}
	public shl(): ShlContext | undefined {
		return this.tryGetRuleContext(0, ShlContext);
	}
	public jump(): JumpContext | undefined {
		return this.tryGetRuleContext(0, JumpContext);
	}
	public beq(): BeqContext | undefined {
		return this.tryGetRuleContext(0, BeqContext);
	}
	public bneq(): BneqContext | undefined {
		return this.tryGetRuleContext(0, BneqContext);
	}
	public or(): OrContext | undefined {
		return this.tryGetRuleContext(0, OrContext);
	}
	public and(): AndContext | undefined {
		return this.tryGetRuleContext(0, AndContext);
	}
	public xor(): XorContext | undefined {
		return this.tryGetRuleContext(0, XorContext);
	}
	public not(): NotContext | undefined {
		return this.tryGetRuleContext(0, NotContext);
	}
	public nop(): NopContext | undefined {
		return this.tryGetRuleContext(0, NopContext);
	}
	public dbg(): DbgContext | undefined {
		return this.tryGetRuleContext(0, DbgContext);
	}
	public label(): LabelContext | undefined {
		return this.tryGetRuleContext(0, LabelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return facParser.RULE_instruction; }
	// @Override
	public enterRule(listener: facListener): void {
		if (listener.enterInstruction) {
			listener.enterInstruction(this);
		}
	}
	// @Override
	public exitRule(listener: facListener): void {
		if (listener.exitInstruction) {
			listener.exitInstruction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: facVisitor<Result>): Result {
		if (visitor.visitInstruction) {
			return visitor.visitInstruction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LwContext extends ParserRuleContext {
	public LW(): TerminalNode { return this.getToken(facParser.LW, 0); }
	public input(): InputContext[];
	public input(i: number): InputContext;
	public input(i?: number): InputContext | InputContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InputContext);
		} else {
			return this.getRuleContext(i, InputContext);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(facParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return facParser.RULE_lw; }
	// @Override
	public enterRule(listener: facListener): void {
		if (listener.enterLw) {
			listener.enterLw(this);
		}
	}
	// @Override
	public exitRule(listener: facListener): void {
		if (listener.exitLw) {
			listener.exitLw(this);
		}
	}
	// @Override
	public accept<Result>(visitor: facVisitor<Result>): Result {
		if (visitor.visitLw) {
			return visitor.visitLw(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwContext extends ParserRuleContext {
	public SW(): TerminalNode { return this.getToken(facParser.SW, 0); }
	public input(): InputContext[];
	public input(i: number): InputContext;
	public input(i?: number): InputContext | InputContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InputContext);
		} else {
			return this.getRuleContext(i, InputContext);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(facParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return facParser.RULE_sw; }
	// @Override
	public enterRule(listener: facListener): void {
		if (listener.enterSw) {
			listener.enterSw(this);
		}
	}
	// @Override
	public exitRule(listener: facListener): void {
		if (listener.exitSw) {
			listener.exitSw(this);
		}
	}
	// @Override
	public accept<Result>(visitor: facVisitor<Result>): Result {
		if (visitor.visitSw) {
			return visitor.visitSw(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultContext extends ParserRuleContext {
	public MULT(): TerminalNode { return this.getToken(facParser.MULT, 0); }
	public input(): InputContext[];
	public input(i: number): InputContext;
	public input(i?: number): InputContext | InputContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InputContext);
		} else {
			return this.getRuleContext(i, InputContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(facParser.COMMA);
		} else {
			return this.getToken(facParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return facParser.RULE_mult; }
	// @Override
	public enterRule(listener: facListener): void {
		if (listener.enterMult) {
			listener.enterMult(this);
		}
	}
	// @Override
	public exitRule(listener: facListener): void {
		if (listener.exitMult) {
			listener.exitMult(this);
		}
	}
	// @Override
	public accept<Result>(visitor: facVisitor<Result>): Result {
		if (visitor.visitMult) {
			return visitor.visitMult(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddContext extends ParserRuleContext {
	public ADD(): TerminalNode { return this.getToken(facParser.ADD, 0); }
	public input(): InputContext[];
	public input(i: number): InputContext;
	public input(i?: number): InputContext | InputContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InputContext);
		} else {
			return this.getRuleContext(i, InputContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(facParser.COMMA);
		} else {
			return this.getToken(facParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return facParser.RULE_add; }
	// @Override
	public enterRule(listener: facListener): void {
		if (listener.enterAdd) {
			listener.enterAdd(this);
		}
	}
	// @Override
	public exitRule(listener: facListener): void {
		if (listener.exitAdd) {
			listener.exitAdd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: facVisitor<Result>): Result {
		if (visitor.visitAdd) {
			return visitor.visitAdd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddiContext extends ParserRuleContext {
	public ADDI(): TerminalNode { return this.getToken(facParser.ADDI, 0); }
	public input(): InputContext[];
	public input(i: number): InputContext;
	public input(i?: number): InputContext | InputContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InputContext);
		} else {
			return this.getRuleContext(i, InputContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(facParser.COMMA);
		} else {
			return this.getToken(facParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return facParser.RULE_addi; }
	// @Override
	public enterRule(listener: facListener): void {
		if (listener.enterAddi) {
			listener.enterAddi(this);
		}
	}
	// @Override
	public exitRule(listener: facListener): void {
		if (listener.exitAddi) {
			listener.exitAddi(this);
		}
	}
	// @Override
	public accept<Result>(visitor: facVisitor<Result>): Result {
		if (visitor.visitAddi) {
			return visitor.visitAddi(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShrContext extends ParserRuleContext {
	public SHR(): TerminalNode { return this.getToken(facParser.SHR, 0); }
	public input(): InputContext[];
	public input(i: number): InputContext;
	public input(i?: number): InputContext | InputContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InputContext);
		} else {
			return this.getRuleContext(i, InputContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(facParser.COMMA);
		} else {
			return this.getToken(facParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return facParser.RULE_shr; }
	// @Override
	public enterRule(listener: facListener): void {
		if (listener.enterShr) {
			listener.enterShr(this);
		}
	}
	// @Override
	public exitRule(listener: facListener): void {
		if (listener.exitShr) {
			listener.exitShr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: facVisitor<Result>): Result {
		if (visitor.visitShr) {
			return visitor.visitShr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShlContext extends ParserRuleContext {
	public SHL(): TerminalNode { return this.getToken(facParser.SHL, 0); }
	public input(): InputContext[];
	public input(i: number): InputContext;
	public input(i?: number): InputContext | InputContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InputContext);
		} else {
			return this.getRuleContext(i, InputContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(facParser.COMMA);
		} else {
			return this.getToken(facParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return facParser.RULE_shl; }
	// @Override
	public enterRule(listener: facListener): void {
		if (listener.enterShl) {
			listener.enterShl(this);
		}
	}
	// @Override
	public exitRule(listener: facListener): void {
		if (listener.exitShl) {
			listener.exitShl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: facVisitor<Result>): Result {
		if (visitor.visitShl) {
			return visitor.visitShl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JumpContext extends ParserRuleContext {
	public JUMP(): TerminalNode { return this.getToken(facParser.JUMP, 0); }
	public reference(): ReferenceContext {
		return this.getRuleContext(0, ReferenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return facParser.RULE_jump; }
	// @Override
	public enterRule(listener: facListener): void {
		if (listener.enterJump) {
			listener.enterJump(this);
		}
	}
	// @Override
	public exitRule(listener: facListener): void {
		if (listener.exitJump) {
			listener.exitJump(this);
		}
	}
	// @Override
	public accept<Result>(visitor: facVisitor<Result>): Result {
		if (visitor.visitJump) {
			return visitor.visitJump(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BeqContext extends ParserRuleContext {
	public BEQ(): TerminalNode { return this.getToken(facParser.BEQ, 0); }
	public input(): InputContext[];
	public input(i: number): InputContext;
	public input(i?: number): InputContext | InputContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InputContext);
		} else {
			return this.getRuleContext(i, InputContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(facParser.COMMA);
		} else {
			return this.getToken(facParser.COMMA, i);
		}
	}
	public reference(): ReferenceContext {
		return this.getRuleContext(0, ReferenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return facParser.RULE_beq; }
	// @Override
	public enterRule(listener: facListener): void {
		if (listener.enterBeq) {
			listener.enterBeq(this);
		}
	}
	// @Override
	public exitRule(listener: facListener): void {
		if (listener.exitBeq) {
			listener.exitBeq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: facVisitor<Result>): Result {
		if (visitor.visitBeq) {
			return visitor.visitBeq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BneqContext extends ParserRuleContext {
	public BNEQ(): TerminalNode { return this.getToken(facParser.BNEQ, 0); }
	public input(): InputContext[];
	public input(i: number): InputContext;
	public input(i?: number): InputContext | InputContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InputContext);
		} else {
			return this.getRuleContext(i, InputContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(facParser.COMMA);
		} else {
			return this.getToken(facParser.COMMA, i);
		}
	}
	public reference(): ReferenceContext {
		return this.getRuleContext(0, ReferenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return facParser.RULE_bneq; }
	// @Override
	public enterRule(listener: facListener): void {
		if (listener.enterBneq) {
			listener.enterBneq(this);
		}
	}
	// @Override
	public exitRule(listener: facListener): void {
		if (listener.exitBneq) {
			listener.exitBneq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: facVisitor<Result>): Result {
		if (visitor.visitBneq) {
			return visitor.visitBneq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrContext extends ParserRuleContext {
	public OR(): TerminalNode { return this.getToken(facParser.OR, 0); }
	public input(): InputContext[];
	public input(i: number): InputContext;
	public input(i?: number): InputContext | InputContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InputContext);
		} else {
			return this.getRuleContext(i, InputContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(facParser.COMMA);
		} else {
			return this.getToken(facParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return facParser.RULE_or; }
	// @Override
	public enterRule(listener: facListener): void {
		if (listener.enterOr) {
			listener.enterOr(this);
		}
	}
	// @Override
	public exitRule(listener: facListener): void {
		if (listener.exitOr) {
			listener.exitOr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: facVisitor<Result>): Result {
		if (visitor.visitOr) {
			return visitor.visitOr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AndContext extends ParserRuleContext {
	public AND(): TerminalNode { return this.getToken(facParser.AND, 0); }
	public input(): InputContext[];
	public input(i: number): InputContext;
	public input(i?: number): InputContext | InputContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InputContext);
		} else {
			return this.getRuleContext(i, InputContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(facParser.COMMA);
		} else {
			return this.getToken(facParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return facParser.RULE_and; }
	// @Override
	public enterRule(listener: facListener): void {
		if (listener.enterAnd) {
			listener.enterAnd(this);
		}
	}
	// @Override
	public exitRule(listener: facListener): void {
		if (listener.exitAnd) {
			listener.exitAnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: facVisitor<Result>): Result {
		if (visitor.visitAnd) {
			return visitor.visitAnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class XorContext extends ParserRuleContext {
	public XOR(): TerminalNode { return this.getToken(facParser.XOR, 0); }
	public input(): InputContext[];
	public input(i: number): InputContext;
	public input(i?: number): InputContext | InputContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InputContext);
		} else {
			return this.getRuleContext(i, InputContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(facParser.COMMA);
		} else {
			return this.getToken(facParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return facParser.RULE_xor; }
	// @Override
	public enterRule(listener: facListener): void {
		if (listener.enterXor) {
			listener.enterXor(this);
		}
	}
	// @Override
	public exitRule(listener: facListener): void {
		if (listener.exitXor) {
			listener.exitXor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: facVisitor<Result>): Result {
		if (visitor.visitXor) {
			return visitor.visitXor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NotContext extends ParserRuleContext {
	public NOT(): TerminalNode { return this.getToken(facParser.NOT, 0); }
	public input(): InputContext[];
	public input(i: number): InputContext;
	public input(i?: number): InputContext | InputContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InputContext);
		} else {
			return this.getRuleContext(i, InputContext);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(facParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return facParser.RULE_not; }
	// @Override
	public enterRule(listener: facListener): void {
		if (listener.enterNot) {
			listener.enterNot(this);
		}
	}
	// @Override
	public exitRule(listener: facListener): void {
		if (listener.exitNot) {
			listener.exitNot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: facVisitor<Result>): Result {
		if (visitor.visitNot) {
			return visitor.visitNot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabelContext extends ParserRuleContext {
	public HASH(): TerminalNode { return this.getToken(facParser.HASH, 0); }
	public LETTERS(): TerminalNode { return this.getToken(facParser.LETTERS, 0); }
	public DOUBLE_COLON(): TerminalNode { return this.getToken(facParser.DOUBLE_COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return facParser.RULE_label; }
	// @Override
	public enterRule(listener: facListener): void {
		if (listener.enterLabel) {
			listener.enterLabel(this);
		}
	}
	// @Override
	public exitRule(listener: facListener): void {
		if (listener.exitLabel) {
			listener.exitLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: facVisitor<Result>): Result {
		if (visitor.visitLabel) {
			return visitor.visitLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NopContext extends ParserRuleContext {
	public NOP(): TerminalNode { return this.getToken(facParser.NOP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return facParser.RULE_nop; }
	// @Override
	public enterRule(listener: facListener): void {
		if (listener.enterNop) {
			listener.enterNop(this);
		}
	}
	// @Override
	public exitRule(listener: facListener): void {
		if (listener.exitNop) {
			listener.exitNop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: facVisitor<Result>): Result {
		if (visitor.visitNop) {
			return visitor.visitNop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DbgContext extends ParserRuleContext {
	public DBG(): TerminalNode { return this.getToken(facParser.DBG, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return facParser.RULE_dbg; }
	// @Override
	public enterRule(listener: facListener): void {
		if (listener.enterDbg) {
			listener.enterDbg(this);
		}
	}
	// @Override
	public exitRule(listener: facListener): void {
		if (listener.exitDbg) {
			listener.exitDbg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: facVisitor<Result>): Result {
		if (visitor.visitDbg) {
			return visitor.visitDbg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReferenceContext extends ParserRuleContext {
	public HASH(): TerminalNode { return this.getToken(facParser.HASH, 0); }
	public LETTERS(): TerminalNode { return this.getToken(facParser.LETTERS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return facParser.RULE_reference; }
	// @Override
	public enterRule(listener: facListener): void {
		if (listener.enterReference) {
			listener.enterReference(this);
		}
	}
	// @Override
	public exitRule(listener: facListener): void {
		if (listener.exitReference) {
			listener.exitReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: facVisitor<Result>): Result {
		if (visitor.visitReference) {
			return visitor.visitReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InputContext extends ParserRuleContext {
	public register(): RegisterContext | undefined {
		return this.tryGetRuleContext(0, RegisterContext);
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return facParser.RULE_input; }
	// @Override
	public enterRule(listener: facListener): void {
		if (listener.enterInput) {
			listener.enterInput(this);
		}
	}
	// @Override
	public exitRule(listener: facListener): void {
		if (listener.exitInput) {
			listener.exitInput(this);
		}
	}
	// @Override
	public accept<Result>(visitor: facVisitor<Result>): Result {
		if (visitor.visitInput) {
			return visitor.visitInput(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(facParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return facParser.RULE_number; }
	// @Override
	public enterRule(listener: facListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: facListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: facVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(facParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return facParser.RULE_string; }
	// @Override
	public enterRule(listener: facListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: facListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: facVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RegisterContext extends ParserRuleContext {
	public REG(): TerminalNode { return this.getToken(facParser.REG, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return facParser.RULE_register; }
	// @Override
	public enterRule(listener: facListener): void {
		if (listener.enterRegister) {
			listener.enterRegister(this);
		}
	}
	// @Override
	public exitRule(listener: facListener): void {
		if (listener.exitRegister) {
			listener.exitRegister(this);
		}
	}
	// @Override
	public accept<Result>(visitor: facVisitor<Result>): Result {
		if (visitor.visitRegister) {
			return visitor.visitRegister(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


