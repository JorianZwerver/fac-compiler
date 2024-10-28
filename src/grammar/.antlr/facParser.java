// Generated from /Users/jorianzwerver/fac/src/grammar/fac.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class facParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		DECL=1, DEFINE=2, INSTR=3, LW=4, SW=5, MULT=6, ADD=7, ADDI=8, SHR=9, SHL=10, 
		JUMP=11, BEQ=12, BNEQ=13, OR=14, AND=15, XOR=16, NOT=17, NOP=18, DBG=19, 
		REG=20, END=21, DOUBLE_COLON=22, COMMA=23, BO=24, BC=25, DOT=26, HASH=27, 
		STRING=28, LETTERS=29, LETTER=30, NUMBER=31, NUM=32, COMMENT=33, WS=34;
	public static final int
		RULE_file = 0, RULE_declerations = 1, RULE_decleration = 2, RULE_define = 3, 
		RULE_instructions = 4, RULE_instruction = 5, RULE_lw = 6, RULE_sw = 7, 
		RULE_mult = 8, RULE_add = 9, RULE_addi = 10, RULE_shr = 11, RULE_shl = 12, 
		RULE_jump = 13, RULE_beq = 14, RULE_bneq = 15, RULE_or = 16, RULE_and = 17, 
		RULE_xor = 18, RULE_not = 19, RULE_label = 20, RULE_nop = 21, RULE_dbg = 22, 
		RULE_reference = 23, RULE_input = 24, RULE_number = 25, RULE_string = 26, 
		RULE_register = 27;
	private static String[] makeRuleNames() {
		return new String[] {
			"file", "declerations", "decleration", "define", "instructions", "instruction", 
			"lw", "sw", "mult", "add", "addi", "shr", "shl", "jump", "beq", "bneq", 
			"or", "and", "xor", "not", "label", "nop", "dbg", "reference", "input", 
			"number", "string", "register"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'.decl'", "'.define'", "'.instr'", "'lw'", "'sw'", "'mult'", "'add'", 
			"'addi'", "'shr'", "'shl'", "'j'", "'beq'", "'bneq'", "'or'", "'and'", 
			"'xor'", "'not'", "'nop'", "'dbg'", null, "';'", "':'", "','", "'('", 
			"')'", "'.'", "'#'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "DECL", "DEFINE", "INSTR", "LW", "SW", "MULT", "ADD", "ADDI", "SHR", 
			"SHL", "JUMP", "BEQ", "BNEQ", "OR", "AND", "XOR", "NOT", "NOP", "DBG", 
			"REG", "END", "DOUBLE_COLON", "COMMA", "BO", "BC", "DOT", "HASH", "STRING", 
			"LETTERS", "LETTER", "NUMBER", "NUM", "COMMENT", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "fac.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public facParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FileContext extends ParserRuleContext {
		public DeclerationsContext declerations() {
			return getRuleContext(DeclerationsContext.class,0);
		}
		public InstructionsContext instructions() {
			return getRuleContext(InstructionsContext.class,0);
		}
		public TerminalNode EOF() { return getToken(facParser.EOF, 0); }
		public FileContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_file; }
	}

	public final FileContext file() throws RecognitionException {
		FileContext _localctx = new FileContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_file);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(56);
			declerations();
			setState(57);
			instructions();
			setState(58);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DeclerationsContext extends ParserRuleContext {
		public TerminalNode DECL() { return getToken(facParser.DECL, 0); }
		public List<DeclerationContext> decleration() {
			return getRuleContexts(DeclerationContext.class);
		}
		public DeclerationContext decleration(int i) {
			return getRuleContext(DeclerationContext.class,i);
		}
		public DeclerationsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declerations; }
	}

	public final DeclerationsContext declerations() throws RecognitionException {
		DeclerationsContext _localctx = new DeclerationsContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_declerations);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(60);
			match(DECL);
			setState(64);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==DEFINE) {
				{
				{
				setState(61);
				decleration();
				}
				}
				setState(66);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DeclerationContext extends ParserRuleContext {
		public DefineContext define() {
			return getRuleContext(DefineContext.class,0);
		}
		public DeclerationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_decleration; }
	}

	public final DeclerationContext decleration() throws RecognitionException {
		DeclerationContext _localctx = new DeclerationContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_decleration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(67);
			define();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DefineContext extends ParserRuleContext {
		public TerminalNode DEFINE() { return getToken(facParser.DEFINE, 0); }
		public TerminalNode COMMA() { return getToken(facParser.COMMA, 0); }
		public TerminalNode STRING() { return getToken(facParser.STRING, 0); }
		public TerminalNode REG() { return getToken(facParser.REG, 0); }
		public TerminalNode NUMBER() { return getToken(facParser.NUMBER, 0); }
		public DefineContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_define; }
	}

	public final DefineContext define() throws RecognitionException {
		DefineContext _localctx = new DefineContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_define);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(69);
			match(DEFINE);
			setState(70);
			_la = _input.LA(1);
			if ( !(_la==REG || _la==NUMBER) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(71);
			match(COMMA);
			setState(72);
			match(STRING);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class InstructionsContext extends ParserRuleContext {
		public TerminalNode INSTR() { return getToken(facParser.INSTR, 0); }
		public List<InstructionContext> instruction() {
			return getRuleContexts(InstructionContext.class);
		}
		public InstructionContext instruction(int i) {
			return getRuleContext(InstructionContext.class,i);
		}
		public InstructionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_instructions; }
	}

	public final InstructionsContext instructions() throws RecognitionException {
		InstructionsContext _localctx = new InstructionsContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_instructions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(74);
			match(INSTR);
			setState(78);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 135266288L) != 0)) {
				{
				{
				setState(75);
				instruction();
				}
				}
				setState(80);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class InstructionContext extends ParserRuleContext {
		public LwContext lw() {
			return getRuleContext(LwContext.class,0);
		}
		public SwContext sw() {
			return getRuleContext(SwContext.class,0);
		}
		public MultContext mult() {
			return getRuleContext(MultContext.class,0);
		}
		public AddContext add() {
			return getRuleContext(AddContext.class,0);
		}
		public AddiContext addi() {
			return getRuleContext(AddiContext.class,0);
		}
		public ShrContext shr() {
			return getRuleContext(ShrContext.class,0);
		}
		public ShlContext shl() {
			return getRuleContext(ShlContext.class,0);
		}
		public JumpContext jump() {
			return getRuleContext(JumpContext.class,0);
		}
		public BeqContext beq() {
			return getRuleContext(BeqContext.class,0);
		}
		public BneqContext bneq() {
			return getRuleContext(BneqContext.class,0);
		}
		public OrContext or() {
			return getRuleContext(OrContext.class,0);
		}
		public AndContext and() {
			return getRuleContext(AndContext.class,0);
		}
		public XorContext xor() {
			return getRuleContext(XorContext.class,0);
		}
		public NotContext not() {
			return getRuleContext(NotContext.class,0);
		}
		public NopContext nop() {
			return getRuleContext(NopContext.class,0);
		}
		public DbgContext dbg() {
			return getRuleContext(DbgContext.class,0);
		}
		public LabelContext label() {
			return getRuleContext(LabelContext.class,0);
		}
		public InstructionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_instruction; }
	}

	public final InstructionContext instruction() throws RecognitionException {
		InstructionContext _localctx = new InstructionContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_instruction);
		try {
			setState(98);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LW:
				enterOuterAlt(_localctx, 1);
				{
				setState(81);
				lw();
				}
				break;
			case SW:
				enterOuterAlt(_localctx, 2);
				{
				setState(82);
				sw();
				}
				break;
			case MULT:
				enterOuterAlt(_localctx, 3);
				{
				setState(83);
				mult();
				}
				break;
			case ADD:
				enterOuterAlt(_localctx, 4);
				{
				setState(84);
				add();
				}
				break;
			case ADDI:
				enterOuterAlt(_localctx, 5);
				{
				setState(85);
				addi();
				}
				break;
			case SHR:
				enterOuterAlt(_localctx, 6);
				{
				setState(86);
				shr();
				}
				break;
			case SHL:
				enterOuterAlt(_localctx, 7);
				{
				setState(87);
				shl();
				}
				break;
			case JUMP:
				enterOuterAlt(_localctx, 8);
				{
				setState(88);
				jump();
				}
				break;
			case BEQ:
				enterOuterAlt(_localctx, 9);
				{
				setState(89);
				beq();
				}
				break;
			case BNEQ:
				enterOuterAlt(_localctx, 10);
				{
				setState(90);
				bneq();
				}
				break;
			case OR:
				enterOuterAlt(_localctx, 11);
				{
				setState(91);
				or();
				}
				break;
			case AND:
				enterOuterAlt(_localctx, 12);
				{
				setState(92);
				and();
				}
				break;
			case XOR:
				enterOuterAlt(_localctx, 13);
				{
				setState(93);
				xor();
				}
				break;
			case NOT:
				enterOuterAlt(_localctx, 14);
				{
				setState(94);
				not();
				}
				break;
			case NOP:
				enterOuterAlt(_localctx, 15);
				{
				setState(95);
				nop();
				}
				break;
			case DBG:
				enterOuterAlt(_localctx, 16);
				{
				setState(96);
				dbg();
				}
				break;
			case HASH:
				enterOuterAlt(_localctx, 17);
				{
				setState(97);
				label();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LwContext extends ParserRuleContext {
		public TerminalNode LW() { return getToken(facParser.LW, 0); }
		public List<InputContext> input() {
			return getRuleContexts(InputContext.class);
		}
		public InputContext input(int i) {
			return getRuleContext(InputContext.class,i);
		}
		public TerminalNode COMMA() { return getToken(facParser.COMMA, 0); }
		public LwContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lw; }
	}

	public final LwContext lw() throws RecognitionException {
		LwContext _localctx = new LwContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_lw);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(100);
			match(LW);
			setState(101);
			input();
			setState(102);
			match(COMMA);
			setState(103);
			input();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SwContext extends ParserRuleContext {
		public TerminalNode SW() { return getToken(facParser.SW, 0); }
		public List<InputContext> input() {
			return getRuleContexts(InputContext.class);
		}
		public InputContext input(int i) {
			return getRuleContext(InputContext.class,i);
		}
		public TerminalNode COMMA() { return getToken(facParser.COMMA, 0); }
		public SwContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sw; }
	}

	public final SwContext sw() throws RecognitionException {
		SwContext _localctx = new SwContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_sw);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(105);
			match(SW);
			setState(106);
			input();
			setState(107);
			match(COMMA);
			setState(108);
			input();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MultContext extends ParserRuleContext {
		public TerminalNode MULT() { return getToken(facParser.MULT, 0); }
		public List<InputContext> input() {
			return getRuleContexts(InputContext.class);
		}
		public InputContext input(int i) {
			return getRuleContext(InputContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(facParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(facParser.COMMA, i);
		}
		public MultContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mult; }
	}

	public final MultContext mult() throws RecognitionException {
		MultContext _localctx = new MultContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_mult);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(110);
			match(MULT);
			setState(111);
			input();
			setState(112);
			match(COMMA);
			setState(113);
			input();
			setState(114);
			match(COMMA);
			setState(115);
			input();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AddContext extends ParserRuleContext {
		public TerminalNode ADD() { return getToken(facParser.ADD, 0); }
		public List<InputContext> input() {
			return getRuleContexts(InputContext.class);
		}
		public InputContext input(int i) {
			return getRuleContext(InputContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(facParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(facParser.COMMA, i);
		}
		public AddContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_add; }
	}

	public final AddContext add() throws RecognitionException {
		AddContext _localctx = new AddContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_add);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(117);
			match(ADD);
			setState(118);
			input();
			setState(119);
			match(COMMA);
			setState(120);
			input();
			setState(121);
			match(COMMA);
			setState(122);
			input();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AddiContext extends ParserRuleContext {
		public TerminalNode ADDI() { return getToken(facParser.ADDI, 0); }
		public List<InputContext> input() {
			return getRuleContexts(InputContext.class);
		}
		public InputContext input(int i) {
			return getRuleContext(InputContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(facParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(facParser.COMMA, i);
		}
		public AddiContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_addi; }
	}

	public final AddiContext addi() throws RecognitionException {
		AddiContext _localctx = new AddiContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_addi);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(124);
			match(ADDI);
			setState(125);
			input();
			setState(126);
			match(COMMA);
			setState(127);
			input();
			setState(128);
			match(COMMA);
			setState(129);
			input();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ShrContext extends ParserRuleContext {
		public TerminalNode SHR() { return getToken(facParser.SHR, 0); }
		public List<InputContext> input() {
			return getRuleContexts(InputContext.class);
		}
		public InputContext input(int i) {
			return getRuleContext(InputContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(facParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(facParser.COMMA, i);
		}
		public ShrContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_shr; }
	}

	public final ShrContext shr() throws RecognitionException {
		ShrContext _localctx = new ShrContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_shr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(131);
			match(SHR);
			setState(132);
			input();
			setState(133);
			match(COMMA);
			setState(134);
			input();
			setState(135);
			match(COMMA);
			setState(136);
			input();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ShlContext extends ParserRuleContext {
		public TerminalNode SHL() { return getToken(facParser.SHL, 0); }
		public List<InputContext> input() {
			return getRuleContexts(InputContext.class);
		}
		public InputContext input(int i) {
			return getRuleContext(InputContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(facParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(facParser.COMMA, i);
		}
		public ShlContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_shl; }
	}

	public final ShlContext shl() throws RecognitionException {
		ShlContext _localctx = new ShlContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_shl);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(138);
			match(SHL);
			setState(139);
			input();
			setState(140);
			match(COMMA);
			setState(141);
			input();
			setState(142);
			match(COMMA);
			setState(143);
			input();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class JumpContext extends ParserRuleContext {
		public TerminalNode JUMP() { return getToken(facParser.JUMP, 0); }
		public ReferenceContext reference() {
			return getRuleContext(ReferenceContext.class,0);
		}
		public JumpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_jump; }
	}

	public final JumpContext jump() throws RecognitionException {
		JumpContext _localctx = new JumpContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_jump);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(145);
			match(JUMP);
			setState(146);
			reference();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BeqContext extends ParserRuleContext {
		public TerminalNode BEQ() { return getToken(facParser.BEQ, 0); }
		public List<InputContext> input() {
			return getRuleContexts(InputContext.class);
		}
		public InputContext input(int i) {
			return getRuleContext(InputContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(facParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(facParser.COMMA, i);
		}
		public ReferenceContext reference() {
			return getRuleContext(ReferenceContext.class,0);
		}
		public BeqContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_beq; }
	}

	public final BeqContext beq() throws RecognitionException {
		BeqContext _localctx = new BeqContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_beq);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(148);
			match(BEQ);
			setState(149);
			input();
			setState(150);
			match(COMMA);
			setState(151);
			input();
			setState(152);
			match(COMMA);
			setState(153);
			reference();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BneqContext extends ParserRuleContext {
		public TerminalNode BNEQ() { return getToken(facParser.BNEQ, 0); }
		public List<InputContext> input() {
			return getRuleContexts(InputContext.class);
		}
		public InputContext input(int i) {
			return getRuleContext(InputContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(facParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(facParser.COMMA, i);
		}
		public ReferenceContext reference() {
			return getRuleContext(ReferenceContext.class,0);
		}
		public BneqContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bneq; }
	}

	public final BneqContext bneq() throws RecognitionException {
		BneqContext _localctx = new BneqContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_bneq);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(155);
			match(BNEQ);
			setState(156);
			input();
			setState(157);
			match(COMMA);
			setState(158);
			input();
			setState(159);
			match(COMMA);
			setState(160);
			reference();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class OrContext extends ParserRuleContext {
		public TerminalNode OR() { return getToken(facParser.OR, 0); }
		public List<InputContext> input() {
			return getRuleContexts(InputContext.class);
		}
		public InputContext input(int i) {
			return getRuleContext(InputContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(facParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(facParser.COMMA, i);
		}
		public OrContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_or; }
	}

	public final OrContext or() throws RecognitionException {
		OrContext _localctx = new OrContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_or);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(162);
			match(OR);
			setState(163);
			input();
			setState(164);
			match(COMMA);
			setState(165);
			input();
			setState(166);
			match(COMMA);
			setState(167);
			input();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AndContext extends ParserRuleContext {
		public TerminalNode AND() { return getToken(facParser.AND, 0); }
		public List<InputContext> input() {
			return getRuleContexts(InputContext.class);
		}
		public InputContext input(int i) {
			return getRuleContext(InputContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(facParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(facParser.COMMA, i);
		}
		public AndContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_and; }
	}

	public final AndContext and() throws RecognitionException {
		AndContext _localctx = new AndContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_and);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(169);
			match(AND);
			setState(170);
			input();
			setState(171);
			match(COMMA);
			setState(172);
			input();
			setState(173);
			match(COMMA);
			setState(174);
			input();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class XorContext extends ParserRuleContext {
		public TerminalNode XOR() { return getToken(facParser.XOR, 0); }
		public List<InputContext> input() {
			return getRuleContexts(InputContext.class);
		}
		public InputContext input(int i) {
			return getRuleContext(InputContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(facParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(facParser.COMMA, i);
		}
		public XorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_xor; }
	}

	public final XorContext xor() throws RecognitionException {
		XorContext _localctx = new XorContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_xor);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(176);
			match(XOR);
			setState(177);
			input();
			setState(178);
			match(COMMA);
			setState(179);
			input();
			setState(180);
			match(COMMA);
			setState(181);
			input();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NotContext extends ParserRuleContext {
		public TerminalNode NOT() { return getToken(facParser.NOT, 0); }
		public List<InputContext> input() {
			return getRuleContexts(InputContext.class);
		}
		public InputContext input(int i) {
			return getRuleContext(InputContext.class,i);
		}
		public TerminalNode COMMA() { return getToken(facParser.COMMA, 0); }
		public NotContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_not; }
	}

	public final NotContext not() throws RecognitionException {
		NotContext _localctx = new NotContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_not);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(183);
			match(NOT);
			setState(184);
			input();
			setState(185);
			match(COMMA);
			setState(186);
			input();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LabelContext extends ParserRuleContext {
		public TerminalNode HASH() { return getToken(facParser.HASH, 0); }
		public TerminalNode LETTERS() { return getToken(facParser.LETTERS, 0); }
		public TerminalNode DOUBLE_COLON() { return getToken(facParser.DOUBLE_COLON, 0); }
		public LabelContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_label; }
	}

	public final LabelContext label() throws RecognitionException {
		LabelContext _localctx = new LabelContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_label);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(188);
			match(HASH);
			setState(189);
			match(LETTERS);
			setState(190);
			match(DOUBLE_COLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NopContext extends ParserRuleContext {
		public TerminalNode NOP() { return getToken(facParser.NOP, 0); }
		public NopContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nop; }
	}

	public final NopContext nop() throws RecognitionException {
		NopContext _localctx = new NopContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_nop);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(192);
			match(NOP);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DbgContext extends ParserRuleContext {
		public TerminalNode DBG() { return getToken(facParser.DBG, 0); }
		public DbgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dbg; }
	}

	public final DbgContext dbg() throws RecognitionException {
		DbgContext _localctx = new DbgContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_dbg);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(194);
			match(DBG);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ReferenceContext extends ParserRuleContext {
		public TerminalNode HASH() { return getToken(facParser.HASH, 0); }
		public TerminalNode LETTERS() { return getToken(facParser.LETTERS, 0); }
		public ReferenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_reference; }
	}

	public final ReferenceContext reference() throws RecognitionException {
		ReferenceContext _localctx = new ReferenceContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_reference);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(196);
			match(HASH);
			setState(197);
			match(LETTERS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class InputContext extends ParserRuleContext {
		public RegisterContext register() {
			return getRuleContext(RegisterContext.class,0);
		}
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public NumberContext number() {
			return getRuleContext(NumberContext.class,0);
		}
		public InputContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_input; }
	}

	public final InputContext input() throws RecognitionException {
		InputContext _localctx = new InputContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_input);
		try {
			setState(202);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case REG:
				enterOuterAlt(_localctx, 1);
				{
				setState(199);
				register();
				}
				break;
			case STRING:
				enterOuterAlt(_localctx, 2);
				{
				setState(200);
				string();
				}
				break;
			case NUMBER:
				enterOuterAlt(_localctx, 3);
				{
				setState(201);
				number();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NumberContext extends ParserRuleContext {
		public TerminalNode NUMBER() { return getToken(facParser.NUMBER, 0); }
		public NumberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_number; }
	}

	public final NumberContext number() throws RecognitionException {
		NumberContext _localctx = new NumberContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_number);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(204);
			match(NUMBER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StringContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(facParser.STRING, 0); }
		public StringContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_string; }
	}

	public final StringContext string() throws RecognitionException {
		StringContext _localctx = new StringContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_string);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(206);
			match(STRING);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class RegisterContext extends ParserRuleContext {
		public TerminalNode REG() { return getToken(facParser.REG, 0); }
		public RegisterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_register; }
	}

	public final RegisterContext register() throws RecognitionException {
		RegisterContext _localctx = new RegisterContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_register);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(208);
			match(REG);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\"\u00d3\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007\u0015"+
		"\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002\u0018\u0007\u0018"+
		"\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a\u0002\u001b\u0007\u001b"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001"+
		"\u0005\u0001?\b\u0001\n\u0001\f\u0001B\t\u0001\u0001\u0002\u0001\u0002"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0004"+
		"\u0001\u0004\u0005\u0004M\b\u0004\n\u0004\f\u0004P\t\u0004\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0003\u0005c\b\u0005"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001"+
		"\r\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001"+
		"\u000e\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0001"+
		"\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001"+
		"\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0011\u0001"+
		"\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001"+
		"\u0012\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001"+
		"\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0015\u0001\u0015\u0001"+
		"\u0016\u0001\u0016\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0018\u0001"+
		"\u0018\u0001\u0018\u0003\u0018\u00cb\b\u0018\u0001\u0019\u0001\u0019\u0001"+
		"\u001a\u0001\u001a\u0001\u001b\u0001\u001b\u0001\u001b\u0000\u0000\u001c"+
		"\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a"+
		"\u001c\u001e \"$&(*,.0246\u0000\u0001\u0002\u0000\u0014\u0014\u001f\u001f"+
		"\u00ca\u00008\u0001\u0000\u0000\u0000\u0002<\u0001\u0000\u0000\u0000\u0004"+
		"C\u0001\u0000\u0000\u0000\u0006E\u0001\u0000\u0000\u0000\bJ\u0001\u0000"+
		"\u0000\u0000\nb\u0001\u0000\u0000\u0000\fd\u0001\u0000\u0000\u0000\u000e"+
		"i\u0001\u0000\u0000\u0000\u0010n\u0001\u0000\u0000\u0000\u0012u\u0001"+
		"\u0000\u0000\u0000\u0014|\u0001\u0000\u0000\u0000\u0016\u0083\u0001\u0000"+
		"\u0000\u0000\u0018\u008a\u0001\u0000\u0000\u0000\u001a\u0091\u0001\u0000"+
		"\u0000\u0000\u001c\u0094\u0001\u0000\u0000\u0000\u001e\u009b\u0001\u0000"+
		"\u0000\u0000 \u00a2\u0001\u0000\u0000\u0000\"\u00a9\u0001\u0000\u0000"+
		"\u0000$\u00b0\u0001\u0000\u0000\u0000&\u00b7\u0001\u0000\u0000\u0000("+
		"\u00bc\u0001\u0000\u0000\u0000*\u00c0\u0001\u0000\u0000\u0000,\u00c2\u0001"+
		"\u0000\u0000\u0000.\u00c4\u0001\u0000\u0000\u00000\u00ca\u0001\u0000\u0000"+
		"\u00002\u00cc\u0001\u0000\u0000\u00004\u00ce\u0001\u0000\u0000\u00006"+
		"\u00d0\u0001\u0000\u0000\u000089\u0003\u0002\u0001\u00009:\u0003\b\u0004"+
		"\u0000:;\u0005\u0000\u0000\u0001;\u0001\u0001\u0000\u0000\u0000<@\u0005"+
		"\u0001\u0000\u0000=?\u0003\u0004\u0002\u0000>=\u0001\u0000\u0000\u0000"+
		"?B\u0001\u0000\u0000\u0000@>\u0001\u0000\u0000\u0000@A\u0001\u0000\u0000"+
		"\u0000A\u0003\u0001\u0000\u0000\u0000B@\u0001\u0000\u0000\u0000CD\u0003"+
		"\u0006\u0003\u0000D\u0005\u0001\u0000\u0000\u0000EF\u0005\u0002\u0000"+
		"\u0000FG\u0007\u0000\u0000\u0000GH\u0005\u0017\u0000\u0000HI\u0005\u001c"+
		"\u0000\u0000I\u0007\u0001\u0000\u0000\u0000JN\u0005\u0003\u0000\u0000"+
		"KM\u0003\n\u0005\u0000LK\u0001\u0000\u0000\u0000MP\u0001\u0000\u0000\u0000"+
		"NL\u0001\u0000\u0000\u0000NO\u0001\u0000\u0000\u0000O\t\u0001\u0000\u0000"+
		"\u0000PN\u0001\u0000\u0000\u0000Qc\u0003\f\u0006\u0000Rc\u0003\u000e\u0007"+
		"\u0000Sc\u0003\u0010\b\u0000Tc\u0003\u0012\t\u0000Uc\u0003\u0014\n\u0000"+
		"Vc\u0003\u0016\u000b\u0000Wc\u0003\u0018\f\u0000Xc\u0003\u001a\r\u0000"+
		"Yc\u0003\u001c\u000e\u0000Zc\u0003\u001e\u000f\u0000[c\u0003 \u0010\u0000"+
		"\\c\u0003\"\u0011\u0000]c\u0003$\u0012\u0000^c\u0003&\u0013\u0000_c\u0003"+
		"*\u0015\u0000`c\u0003,\u0016\u0000ac\u0003(\u0014\u0000bQ\u0001\u0000"+
		"\u0000\u0000bR\u0001\u0000\u0000\u0000bS\u0001\u0000\u0000\u0000bT\u0001"+
		"\u0000\u0000\u0000bU\u0001\u0000\u0000\u0000bV\u0001\u0000\u0000\u0000"+
		"bW\u0001\u0000\u0000\u0000bX\u0001\u0000\u0000\u0000bY\u0001\u0000\u0000"+
		"\u0000bZ\u0001\u0000\u0000\u0000b[\u0001\u0000\u0000\u0000b\\\u0001\u0000"+
		"\u0000\u0000b]\u0001\u0000\u0000\u0000b^\u0001\u0000\u0000\u0000b_\u0001"+
		"\u0000\u0000\u0000b`\u0001\u0000\u0000\u0000ba\u0001\u0000\u0000\u0000"+
		"c\u000b\u0001\u0000\u0000\u0000de\u0005\u0004\u0000\u0000ef\u00030\u0018"+
		"\u0000fg\u0005\u0017\u0000\u0000gh\u00030\u0018\u0000h\r\u0001\u0000\u0000"+
		"\u0000ij\u0005\u0005\u0000\u0000jk\u00030\u0018\u0000kl\u0005\u0017\u0000"+
		"\u0000lm\u00030\u0018\u0000m\u000f\u0001\u0000\u0000\u0000no\u0005\u0006"+
		"\u0000\u0000op\u00030\u0018\u0000pq\u0005\u0017\u0000\u0000qr\u00030\u0018"+
		"\u0000rs\u0005\u0017\u0000\u0000st\u00030\u0018\u0000t\u0011\u0001\u0000"+
		"\u0000\u0000uv\u0005\u0007\u0000\u0000vw\u00030\u0018\u0000wx\u0005\u0017"+
		"\u0000\u0000xy\u00030\u0018\u0000yz\u0005\u0017\u0000\u0000z{\u00030\u0018"+
		"\u0000{\u0013\u0001\u0000\u0000\u0000|}\u0005\b\u0000\u0000}~\u00030\u0018"+
		"\u0000~\u007f\u0005\u0017\u0000\u0000\u007f\u0080\u00030\u0018\u0000\u0080"+
		"\u0081\u0005\u0017\u0000\u0000\u0081\u0082\u00030\u0018\u0000\u0082\u0015"+
		"\u0001\u0000\u0000\u0000\u0083\u0084\u0005\t\u0000\u0000\u0084\u0085\u0003"+
		"0\u0018\u0000\u0085\u0086\u0005\u0017\u0000\u0000\u0086\u0087\u00030\u0018"+
		"\u0000\u0087\u0088\u0005\u0017\u0000\u0000\u0088\u0089\u00030\u0018\u0000"+
		"\u0089\u0017\u0001\u0000\u0000\u0000\u008a\u008b\u0005\n\u0000\u0000\u008b"+
		"\u008c\u00030\u0018\u0000\u008c\u008d\u0005\u0017\u0000\u0000\u008d\u008e"+
		"\u00030\u0018\u0000\u008e\u008f\u0005\u0017\u0000\u0000\u008f\u0090\u0003"+
		"0\u0018\u0000\u0090\u0019\u0001\u0000\u0000\u0000\u0091\u0092\u0005\u000b"+
		"\u0000\u0000\u0092\u0093\u0003.\u0017\u0000\u0093\u001b\u0001\u0000\u0000"+
		"\u0000\u0094\u0095\u0005\f\u0000\u0000\u0095\u0096\u00030\u0018\u0000"+
		"\u0096\u0097\u0005\u0017\u0000\u0000\u0097\u0098\u00030\u0018\u0000\u0098"+
		"\u0099\u0005\u0017\u0000\u0000\u0099\u009a\u0003.\u0017\u0000\u009a\u001d"+
		"\u0001\u0000\u0000\u0000\u009b\u009c\u0005\r\u0000\u0000\u009c\u009d\u0003"+
		"0\u0018\u0000\u009d\u009e\u0005\u0017\u0000\u0000\u009e\u009f\u00030\u0018"+
		"\u0000\u009f\u00a0\u0005\u0017\u0000\u0000\u00a0\u00a1\u0003.\u0017\u0000"+
		"\u00a1\u001f\u0001\u0000\u0000\u0000\u00a2\u00a3\u0005\u000e\u0000\u0000"+
		"\u00a3\u00a4\u00030\u0018\u0000\u00a4\u00a5\u0005\u0017\u0000\u0000\u00a5"+
		"\u00a6\u00030\u0018\u0000\u00a6\u00a7\u0005\u0017\u0000\u0000\u00a7\u00a8"+
		"\u00030\u0018\u0000\u00a8!\u0001\u0000\u0000\u0000\u00a9\u00aa\u0005\u000f"+
		"\u0000\u0000\u00aa\u00ab\u00030\u0018\u0000\u00ab\u00ac\u0005\u0017\u0000"+
		"\u0000\u00ac\u00ad\u00030\u0018\u0000\u00ad\u00ae\u0005\u0017\u0000\u0000"+
		"\u00ae\u00af\u00030\u0018\u0000\u00af#\u0001\u0000\u0000\u0000\u00b0\u00b1"+
		"\u0005\u0010\u0000\u0000\u00b1\u00b2\u00030\u0018\u0000\u00b2\u00b3\u0005"+
		"\u0017\u0000\u0000\u00b3\u00b4\u00030\u0018\u0000\u00b4\u00b5\u0005\u0017"+
		"\u0000\u0000\u00b5\u00b6\u00030\u0018\u0000\u00b6%\u0001\u0000\u0000\u0000"+
		"\u00b7\u00b8\u0005\u0011\u0000\u0000\u00b8\u00b9\u00030\u0018\u0000\u00b9"+
		"\u00ba\u0005\u0017\u0000\u0000\u00ba\u00bb\u00030\u0018\u0000\u00bb\'"+
		"\u0001\u0000\u0000\u0000\u00bc\u00bd\u0005\u001b\u0000\u0000\u00bd\u00be"+
		"\u0005\u001d\u0000\u0000\u00be\u00bf\u0005\u0016\u0000\u0000\u00bf)\u0001"+
		"\u0000\u0000\u0000\u00c0\u00c1\u0005\u0012\u0000\u0000\u00c1+\u0001\u0000"+
		"\u0000\u0000\u00c2\u00c3\u0005\u0013\u0000\u0000\u00c3-\u0001\u0000\u0000"+
		"\u0000\u00c4\u00c5\u0005\u001b\u0000\u0000\u00c5\u00c6\u0005\u001d\u0000"+
		"\u0000\u00c6/\u0001\u0000\u0000\u0000\u00c7\u00cb\u00036\u001b\u0000\u00c8"+
		"\u00cb\u00034\u001a\u0000\u00c9\u00cb\u00032\u0019\u0000\u00ca\u00c7\u0001"+
		"\u0000\u0000\u0000\u00ca\u00c8\u0001\u0000\u0000\u0000\u00ca\u00c9\u0001"+
		"\u0000\u0000\u0000\u00cb1\u0001\u0000\u0000\u0000\u00cc\u00cd\u0005\u001f"+
		"\u0000\u0000\u00cd3\u0001\u0000\u0000\u0000\u00ce\u00cf\u0005\u001c\u0000"+
		"\u0000\u00cf5\u0001\u0000\u0000\u0000\u00d0\u00d1\u0005\u0014\u0000\u0000"+
		"\u00d17\u0001\u0000\u0000\u0000\u0004@Nb\u00ca";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}