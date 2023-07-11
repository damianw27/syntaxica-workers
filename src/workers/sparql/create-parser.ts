import { CommonTokenStream, PredictionMode } from '@syntaxica/antlr';
import { ParsingErrorListener } from '@syntaxica/lib';
import SparqlParser from '$generated/Sparql/sparql-parser';
import SparqlLexer from '$generated/Sparql/sparql-lexer';

export const createParser = (lexer: SparqlLexer, listener?: ParsingErrorListener): SparqlParser => {
  const commonTokenStream = new CommonTokenStream(lexer);
  const parser = new SparqlParser(commonTokenStream);
  parser.buildParseTrees = true;
  parser.removeErrorListeners();
  parser._interp.predictionMode = PredictionMode.SLL;

  if (listener) {
    parser.addErrorListener(listener);
  }

  return parser;
};
