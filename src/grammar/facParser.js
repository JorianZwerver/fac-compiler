"use strict";
// Generated from node_modules/grammar/fac.g4 by ANTLR 4.9.0-SNAPSHOT
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LbContext = exports.LwContext = exports.InstructionContext = exports.InstructionsContext = exports.FileContext = exports.facParser = void 0;
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class facParser extends Parser_1.Parser {
    static LW = 1;
    static LB = 2;
    static DATA = 3;
    static END = 4;
    static COMMENT = 5;
    static WS = 6;
    static RULE_file = 0;
    static RULE_instructions = 1;
    static RULE_instruction = 2;
    static RULE_lw = 3;
    static RULE_lb = 4;
    // tslint:disable:no-trailing-whitespace
    static ruleNames = [
        "file", "instructions", "instruction", "lw", "lb",
    ];
    static _LITERAL_NAMES = [
        undefined, "'lw'", "'lb'", "'.data'", "';'",
    ];
    static _SYMBOLIC_NAMES = [
        undefined, "LW", "LB", "DATA", "END", "COMMENT", "WS",
    ];
    static VOCABULARY = new VocabularyImpl_1.VocabularyImpl(facParser._LITERAL_NAMES, facParser._SYMBOLIC_NAMES, []);
    // @Override
    // @NotNull
    get vocabulary() {
        return facParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "fac.g4"; }
    // @Override
    get ruleNames() { return facParser.ruleNames; }
    // @Override
    get serializedATN() { return facParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(facParser._ATN, this);
    }
    // @RuleVersion(0)
    file() {
        let _localctx = new FileContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, facParser.RULE_file);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 10;
                this.instructions();
                this.state = 11;
                this.match(facParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    instructions() {
        let _localctx = new InstructionsContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, facParser.RULE_instructions);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 16;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === facParser.LW || _la === facParser.LB) {
                    {
                        {
                            this.state = 13;
                            this.instruction();
                        }
                    }
                    this.state = 18;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    instruction() {
        let _localctx = new InstructionContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, facParser.RULE_instruction);
        try {
            this.state = 21;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case facParser.LW:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 19;
                        this.lw();
                    }
                    break;
                case facParser.LB:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 20;
                        this.lb();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    lw() {
        let _localctx = new LwContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, facParser.RULE_lw);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 23;
                this.match(facParser.LW);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    lb() {
        let _localctx = new LbContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, facParser.RULE_lb);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 25;
                this.match(facParser.LB);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    static _serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\b\x1E\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03\x02" +
        "\x03\x02\x03\x02\x03\x03\x07\x03\x11\n\x03\f\x03\x0E\x03\x14\v\x03\x03" +
        "\x04\x03\x04\x05\x04\x18\n\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06" +
        "\x02\x02\x02\x07\x02\x02\x04\x02\x06\x02\b\x02\n\x02\x02\x02\x02\x1A\x02" +
        "\f\x03\x02\x02\x02\x04\x12\x03\x02\x02\x02\x06\x17\x03\x02\x02\x02\b\x19" +
        "\x03\x02\x02\x02\n\x1B\x03\x02\x02\x02\f\r\x05\x04\x03\x02\r\x0E\x07\x02" +
        "\x02\x03\x0E\x03\x03\x02\x02\x02\x0F\x11\x05\x06\x04\x02\x10\x0F\x03\x02" +
        "\x02\x02\x11\x14\x03\x02\x02\x02\x12\x10\x03\x02\x02\x02\x12\x13\x03\x02" +
        "\x02\x02\x13\x05\x03\x02\x02\x02\x14\x12\x03\x02\x02\x02\x15\x18\x05\b" +
        "\x05\x02\x16\x18\x05\n\x06\x02\x17\x15\x03\x02\x02\x02\x17\x16\x03\x02" +
        "\x02\x02\x18\x07\x03\x02\x02\x02\x19\x1A\x07\x03\x02\x02\x1A\t\x03\x02" +
        "\x02\x02\x1B\x1C\x07\x04\x02\x02\x1C\v\x03\x02\x02\x02\x04\x12\x17";
    static __ATN;
    static get _ATN() {
        if (!facParser.__ATN) {
            facParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(facParser._serializedATN));
        }
        return facParser.__ATN;
    }
}
exports.facParser = facParser;
class FileContext extends ParserRuleContext_1.ParserRuleContext {
    instructions() {
        return this.getRuleContext(0, InstructionsContext);
    }
    EOF() { return this.getToken(facParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return facParser.RULE_file; }
    // @Override
    enterRule(listener) {
        if (listener.enterFile) {
            listener.enterFile(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFile) {
            listener.exitFile(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFile) {
            return visitor.visitFile(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FileContext = FileContext;
class InstructionsContext extends ParserRuleContext_1.ParserRuleContext {
    instruction(i) {
        if (i === undefined) {
            return this.getRuleContexts(InstructionContext);
        }
        else {
            return this.getRuleContext(i, InstructionContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return facParser.RULE_instructions; }
    // @Override
    enterRule(listener) {
        if (listener.enterInstructions) {
            listener.enterInstructions(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInstructions) {
            listener.exitInstructions(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInstructions) {
            return visitor.visitInstructions(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InstructionsContext = InstructionsContext;
class InstructionContext extends ParserRuleContext_1.ParserRuleContext {
    lw() {
        return this.tryGetRuleContext(0, LwContext);
    }
    lb() {
        return this.tryGetRuleContext(0, LbContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return facParser.RULE_instruction; }
    // @Override
    enterRule(listener) {
        if (listener.enterInstruction) {
            listener.enterInstruction(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInstruction) {
            listener.exitInstruction(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInstruction) {
            return visitor.visitInstruction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InstructionContext = InstructionContext;
class LwContext extends ParserRuleContext_1.ParserRuleContext {
    LW() { return this.getToken(facParser.LW, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return facParser.RULE_lw; }
    // @Override
    enterRule(listener) {
        if (listener.enterLw) {
            listener.enterLw(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLw) {
            listener.exitLw(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLw) {
            return visitor.visitLw(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LwContext = LwContext;
class LbContext extends ParserRuleContext_1.ParserRuleContext {
    LB() { return this.getToken(facParser.LB, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return facParser.RULE_lb; }
    // @Override
    enterRule(listener) {
        if (listener.enterLb) {
            listener.enterLb(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLb) {
            listener.exitLb(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLb) {
            return visitor.visitLb(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LbContext = LbContext;
//# sourceMappingURL=facParser.js.map