grammar fac;

file
    : declerations instructions EOF
    ;

declerations
    : DECL decleration*
    ;

decleration
    : define
    ;

define
    : DEFINE (REG | NUMBER) COMMA STRING
    ;


instructions
    : INSTR instruction*
    ;

instruction
    : lw
    | sw
    | mult
    | add
    | addi
    | shr
    | shl
    | jump
    | beq
    | bneq
    | or
    | and
    | xor
    | not
    | nop
    | dbg
    | label
    ;

lw
    : LW input COMMA input
    ;

sw
    : SW input COMMA input
    ;

mult
    : MULT input COMMA input COMMA input
    ;

add
    : ADD input COMMA input COMMA input
    ;

addi
    : ADDI input COMMA input COMMA input
    ;

shr
    : SHR input COMMA input COMMA input
    ;

shl
    : SHL input COMMA input COMMA input
    ;

jump
    : JUMP reference
    ;

beq
    : BEQ input COMMA input COMMA reference
    ;

bneq
    : BNEQ input COMMA input COMMA reference
    ;

or
    : OR input COMMA input COMMA input
    ;

and
    : AND input COMMA input COMMA input
    ;

xor
    : XOR input COMMA input COMMA input
    ;

not
    : NOT input COMMA input
    ;

label
    : HASH LETTERS DOUBLE_COLON
    ;

nop
    : NOP
    ;

dbg
    : DBG
    ;

reference
    : HASH LETTERS
    ;

input
    : register
    | string
    | number
    ;

number
    : NUMBER
    ;

string
    : STRING
    ;

register
    : REG
    ;

DECL
    : '.decl'
    ;

DEFINE
    : '.define'
    ;

INSTR
    : '.instr'
    ;

LW:     'lw';
SW:     'sw';
MULT:   'mult';
ADD:    'add';
ADDI:   'addi';
SHR:    'shr';
SHL:    'shl';
JUMP:   'j';
BEQ:    'beq';
BNEQ:   'bneq';
OR:     'or';
AND:    'and';
XOR:    'xor';
NOT:    'not';
NOP:    'nop';
DBG:    'dbg';

REG
    : '$' (LETTER+) (NUM?)
    ;

END
    : ';'
    ;

DOUBLE_COLON
    : ':'
    ;

COMMA
    : ','
    ;

BO
    : '('
    ;

BC
    : ')'
    ;

DOT
    : '.'
    ;

HASH
    : '#'
    ;

STRING
    : '"' LETTERS '"'
    ;

LETTERS
    : LETTER+
    ;

LETTER
    : [a-zA-Z] | '_'
    ;

NUMBER
    : '-'? NUM+
    ;

NUM
    : [0-9]
    ;

COMMENT
    : '\\\\' ~[\r\n]* -> skip
    ;

WS
    : [ \t\r\n]+ -> skip
    ;