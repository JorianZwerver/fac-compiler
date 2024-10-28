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
exports.facLexer = void 0;
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const Lexer_1 = require("antlr4ts/Lexer");
const LexerATNSimulator_1 = require("antlr4ts/atn/LexerATNSimulator");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class facLexer extends Lexer_1.Lexer {
    static LW = 1;
    static LB = 2;
    static DATA = 3;
    static END = 4;
    static COMMENT = 5;
    static WS = 6;
    // tslint:disable:no-trailing-whitespace
    static channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    static modeNames = [
        "DEFAULT_MODE",
    ];
    static ruleNames = [
        "LW", "LB", "DATA", "END", "COMMENT", "WS",
    ];
    static _LITERAL_NAMES = [
        undefined, "'lw'", "'lb'", "'.data'", "';'",
    ];
    static _SYMBOLIC_NAMES = [
        undefined, "LW", "LB", "DATA", "END", "COMMENT", "WS",
    ];
    static VOCABULARY = new VocabularyImpl_1.VocabularyImpl(facLexer._LITERAL_NAMES, facLexer._SYMBOLIC_NAMES, []);
    // @Override
    // @NotNull
    get vocabulary() {
        return facLexer.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    constructor(input) {
        super(input);
        this._interp = new LexerATNSimulator_1.LexerATNSimulator(facLexer._ATN, this);
    }
    // @Override
    get grammarFileName() { return "fac.g4"; }
    // @Override
    get ruleNames() { return facLexer.ruleNames; }
    // @Override
    get serializedATN() { return facLexer._serializedATN; }
    // @Override
    get channelNames() { return facLexer.channelNames; }
    // @Override
    get modeNames() { return facLexer.modeNames; }
    static _serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\b-\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x07" +
        "\x06 \n\x06\f\x06\x0E\x06#\v\x06\x03\x06\x03\x06\x03\x07\x06\x07(\n\x07" +
        "\r\x07\x0E\x07)\x03\x07\x03\x07\x02\x02\x02\b\x03\x02\x03\x05\x02\x04" +
        "\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x03\x02\x04\x04\x02\f\f\x0F\x0F" +
        "\x05\x02\v\f\x0F\x0F\"\"\x02.\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02" +
        "\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02" +
        "\x02\x02\r\x03\x02\x02\x02\x03\x0F\x03\x02\x02\x02\x05\x12\x03\x02\x02" +
        "\x02\x07\x15\x03\x02\x02\x02\t\x1B\x03\x02\x02\x02\v\x1D\x03\x02\x02\x02" +
        "\r\'\x03\x02\x02\x02\x0F\x10\x07n\x02\x02\x10\x11\x07y\x02\x02\x11\x04" +
        "\x03\x02\x02\x02\x12\x13\x07n\x02\x02\x13\x14\x07d\x02\x02\x14\x06\x03" +
        "\x02\x02\x02\x15\x16\x070\x02\x02\x16\x17\x07f\x02\x02\x17\x18\x07c\x02" +
        "\x02\x18\x19\x07v\x02\x02\x19\x1A\x07c\x02\x02\x1A\b\x03\x02\x02\x02\x1B" +
        "\x1C\x07=\x02\x02\x1C\n\x03\x02\x02\x02\x1D!\x07^\x02\x02\x1E \n\x02\x02" +
        "\x02\x1F\x1E\x03\x02\x02\x02 #\x03\x02\x02\x02!\x1F\x03\x02\x02\x02!\"" +
        "\x03\x02\x02\x02\"$\x03\x02\x02\x02#!\x03\x02\x02\x02$%\b\x06\x02\x02" +
        "%\f\x03\x02\x02\x02&(\t\x03\x02\x02\'&\x03\x02\x02\x02()\x03\x02\x02\x02" +
        ")\'\x03\x02\x02\x02)*\x03\x02\x02\x02*+\x03\x02\x02\x02+,\b\x07\x02\x02" +
        ",\x0E\x03\x02\x02\x02\x05\x02!)\x03\b\x02\x02";
    static __ATN;
    static get _ATN() {
        if (!facLexer.__ATN) {
            facLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(facLexer._serializedATN));
        }
        return facLexer.__ATN;
    }
}
exports.facLexer = facLexer;
//# sourceMappingURL=facLexer.js.map