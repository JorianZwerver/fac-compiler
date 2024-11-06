// Imports
import { InstructionType } from "./InstructionType";

/**
 * Class to specify formatting for instructions.
 */
export class Instructions {
    // Instruction type
    type: InstructionType;
    // Opcode
    op: string;
    // Destination register
    rd: string = "----";
    // Source register
    rs: string = "----";
    // Second source register
    rt: string = "----";
    // Immediate / Numerical value
    imm: number;

    /**
     * Instruction constructor. Stores all fields relevant to the instruction.
     * Expects:
     * - R type: type, opcode, imm, rd, rs, rt
     * - I type: type, opcode, imm, rd, rs
     * - J type: type, opcode, imm
     * 
     * @param type Instruction type
     * @param op Opcode
     * @param imm Immediate value (Number)
     * @param rd Destination register
     * @param rs Source register
     * @param rt Second source register
     */
    constructor(
        type: InstructionType, 
        op: string,
        imm: number,
        rd?: string,  
        rs?: string,
        rt?: string
    ) {

        this.type = type;
        this.op = op;
        this.imm = imm;

        if(rd !== undefined) {
            this.rd = rd;
        }

        if(rs !== undefined) {
            this.rs = rs;
        }
        
        if(rt !== undefined) {
            this.rt = rt;
        }

    }

    convertImmToBinary(imm: number, bits: number) {
        let returnValue = (imm >>> 0).toString(2);
        if(returnValue.length > bits) {
            returnValue = returnValue.substring(
                returnValue.length - bits
            );
        } else {
            while(returnValue.length < bits) {
                returnValue = "0" + returnValue;
            }
        }
        return returnValue;
    }

    /**
     * Specifies how to format an instruction into a pretty string.
     * @returns pretty instruction string.
     */
    toString() {
        if(this.type === InstructionType.R) {
            return this.op
                + this.rd
                + this.rs
                + this.rt
                + this.convertImmToBinary(this.imm, 13);
        }

        if(this.type === InstructionType.I) {
            return this.op
                + this.rd
                + this.rs
                + this.convertImmToBinary(this.imm, 18);
        }

        if(this.type === InstructionType.J) {
            return this.op
                + this.convertImmToBinary(this.imm, 28);
        }
        
    }

    /**
     * Specifies how to format an instruction into a hexadecimal string.
     * @returns pretty hexadecimal string.
     */
    toHex(): string {
        const bin = this.toString();

        var sum = 0;
        var returnValue = "";

        if(bin !== undefined) {
            for(var i = 0; i < 8; i++) {
                for(var j = 0; j < 4; j++) {
                    var char = bin.charAt(4*i + j);
                    sum += char === '0' ? 0 : 2 ** (3-j);
                }
                returnValue += sum.toString(16);
                sum = 0;
            }
        }

        return returnValue;
    }

     /**
     * Specifies how to format an instruction into a string for markdown.
     * @returns pretty markdown string.
     */
    toMd(): string {

        // Map for mapping all opcodes to instruction names
        let opcode = new Map<string, string>([
            ["0000", "lw"],
            ["0001", "sw"],
            ["0010", "mult"],
            ["0011", "add"],
            ["0100", "addi"],
            ["0101", "shr"],
            ["0110", "shl"],
            ["0111", "j"],
            ["1000", "beq"],
            ["1001", "bneq"],
            ["1010", "or"],
            ["1011", "and"],
            ["1100", "xor"],
            ["1101", "not"],
            ["1110", "nop"],
            ["1111", "dbg"]
        ]);

        // Map for all mapping all register codes into register names
        let register = new Map<string, string>([
            ["00000", "$zero"],
            ["00001", "$v0"],
            ["00010", "$v1"],
            ["00011", "$a0"],
            ["00100", "$a1"],
            ["00101", "$a2"],
            ["00110", "$a3"],
            ["00111", "$t0"],
            ["01000", "$t1"],
            ["01001", "$t2"],
            ["01010", "$t3"],
            ["01011", "$t4"],
            ["01100", "$t5"],
            ["01101", "$t6"],
            ["01110", "$t7"],
            ["01111", "$t8"],
            ["10000", "$t9"],
            ["10001", "$t10"],
            ["10010", "$t11"],
            ["10011", "$s0"],
            ["10100", "$s1"],
            ["10101", "$s2"],
            ["10110", "$s3"],
            ["10111", "$s4"],
            ["11000", "$s5"],
            ["11001", "$s6"],
            ["11010", "$s7"],
            ["11011", "$s8"],
            ["11100", "$s9"],
            ["11101", "$s10"],
            ["11110", "$s11"],
            ["11111", "$ra"]
        ]);

        // Returns markdown string
        return "|" + this.toString() +
            "|" + this.op +
            "|" + opcode.get(this.op) +
            "|" + this.rs +
            "|" + (register.has(this.rs) ? register.get(this.rs) : "----") +
            "|" + this.rd +
            "|" + (register.has(this.rd) ? register.get(this.rd) : "----") +
            "|" + this.rt +
            "|" + (register.has(this.rt) ? register.get(this.rt) : "----") +
            "|" + this.convertImmToBinary(this.imm, 21) +
            "|" + this.imm +
            "|";
    }

}