// Generated from /Users/jorianzwerver/fac/grammar/fac.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link facParser}.
 */
public interface facListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link facParser#file}.
	 * @param ctx the parse tree
	 */
	void enterFile(facParser.FileContext ctx);
	/**
	 * Exit a parse tree produced by {@link facParser#file}.
	 * @param ctx the parse tree
	 */
	void exitFile(facParser.FileContext ctx);
	/**
	 * Enter a parse tree produced by {@link facParser#instructions}.
	 * @param ctx the parse tree
	 */
	void enterInstructions(facParser.InstructionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link facParser#instructions}.
	 * @param ctx the parse tree
	 */
	void exitInstructions(facParser.InstructionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link facParser#lw}.
	 * @param ctx the parse tree
	 */
	void enterLw(facParser.LwContext ctx);
	/**
	 * Exit a parse tree produced by {@link facParser#lw}.
	 * @param ctx the parse tree
	 */
	void exitLw(facParser.LwContext ctx);
	/**
	 * Enter a parse tree produced by {@link facParser#lb}.
	 * @param ctx the parse tree
	 */
	void enterLb(facParser.LbContext ctx);
	/**
	 * Exit a parse tree produced by {@link facParser#lb}.
	 * @param ctx the parse tree
	 */
	void exitLb(facParser.LbContext ctx);
}