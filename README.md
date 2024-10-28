# FPGA Assembly Compiler

This is the FPGA Assembly Compiler extension for Visual Studio Code. It allows the user to compile the target assembly for our FPGA processor to binary which can be loaded into the FPGA. The file extension of FAC is .fac. It will only compile files with this extension.

## Features

- Compiler for FPGA Assembly. Converts assembly to binary file that can be uploaded to the FPGA processor.
- Error messaging.

## Syntax

To write assembly in FAC some syntax is required. Comments are written as:

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
| add   |  add $a1, $t0, $zero      |               |

All available registers can be found in the following table:

| Register name | Number    | Function      |
| ------------- | ------    | --------      |
|$zero          | 0         | Stores zero.  |
||||


## Extension Settings

For future updates...

## Known Issues

TBD

## Release Notes

Release notes for the FPGA Assembly Compiler extension.

### 0.0.1

Initial release of the FPGA Assembly Compiler!


