/* Grammar specification for the .fac assembly language. */
grammar fac;

/* Upper definition of program, first declerations, the instructions. */
file
    : declerations instructions EOF
    ;

/* Declerations, requires an instruction keyword followed by a set of definitions. */
declerations
    : DECL decleration*
    ;

/* A decleration */
decleration
    : define
    ;

/* A decleration */
define
    : DEFINE (REG | NUMBER) COMMA STRING
    ;

/* Instructions, requires an instruction keyword followed by a set of instructions. */
instructions
    : INSTR instruction*
    ;

/* Possible instructions in .fac */
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

/* Load word */
lw
    : LW input COMMA input BO input BC
    ;

/* Store word */
sw
    : SW input COMMA input BO input BC
    ;

/* Multiply */
mult
    : MULT input COMMA input COMMA input
    ;

/* Addition (registers) */
add
    : ADD input COMMA input COMMA input
    ;

/* Addition (with constants) */
addi
    : ADDI input COMMA input COMMA input
    ;

/* Shift rigt (logical) */
shr
    : SHR input COMMA input COMMA input
    ;

/* Shift left (logical) */
shl
    : SHL input COMMA input COMMA input
    ;

/* Jump */
jump
    : JUMP reference
    ;

/* Branch if equal */
beq
    : BEQ input COMMA input COMMA reference
    ;

/* Branch if not equal */
bneq
    : BNEQ input COMMA input COMMA reference
    ;

/* Logical or operation */
or
    : OR input COMMA input COMMA input
    ;

/* Logical and operation */
and
    : AND input COMMA input COMMA input
    ;

/* Logical xor operation */
xor
    : XOR input COMMA input COMMA input
    ;

/* Logical not operation */
not
    : NOT input COMMA input
    ;

/* Label */
label
    : HASH LETTERS DOUBLE_COLON
    ;

/* No operation */
nop
    : NOP
    ;

/* Debug, is not used */
dbg
    : DBG
    ;

/* Reference, used in beq, bneq and jump */
reference
    : HASH LETTERS
    ;

/* Possible inputs for an instruction. */
input
    : register
    | string
    | number
    ;

/* Number */
number
    : NUMBER
    ;

/* String */
string
    : STRING
    ;

/* Register */
register
    : REG
    ;

/* Declerations keyword */
DECL
    : '.decl'
    ;

/* Define keyword */
DEFINE
    : '.define'
    ;

/* Instructions keyword */
INSTR
    : '.instr'
    ;

/* Keywords for individual instructions */
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

/* Keywords for registers */
REG
    : '$' (LETTER+) ((NUM+)?)
    ;

/* Semicolon */
END
    : ';'
    ; 

/* Double colon keyword */
DOUBLE_COLON
    : ':'
    ;

/* Comma keyword */
COMMA
    : ','
    ;

// Opening bracket
BO
    : '('
    ;

// Closing bracket
BC
    : ')'
    ;

// Dot
DOT
    : '.'
    ;

// Hash for labels
HASH
    : '#'
    ;

/* Keywords for strings */
STRING
    : '"' LETTERS '"'
    ;

/* Keywords for strings */
LETTERS
    : LETTER (LETTER | NUM)*
    ;

/* Letter */
LETTER
    : [a-zA-Z] | '_'
    ;

/* Number */
NUMBER
    : '-'? NUM+
    ;

/* Digits */
NUM
    : [0-9]
    ;

/* Specifies comments to not be stored. */
COMMENT
    : '\\\\' ~[\r\n]* -> skip
    ;

/* Specifies white space to not be stored. */
WS
    : [ \t\r\n]+ -> skip
    ;