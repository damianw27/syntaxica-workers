import {
  CaseKind,
  CommonSyntaxObjects,
  GrammarBuilder,
  GrammarEvent,
  GrammarEventResultInit,
  GrammarEventResultParse,
  GrammarEventResultUtilities,
  GrammarEventType,
  LexingErrorListener,
  ParseTreeExtractor,
  ParsingErrorListener,
  SuggestionsProvider,
} from '@syntaxica/lib';
import SparqlLexer from '$generated/Sparql/sparql-lexer';
import { createLexer } from '$workers/sparql/create-lexer';
import { createParser } from '$workers/sparql/create-parser';
import { sparqlExamples } from '$workers/sparql/sparql-examples';

const getParseResult = (event: GrammarEvent): void => {
  if (event.type !== GrammarEventType.Parse) {
    return;
  }

  const { payload } = event;
  const { text } = payload;

  const lexingErrorListener = new LexingErrorListener();
  const parsingErrorListener = new ParsingErrorListener();

  const lexer = createLexer(text, lexingErrorListener);
  const parser = createParser(lexer, parsingErrorListener);

  const codeSuggestion = new SuggestionsProvider(createLexer, createParser, CaseKind.Both);
  const suggestions = codeSuggestion.suggest(text);
  const parseOutput = parser.query();

  const parseTreeExtractor = new ParseTreeExtractor(parser);
  const parseTree = parseTreeExtractor.extract(parseOutput);

  const errors = [...lexingErrorListener.errors, ...parsingErrorListener.errors];

  const isInvalid = errors.length !== 0;

  const result: GrammarEventResultParse = {
    text,
    suggestions,
    parseTree,
    errors,
    isInvalid,
  };

  postMessage(result);
};

const getUtilities = (event: GrammarEvent): void => {
  if (event.type !== GrammarEventType.Utilities) {
    return;
  }

  const { payload } = event;
  const lexer = createLexer(payload.text);
  const parser = createParser(lexer);

  const result: GrammarEventResultUtilities<typeof lexer, typeof parser> = {
    lexer,
    parser,
  };

  postMessage(result);
};

const getInitializationInfo = (event: GrammarEvent): void => {
  if (event.type !== GrammarEventType.Utilities) {
    return;
  }

  const grammarDefinition = new GrammarBuilder()
    .withName('SPARQL')
    .withDataFromAntlr(SparqlLexer.literalNames)
    .withSyntaxObject(CommonSyntaxObjects.CLikeComment)
    .withSyntaxObject(CommonSyntaxObjects.String)
    .build();

  const result: GrammarEventResultInit = {
    grammarDefinition,
    examples: sparqlExamples,
  };

  postMessage(result);
};

const operations: Record<GrammarEventType, (event: GrammarEvent) => void> = {
  [GrammarEventType.Parse]: getParseResult,
  [GrammarEventType.Utilities]: getUtilities,
  [GrammarEventType.Initialize]: getInitializationInfo,
};

onmessage = ({ data }: MessageEvent<GrammarEvent>): void => {
  const { type } = data;
  operations[type](data);
};
