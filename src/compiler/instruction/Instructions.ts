import { InstructionType } from "./InstructionType";

export class Instructions {

    type: InstructionType;
    op: string;
    rd!: string;
    rs!: string;
    rt!: string;
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
            return this.op + " " 
                + this.rs + " " 
                + this.rt + " " 
                + this.rd + " " 
                + this.convertImmToBinary(this.imm, 13);
        }

        if(this.type === InstructionType.I) {
            return this.op + " " 
                + this.rd + " " 
                + this.rs + "  " 
                + this.convertImmToBinary(this.imm, 18);
        }

        if(this.type === InstructionType.J) {
            return this.op + "    "
                + this.convertImmToBinary(this.imm, 28);
        }
        
    }

}