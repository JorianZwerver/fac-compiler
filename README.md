# FPGA Assembly Compiler

This is the FPGA Assembly Compiler extension for Visual Studio Code. It allows the user to compile the target assembly for our FPGA processor to binary which can be loaded into the FPGA. The file extension of FAC is .fac. This compiler will only compile .fac files.

FAC uses a two stage compiling process to compile assembly to binary code. It first elaborates the syntax of the assembly and then generates the binary code. The result is an Intel HEX file. This can be used as an initialization file for a Quartus memory block.

The assembly of this compiler was tested on a custom build single-cycle, 50 MHz processor. It runs on a DE1-SoC development board and was coded using the Quartus environment.

## Features

- Compiler for FPGA Assembly. Converts assembly to binary file that can be uploaded to the FPGA processor.
- Error messaging.
- Touchbar support.

## Use of plugin

To compile files using FAC, you need to:
- Open a folder in vscode, compilation of a file without opened folder is not allowed.
- Use the ``.fac`` extension.

To compile a ``.fac`` file, you can:
- Use the compile button in the top-right of the VS code editor.
- Press CMD (or CTRL) + SHIFT + P and search for 'fac: Compile'.
- Use the shortcut: CMD (or CTRL) + SHIFT + F.

After compilation, a folder will be generated with a ``.hex`` file for the FPGA, a ``.bin`` file with all the instructions in binary and a markdown file with debugging information. The generation of the last two files can be turned off in the settings.
 
To view the version of FAC:
- Press CMD (or CTRL) + SHIFT + P and search for 'fac: Version'.
- Use the shortcut: CMD (or CTRL) + ALT + F.

## For graders

This repository contains all files for the FPGA Assembly Compiler. Below is an overview of the most important files for the grader. All files can be found in the ``src`` folder. The other files are either automatically generated or libraries.

    - src
        - compiler
            - errors
                ErrorListener.ts    <-- Stores errors from program
                ErrorNode.ts        <-- Formatter for errors
                ErrorType.ts        <-- Specifies error types
            - instruction
                Instructions.ts     <-- Formats instructions
                InstructionType.ts  <-- Describes instruction types
            Elaboration.ts          <-- Elaboration phase
            Generation.ts           <-- Generation phase
        - grammar
            fac.g4                  <-- Grammar file
        - test
        extension.ts                <-- Central file

Exceptions are ``package.json`` and the files in ``syntaxes``. These files cannot be commented due to the JSON file type. These files contain specifications for VS Code and syntax highlighting and are not important for the compilation process itself.

## Syntax

To write assembly in FAC some syntax is required. Examples are included in the examples folder.

 Comments are written as:

    \\ This is a comment.

The general file structure for FAC is as follows:

    .decl
        < for all define statements >

    .instr
        < for all instructions >

It is required for every .fac to contain a ``.decl`` and ``.instr``, although its contents can be empty.

Declarations are made under the ``.decl`` statment. Use ``.define`` to make a defintion as follows:

    .decl
        .define $a1, "register"
        .define 101, "number"

As shown, defintions can contain either a register or decimal number. The allowed registers can be found later. Note: when referencing a definition, always type it the form of ``"defintion"``.

For the instructions, it starts with a ``.instr`` and is followed by zero or more instructions. These inscrutions are converted to binary. Example syntax is shown in:

    .instr
        lw $a1, $t0
        sw $a0, $t0
        add $a0, $t4, "main"
        addi $a2, $t0, 100

Labels are added using a ``#``, as shown in the following example:

    #label:
        sw $a3, $t4
        add $a1, $t0, $zero
        addi $a1, $v0, "in"
        j #label

All possible instructions can be found in the following table:

| Name  | Example                   | Function      |
| ----- | ---------                 | ------------- |
| lw   |  lw $d, i($s)      | $d = MEM[$s + i]              |
| sw | sw $d, i($s) | MEM[$s + i] = $d |
| mult | mult $d, $s, $t | $d = $s * $t |
| add | add $d, $s, $t | $d = $s + $t |
| addi | addi $d, $s, i | $d = $s + i |
| shr | shr $d, $s, i | $d = $s >> i |
| shl | shl $d, $s, i | $d = $s << i |
| j | j label | pc = location[label] |
| beq | beq $d, $s, label | if($d == $s) go to label |
| bneq | bneq $d, $s, label | if($d != $s) go to label |
| or | or $d, $s, $t | $d = $s /\ $t |
| and | and $d, $s, $t | $d = $s & $t |
| xor | xor $d, $s, $t | $d = $s ^ $t |
| not | not $d, $s | $d = ~$s |
| nop | nop | Does nothing |
| dbg | dbg | Enters debug mode |

All available registers can be found in the following table:

| Register name | Number    | Function      |
| ------------- | ------    | --------      |
|$zero          | 0         | Stores zero.  |
|$v0 - $v1| 1-2 | Function result. |
|$a0 - $a3| 3-6 | Arguments. |
|$t0 - $t11| 7-18| Temporary. |
|$s0 - $s11 | 19-30 | Saved. |
|$ra| 31 | Return address. |

## Memory Mapped IO

To interface with the peripherals of the processor, MMIO is used. Using  ``sw`` or ``lw`` instructions, the user can interface with the pheripherals. Below a table with the addresses for each peripheral, its function and use.

| Address   | Function | Use |
| --------- | -------- | --- |
| 65528     | Hex displays | Converts the binary value stored at this address to a decimal value which is showed on the hex displays.
| 65529     | Enable VGA | Enables or disables writing to VGA buffer.
| 65530     | Data VGA | Stores the data that is written to the VGA buffer.
| 65531     | Column VGA | Stores the column where the data is written to. Maximum is 40.
| 65532     | Row VGA | Stores the row where the data is written to. Maximum is 480.
| 65533     | PS2 keycodes | When the user presses a key on the PS2 keyboard,  the result is stored in this address.
| 65534     | LEDs  | Can write the state of each LED to this address.
| 65535     | Keys + switches | Stores the state of the  switches and buttons.

## Keybinds

| Function | Keybind Windows  | Keybind Mac     |
| -------- | ---------------- | --------------- |
| Compile  | CTRL + SHIFT + F | CMD + SHIFT + F |
| Version  | CTRL + ALT + F   | CMD + ALT + F   |

## Extension Settings

The extension allows the user to toggle which files will be generated during compilation:
- A binary file with all the instructions in binary.
- A markdown file, containing information about each instruction.

A HEX file will always be generated (since this is uploaded to the FPGA).

## Release Notes

Release notes for the FPGA Assembly Compiler extension.

### 0.0.1

- Initial release of the FPGA Assembly Compiler!

### 0.1.0

- Fixed file issue for Windows.

### 0.1.1

- Fixed register order.

### 0.1.2

- Fixed bugs in shl and shr command.
- Added keybinds for compilation and to see the current version.
- Fixed highlighting issue with labels and comments.
- Disallowed the use of the same register for both inputs of a function.
- Fixed settings.
- Updated README.

### 0.1.3

- Fixed labeling issues with bneq and beq instructions.

### 0.1.4

- Fixed that numerical characters can be used in labels and defines.
- Fixed that multiple jumps and branches can go to the same label. 

### 0.1.5

- Correct implementation of sw.
- Bug fixed with function arguments.

### 0.1.6

- Correct implementation of lw.
- Updated documentation to match implementation of sw and lw.

### 0.1.7

- Fixed bug with registers of more than one number

### 1.0.0

- Added comments.
- Readme update.
- Added information for graders.
- Final version!