import { InstructionType } from "./InstructionType";

export class Instructions {

    type: InstructionType;
    op: string;
    rd: string = "----";
    rs: string = "----";
    rt: string = "----";
    imm: number;

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

    toString() {
        if(this.type === InstructionType.R) {
            return this.op
                + this.rs
                + this.rt
                + this.rd
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

    toMd(): string {

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