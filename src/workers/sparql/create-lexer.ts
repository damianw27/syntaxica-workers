import { CharStreams, Lexer } from '@syntaxica/antlr';
import { LexingErrorListener } from '@syntaxica/lib';
import SparqlLexer from '$generated/Sparql/sparql-lexer';

export const createLexer = (input: string, errorListener?: LexingErrorListener): SparqlLexer => {
  const inputSteam = CharStreams.fromString(input);
  const sparqlLexer: Lexer = new SparqlLexer(inputSteam);

  sparqlLexer.removeErrorListeners();

  if (errorListener) {
    sparqlLexer.addErrorListener(errorListener);
  }

  return sparqlLexer;
};
