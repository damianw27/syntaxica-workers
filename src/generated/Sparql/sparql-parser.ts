// Generated from F:\Projects\syntaxica\syntaxica-workers\src\grammars/Sparql/Sparql.g4 by ANTLR 4.13.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from '@syntaxica/antlr';
import SparqlListener from "./SparqlListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class SparqlParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly T__55 = 56;
	public static readonly T__56 = 57;
	public static readonly T__57 = 58;
	public static readonly IRI_REF = 59;
	public static readonly PNAME_NS = 60;
	public static readonly PNAME_LN = 61;
	public static readonly BLANK_NODE_LABEL = 62;
	public static readonly VAR1 = 63;
	public static readonly VAR2 = 64;
	public static readonly LANGTAG = 65;
	public static readonly INTEGER = 66;
	public static readonly DECIMAL = 67;
	public static readonly DOUBLE = 68;
	public static readonly INTEGER_POSITIVE = 69;
	public static readonly DECIMAL_POSITIVE = 70;
	public static readonly DOUBLE_POSITIVE = 71;
	public static readonly INTEGER_NEGATIVE = 72;
	public static readonly DECIMAL_NEGATIVE = 73;
	public static readonly DOUBLE_NEGATIVE = 74;
	public static readonly EXPONENT = 75;
	public static readonly STRING_LITERAL1 = 76;
	public static readonly STRING_LITERAL2 = 77;
	public static readonly STRING_LITERAL_LONG1 = 78;
	public static readonly STRING_LITERAL_LONG2 = 79;
	public static readonly ECHAR = 80;
	public static readonly NIL = 81;
	public static readonly ANON = 82;
	public static readonly PN_CHARS_U = 83;
	public static readonly VARNAME = 84;
	public static readonly PN_PREFIX = 85;
	public static readonly PN_LOCAL = 86;
	public static readonly WS = 87;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_query = 0;
	public static readonly RULE_prologue = 1;
	public static readonly RULE_baseDecl = 2;
	public static readonly RULE_prefixDecl = 3;
	public static readonly RULE_selectQuery = 4;
	public static readonly RULE_constructQuery = 5;
	public static readonly RULE_describeQuery = 6;
	public static readonly RULE_askQuery = 7;
	public static readonly RULE_datasetClause = 8;
	public static readonly RULE_defaultGraphClause = 9;
	public static readonly RULE_namedGraphClause = 10;
	public static readonly RULE_sourceSelector = 11;
	public static readonly RULE_whereClause = 12;
	public static readonly RULE_solutionModifier = 13;
	public static readonly RULE_limitOffsetClauses = 14;
	public static readonly RULE_orderClause = 15;
	public static readonly RULE_orderCondition = 16;
	public static readonly RULE_limitClause = 17;
	public static readonly RULE_offsetClause = 18;
	public static readonly RULE_groupGraphPattern = 19;
	public static readonly RULE_triplesBlock = 20;
	public static readonly RULE_graphPatternNotTriples = 21;
	public static readonly RULE_optionalGraphPattern = 22;
	public static readonly RULE_graphGraphPattern = 23;
	public static readonly RULE_groupOrUnionGraphPattern = 24;
	public static readonly RULE_filter_ = 25;
	public static readonly RULE_constraint = 26;
	public static readonly RULE_functionCall = 27;
	public static readonly RULE_argList = 28;
	public static readonly RULE_constructTemplate = 29;
	public static readonly RULE_constructTriples = 30;
	public static readonly RULE_triplesSameSubject = 31;
	public static readonly RULE_propertyListNotEmpty = 32;
	public static readonly RULE_propertyList = 33;
	public static readonly RULE_objectList = 34;
	public static readonly RULE_object_ = 35;
	public static readonly RULE_verb = 36;
	public static readonly RULE_triplesNode = 37;
	public static readonly RULE_blankNodePropertyList = 38;
	public static readonly RULE_collection = 39;
	public static readonly RULE_graphNode = 40;
	public static readonly RULE_varOrTerm = 41;
	public static readonly RULE_varOrIRIref = 42;
	public static readonly RULE_var_ = 43;
	public static readonly RULE_graphTerm = 44;
	public static readonly RULE_expression = 45;
	public static readonly RULE_conditionalOrExpression = 46;
	public static readonly RULE_conditionalAndExpression = 47;
	public static readonly RULE_valueLogical = 48;
	public static readonly RULE_relationalExpression = 49;
	public static readonly RULE_numericExpression = 50;
	public static readonly RULE_additiveExpression = 51;
	public static readonly RULE_multiplicativeExpression = 52;
	public static readonly RULE_unaryExpression = 53;
	public static readonly RULE_primaryExpression = 54;
	public static readonly RULE_brackettedExpression = 55;
	public static readonly RULE_builtInCall = 56;
	public static readonly RULE_regexExpression = 57;
	public static readonly RULE_iriRefOrFunction = 58;
	public static readonly RULE_rdfLiteral = 59;
	public static readonly RULE_numericLiteral = 60;
	public static readonly RULE_numericLiteralUnsigned = 61;
	public static readonly RULE_numericLiteralPositive = 62;
	public static readonly RULE_numericLiteralNegative = 63;
	public static readonly RULE_booleanLiteral = 64;
	public static readonly RULE_string_ = 65;
	public static readonly RULE_iriRef = 66;
	public static readonly RULE_prefixedName = 67;
	public static readonly RULE_blankNode = 68;
	public static readonly literalNames: (string | null)[] = [ null, "'BASE'", 
                                                            "'PREFIX'", 
                                                            "'SELECT'", 
                                                            "'DISTINCT'", 
                                                            "'REDUCED'", 
                                                            "'*'", "'CONSTRUCT'", 
                                                            "'DESCRIBE'", 
                                                            "'ASK'", "'FROM'", 
                                                            "'NAMED'", "'WHERE'", 
                                                            "'ORDER'", "'BY'", 
                                                            "'ASC'", "'DESC'", 
                                                            "'LIMIT'", "'OFFSET'", 
                                                            "'{'", "'.'", 
                                                            "'}'", "'OPTIONAL'", 
                                                            "'GRAPH'", "'UNION'", 
                                                            "'FILTER'", 
                                                            "'('", "','", 
                                                            "')'", "';'", 
                                                            "'a'", "'['", 
                                                            "']'", "'||'", 
                                                            "'&&'", "'='", 
                                                            "'!='", "'<'", 
                                                            "'>'", "'<='", 
                                                            "'>='", "'+'", 
                                                            "'-'", "'/'", 
                                                            "'!'", "'STR'", 
                                                            "'LANG'", "'LANGMATCHES'", 
                                                            "'DATATYPE'", 
                                                            "'BOUND'", "'sameTerm'", 
                                                            "'isIRI'", "'isURI'", 
                                                            "'isBLANK'", 
                                                            "'isLITERAL'", 
                                                            "'REGEX'", "'^^'", 
                                                            "'true'", "'false'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, "IRI_REF", 
                                                             "PNAME_NS", 
                                                             "PNAME_LN", 
                                                             "BLANK_NODE_LABEL", 
                                                             "VAR1", "VAR2", 
                                                             "LANGTAG", 
                                                             "INTEGER", 
                                                             "DECIMAL", 
                                                             "DOUBLE", "INTEGER_POSITIVE", 
                                                             "DECIMAL_POSITIVE", 
                                                             "DOUBLE_POSITIVE", 
                                                             "INTEGER_NEGATIVE", 
                                                             "DECIMAL_NEGATIVE", 
                                                             "DOUBLE_NEGATIVE", 
                                                             "EXPONENT", 
                                                             "STRING_LITERAL1", 
                                                             "STRING_LITERAL2", 
                                                             "STRING_LITERAL_LONG1", 
                                                             "STRING_LITERAL_LONG2", 
                                                             "ECHAR", "NIL", 
                                                             "ANON", "PN_CHARS_U", 
                                                             "VARNAME", 
                                                             "PN_PREFIX", 
                                                             "PN_LOCAL", 
                                                             "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"query", "prologue", "baseDecl", "prefixDecl", "selectQuery", "constructQuery", 
		"describeQuery", "askQuery", "datasetClause", "defaultGraphClause", "namedGraphClause", 
		"sourceSelector", "whereClause", "solutionModifier", "limitOffsetClauses", 
		"orderClause", "orderCondition", "limitClause", "offsetClause", "groupGraphPattern", 
		"triplesBlock", "graphPatternNotTriples", "optionalGraphPattern", "graphGraphPattern", 
		"groupOrUnionGraphPattern", "filter_", "constraint", "functionCall", "argList", 
		"constructTemplate", "constructTriples", "triplesSameSubject", "propertyListNotEmpty", 
		"propertyList", "objectList", "object_", "verb", "triplesNode", "blankNodePropertyList", 
		"collection", "graphNode", "varOrTerm", "varOrIRIref", "var_", "graphTerm", 
		"expression", "conditionalOrExpression", "conditionalAndExpression", "valueLogical", 
		"relationalExpression", "numericExpression", "additiveExpression", "multiplicativeExpression", 
		"unaryExpression", "primaryExpression", "brackettedExpression", "builtInCall", 
		"regexExpression", "iriRefOrFunction", "rdfLiteral", "numericLiteral", 
		"numericLiteralUnsigned", "numericLiteralPositive", "numericLiteralNegative", 
		"booleanLiteral", "string_", "iriRef", "prefixedName", "blankNode",
	];
	public get grammarFileName(): string { return "Sparql.g4"; }
	public get literalNames(): (string | null)[] { return SparqlParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return SparqlParser.symbolicNames; }
	public get ruleNames(): string[] { return SparqlParser.ruleNames; }
	public get serializedATN(): number[] { return SparqlParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, SparqlParser._ATN, SparqlParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public query(): QueryContext {
		let localctx: QueryContext = new QueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, SparqlParser.RULE_query);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 138;
			this.prologue();
			this.state = 143;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
				{
				this.state = 139;
				this.selectQuery();
				}
				break;
			case 7:
				{
				this.state = 140;
				this.constructQuery();
				}
				break;
			case 8:
				{
				this.state = 141;
				this.describeQuery();
				}
				break;
			case 9:
				{
				this.state = 142;
				this.askQuery();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 145;
			this.match(SparqlParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public prologue(): PrologueContext {
		let localctx: PrologueContext = new PrologueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, SparqlParser.RULE_prologue);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 148;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 147;
				this.baseDecl();
				}
			}

			this.state = 153;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===2) {
				{
				{
				this.state = 150;
				this.prefixDecl();
				}
				}
				this.state = 155;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public baseDecl(): BaseDeclContext {
		let localctx: BaseDeclContext = new BaseDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, SparqlParser.RULE_baseDecl);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 156;
			this.match(SparqlParser.T__0);
			this.state = 157;
			this.match(SparqlParser.IRI_REF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public prefixDecl(): PrefixDeclContext {
		let localctx: PrefixDeclContext = new PrefixDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, SparqlParser.RULE_prefixDecl);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 159;
			this.match(SparqlParser.T__1);
			this.state = 160;
			this.match(SparqlParser.PNAME_NS);
			this.state = 161;
			this.match(SparqlParser.IRI_REF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public selectQuery(): SelectQueryContext {
		let localctx: SelectQueryContext = new SelectQueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, SparqlParser.RULE_selectQuery);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 163;
			this.match(SparqlParser.T__2);
			this.state = 165;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4 || _la===5) {
				{
				this.state = 164;
				_la = this._input.LA(1);
				if(!(_la===4 || _la===5)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 173;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 63:
			case 64:
				{
				this.state = 168;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 167;
					this.var_();
					}
					}
					this.state = 170;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===63 || _la===64);
				}
				break;
			case 6:
				{
				this.state = 172;
				this.match(SparqlParser.T__5);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 178;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===10) {
				{
				{
				this.state = 175;
				this.datasetClause();
				}
				}
				this.state = 180;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 181;
			this.whereClause();
			this.state = 182;
			this.solutionModifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constructQuery(): ConstructQueryContext {
		let localctx: ConstructQueryContext = new ConstructQueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, SparqlParser.RULE_constructQuery);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 184;
			this.match(SparqlParser.T__6);
			this.state = 185;
			this.constructTemplate();
			this.state = 189;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===10) {
				{
				{
				this.state = 186;
				this.datasetClause();
				}
				}
				this.state = 191;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 192;
			this.whereClause();
			this.state = 193;
			this.solutionModifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public describeQuery(): DescribeQueryContext {
		let localctx: DescribeQueryContext = new DescribeQueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, SparqlParser.RULE_describeQuery);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 195;
			this.match(SparqlParser.T__7);
			this.state = 202;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 59:
			case 60:
			case 61:
			case 63:
			case 64:
				{
				this.state = 197;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 196;
					this.varOrIRIref();
					}
					}
					this.state = 199;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & 55) !== 0));
				}
				break;
			case 6:
				{
				this.state = 201;
				this.match(SparqlParser.T__5);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===10) {
				{
				{
				this.state = 204;
				this.datasetClause();
				}
				}
				this.state = 209;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 211;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12 || _la===19) {
				{
				this.state = 210;
				this.whereClause();
				}
			}

			this.state = 213;
			this.solutionModifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public askQuery(): AskQueryContext {
		let localctx: AskQueryContext = new AskQueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, SparqlParser.RULE_askQuery);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 215;
			this.match(SparqlParser.T__8);
			this.state = 219;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===10) {
				{
				{
				this.state = 216;
				this.datasetClause();
				}
				}
				this.state = 221;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 222;
			this.whereClause();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public datasetClause(): DatasetClauseContext {
		let localctx: DatasetClauseContext = new DatasetClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, SparqlParser.RULE_datasetClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 224;
			this.match(SparqlParser.T__9);
			this.state = 227;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 59:
			case 60:
			case 61:
				{
				this.state = 225;
				this.defaultGraphClause();
				}
				break;
			case 11:
				{
				this.state = 226;
				this.namedGraphClause();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public defaultGraphClause(): DefaultGraphClauseContext {
		let localctx: DefaultGraphClauseContext = new DefaultGraphClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, SparqlParser.RULE_defaultGraphClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 229;
			this.sourceSelector();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public namedGraphClause(): NamedGraphClauseContext {
		let localctx: NamedGraphClauseContext = new NamedGraphClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, SparqlParser.RULE_namedGraphClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 231;
			this.match(SparqlParser.T__10);
			this.state = 232;
			this.sourceSelector();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sourceSelector(): SourceSelectorContext {
		let localctx: SourceSelectorContext = new SourceSelectorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, SparqlParser.RULE_sourceSelector);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 234;
			this.iriRef();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public whereClause(): WhereClauseContext {
		let localctx: WhereClauseContext = new WhereClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, SparqlParser.RULE_whereClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 237;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12) {
				{
				this.state = 236;
				this.match(SparqlParser.T__11);
				}
			}

			this.state = 239;
			this.groupGraphPattern();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public solutionModifier(): SolutionModifierContext {
		let localctx: SolutionModifierContext = new SolutionModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, SparqlParser.RULE_solutionModifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 242;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===13) {
				{
				this.state = 241;
				this.orderClause();
				}
			}

			this.state = 245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===17 || _la===18) {
				{
				this.state = 244;
				this.limitOffsetClauses();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public limitOffsetClauses(): LimitOffsetClausesContext {
		let localctx: LimitOffsetClausesContext = new LimitOffsetClausesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, SparqlParser.RULE_limitOffsetClauses);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 255;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 17:
				{
				this.state = 247;
				this.limitClause();
				this.state = 249;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===18) {
					{
					this.state = 248;
					this.offsetClause();
					}
				}

				}
				break;
			case 18:
				{
				this.state = 251;
				this.offsetClause();
				this.state = 253;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===17) {
					{
					this.state = 252;
					this.limitClause();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public orderClause(): OrderClauseContext {
		let localctx: OrderClauseContext = new OrderClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, SparqlParser.RULE_orderClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 257;
			this.match(SparqlParser.T__12);
			this.state = 258;
			this.match(SparqlParser.T__13);
			this.state = 260;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 259;
				this.orderCondition();
				}
				}
				this.state = 262;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67207168) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 903167) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public orderCondition(): OrderConditionContext {
		let localctx: OrderConditionContext = new OrderConditionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, SparqlParser.RULE_orderCondition);
		let _la: number;
		try {
			this.state = 270;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 15:
			case 16:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 264;
				_la = this._input.LA(1);
				if(!(_la===15 || _la===16)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 265;
				this.brackettedExpression();
				}
				}
				break;
			case 26:
			case 45:
			case 46:
			case 47:
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 59:
			case 60:
			case 61:
			case 63:
			case 64:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 268;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 26:
				case 45:
				case 46:
				case 47:
				case 48:
				case 49:
				case 50:
				case 51:
				case 52:
				case 53:
				case 54:
				case 55:
				case 59:
				case 60:
				case 61:
					{
					this.state = 266;
					this.constraint();
					}
					break;
				case 63:
				case 64:
					{
					this.state = 267;
					this.var_();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public limitClause(): LimitClauseContext {
		let localctx: LimitClauseContext = new LimitClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, SparqlParser.RULE_limitClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 272;
			this.match(SparqlParser.T__16);
			this.state = 273;
			this.match(SparqlParser.INTEGER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public offsetClause(): OffsetClauseContext {
		let localctx: OffsetClauseContext = new OffsetClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, SparqlParser.RULE_offsetClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 275;
			this.match(SparqlParser.T__17);
			this.state = 276;
			this.match(SparqlParser.INTEGER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public groupGraphPattern(): GroupGraphPatternContext {
		let localctx: GroupGraphPatternContext = new GroupGraphPatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, SparqlParser.RULE_groupGraphPattern);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 278;
			this.match(SparqlParser.T__18);
			this.state = 280;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===26 || _la===31 || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 52166399) !== 0)) {
				{
				this.state = 279;
				this.triplesBlock();
				}
			}

			this.state = 294;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 46661632) !== 0)) {
				{
				{
				this.state = 284;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 19:
				case 22:
				case 23:
					{
					this.state = 282;
					this.graphPatternNotTriples();
					}
					break;
				case 25:
					{
					this.state = 283;
					this.filter_();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 287;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===20) {
					{
					this.state = 286;
					this.match(SparqlParser.T__19);
					}
				}

				this.state = 290;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===26 || _la===31 || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 52166399) !== 0)) {
					{
					this.state = 289;
					this.triplesBlock();
					}
				}

				}
				}
				this.state = 296;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 297;
			this.match(SparqlParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public triplesBlock(): TriplesBlockContext {
		let localctx: TriplesBlockContext = new TriplesBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, SparqlParser.RULE_triplesBlock);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 299;
			this.triplesSameSubject();
			this.state = 304;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===20) {
				{
				this.state = 300;
				this.match(SparqlParser.T__19);
				this.state = 302;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===26 || _la===31 || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 52166399) !== 0)) {
					{
					this.state = 301;
					this.triplesBlock();
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public graphPatternNotTriples(): GraphPatternNotTriplesContext {
		let localctx: GraphPatternNotTriplesContext = new GraphPatternNotTriplesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, SparqlParser.RULE_graphPatternNotTriples);
		try {
			this.state = 309;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 22:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 306;
				this.optionalGraphPattern();
				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 307;
				this.groupOrUnionGraphPattern();
				}
				break;
			case 23:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 308;
				this.graphGraphPattern();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public optionalGraphPattern(): OptionalGraphPatternContext {
		let localctx: OptionalGraphPatternContext = new OptionalGraphPatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, SparqlParser.RULE_optionalGraphPattern);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 311;
			this.match(SparqlParser.T__21);
			this.state = 312;
			this.groupGraphPattern();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public graphGraphPattern(): GraphGraphPatternContext {
		let localctx: GraphGraphPatternContext = new GraphGraphPatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, SparqlParser.RULE_graphGraphPattern);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 314;
			this.match(SparqlParser.T__22);
			this.state = 315;
			this.varOrIRIref();
			this.state = 316;
			this.groupGraphPattern();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public groupOrUnionGraphPattern(): GroupOrUnionGraphPatternContext {
		let localctx: GroupOrUnionGraphPatternContext = new GroupOrUnionGraphPatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, SparqlParser.RULE_groupOrUnionGraphPattern);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 318;
			this.groupGraphPattern();
			this.state = 323;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===24) {
				{
				{
				this.state = 319;
				this.match(SparqlParser.T__23);
				this.state = 320;
				this.groupGraphPattern();
				}
				}
				this.state = 325;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public filter_(): Filter_Context {
		let localctx: Filter_Context = new Filter_Context(this, this._ctx, this.state);
		this.enterRule(localctx, 50, SparqlParser.RULE_filter_);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 326;
			this.match(SparqlParser.T__24);
			this.state = 327;
			this.constraint();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constraint(): ConstraintContext {
		let localctx: ConstraintContext = new ConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, SparqlParser.RULE_constraint);
		try {
			this.state = 332;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 26:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 329;
				this.brackettedExpression();
				}
				break;
			case 45:
			case 46:
			case 47:
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 330;
				this.builtInCall();
				}
				break;
			case 59:
			case 60:
			case 61:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 331;
				this.functionCall();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let localctx: FunctionCallContext = new FunctionCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, SparqlParser.RULE_functionCall);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 334;
			this.iriRef();
			this.state = 335;
			this.argList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public argList(): ArgListContext {
		let localctx: ArgListContext = new ArgListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, SparqlParser.RULE_argList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 349;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 81:
				{
				this.state = 337;
				this.match(SparqlParser.NIL);
				}
				break;
			case 26:
				{
				this.state = 338;
				this.match(SparqlParser.T__25);
				this.state = 339;
				this.expression();
				this.state = 344;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===27) {
					{
					{
					this.state = 340;
					this.match(SparqlParser.T__26);
					this.state = 341;
					this.expression();
					}
					}
					this.state = 346;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 347;
				this.match(SparqlParser.T__27);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constructTemplate(): ConstructTemplateContext {
		let localctx: ConstructTemplateContext = new ConstructTemplateContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, SparqlParser.RULE_constructTemplate);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 351;
			this.match(SparqlParser.T__18);
			this.state = 353;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===26 || _la===31 || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 52166399) !== 0)) {
				{
				this.state = 352;
				this.constructTriples();
				}
			}

			this.state = 355;
			this.match(SparqlParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constructTriples(): ConstructTriplesContext {
		let localctx: ConstructTriplesContext = new ConstructTriplesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, SparqlParser.RULE_constructTriples);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 357;
			this.triplesSameSubject();
			this.state = 362;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===20) {
				{
				this.state = 358;
				this.match(SparqlParser.T__19);
				this.state = 360;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===26 || _la===31 || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 52166399) !== 0)) {
					{
					this.state = 359;
					this.constructTriples();
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public triplesSameSubject(): TriplesSameSubjectContext {
		let localctx: TriplesSameSubjectContext = new TriplesSameSubjectContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, SparqlParser.RULE_triplesSameSubject);
		try {
			this.state = 370;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 76:
			case 77:
			case 81:
			case 82:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 364;
				this.varOrTerm();
				this.state = 365;
				this.propertyListNotEmpty();
				}
				break;
			case 26:
			case 31:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 367;
				this.triplesNode();
				this.state = 368;
				this.propertyList();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public propertyListNotEmpty(): PropertyListNotEmptyContext {
		let localctx: PropertyListNotEmptyContext = new PropertyListNotEmptyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, SparqlParser.RULE_propertyListNotEmpty);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 372;
			this.verb();
			this.state = 373;
			this.objectList();
			this.state = 382;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===29) {
				{
				{
				this.state = 374;
				this.match(SparqlParser.T__28);
				this.state = 378;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===30 || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & 55) !== 0)) {
					{
					this.state = 375;
					this.verb();
					this.state = 376;
					this.objectList();
					}
				}

				}
				}
				this.state = 384;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public propertyList(): PropertyListContext {
		let localctx: PropertyListContext = new PropertyListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, SparqlParser.RULE_propertyList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 386;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===30 || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & 55) !== 0)) {
				{
				this.state = 385;
				this.propertyListNotEmpty();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public objectList(): ObjectListContext {
		let localctx: ObjectListContext = new ObjectListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, SparqlParser.RULE_objectList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 388;
			this.object_();
			this.state = 393;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===27) {
				{
				{
				this.state = 389;
				this.match(SparqlParser.T__26);
				this.state = 390;
				this.object_();
				}
				}
				this.state = 395;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public object_(): Object_Context {
		let localctx: Object_Context = new Object_Context(this, this._ctx, this.state);
		this.enterRule(localctx, 70, SparqlParser.RULE_object_);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 396;
			this.graphNode();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public verb(): VerbContext {
		let localctx: VerbContext = new VerbContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, SparqlParser.RULE_verb);
		try {
			this.state = 400;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 59:
			case 60:
			case 61:
			case 63:
			case 64:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 398;
				this.varOrIRIref();
				}
				break;
			case 30:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 399;
				this.match(SparqlParser.T__29);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public triplesNode(): TriplesNodeContext {
		let localctx: TriplesNodeContext = new TriplesNodeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, SparqlParser.RULE_triplesNode);
		try {
			this.state = 404;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 26:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 402;
				this.collection();
				}
				break;
			case 31:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 403;
				this.blankNodePropertyList();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public blankNodePropertyList(): BlankNodePropertyListContext {
		let localctx: BlankNodePropertyListContext = new BlankNodePropertyListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, SparqlParser.RULE_blankNodePropertyList);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 406;
			this.match(SparqlParser.T__30);
			this.state = 407;
			this.propertyListNotEmpty();
			this.state = 408;
			this.match(SparqlParser.T__31);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public collection(): CollectionContext {
		let localctx: CollectionContext = new CollectionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, SparqlParser.RULE_collection);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 410;
			this.match(SparqlParser.T__25);
			this.state = 412;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 411;
				this.graphNode();
				}
				}
				this.state = 414;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===26 || _la===31 || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 52166399) !== 0));
			this.state = 416;
			this.match(SparqlParser.T__27);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public graphNode(): GraphNodeContext {
		let localctx: GraphNodeContext = new GraphNodeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, SparqlParser.RULE_graphNode);
		try {
			this.state = 420;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 76:
			case 77:
			case 81:
			case 82:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 418;
				this.varOrTerm();
				}
				break;
			case 26:
			case 31:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 419;
				this.triplesNode();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public varOrTerm(): VarOrTermContext {
		let localctx: VarOrTermContext = new VarOrTermContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, SparqlParser.RULE_varOrTerm);
		try {
			this.state = 424;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 63:
			case 64:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 422;
				this.var_();
				}
				break;
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 76:
			case 77:
			case 81:
			case 82:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 423;
				this.graphTerm();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public varOrIRIref(): VarOrIRIrefContext {
		let localctx: VarOrIRIrefContext = new VarOrIRIrefContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, SparqlParser.RULE_varOrIRIref);
		try {
			this.state = 428;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 63:
			case 64:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 426;
				this.var_();
				}
				break;
			case 59:
			case 60:
			case 61:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 427;
				this.iriRef();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public var_(): Var_Context {
		let localctx: Var_Context = new Var_Context(this, this._ctx, this.state);
		this.enterRule(localctx, 86, SparqlParser.RULE_var_);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 430;
			_la = this._input.LA(1);
			if(!(_la===63 || _la===64)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public graphTerm(): GraphTermContext {
		let localctx: GraphTermContext = new GraphTermContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, SparqlParser.RULE_graphTerm);
		try {
			this.state = 438;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 59:
			case 60:
			case 61:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 432;
				this.iriRef();
				}
				break;
			case 76:
			case 77:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 433;
				this.rdfLiteral();
				}
				break;
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 434;
				this.numericLiteral();
				}
				break;
			case 57:
			case 58:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 435;
				this.booleanLiteral();
				}
				break;
			case 62:
			case 82:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 436;
				this.blankNode();
				}
				break;
			case 81:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 437;
				this.match(SparqlParser.NIL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, SparqlParser.RULE_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 440;
			this.conditionalOrExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public conditionalOrExpression(): ConditionalOrExpressionContext {
		let localctx: ConditionalOrExpressionContext = new ConditionalOrExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, SparqlParser.RULE_conditionalOrExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 442;
			this.conditionalAndExpression();
			this.state = 447;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===33) {
				{
				{
				this.state = 443;
				this.match(SparqlParser.T__32);
				this.state = 444;
				this.conditionalAndExpression();
				}
				}
				this.state = 449;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public conditionalAndExpression(): ConditionalAndExpressionContext {
		let localctx: ConditionalAndExpressionContext = new ConditionalAndExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, SparqlParser.RULE_conditionalAndExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 450;
			this.valueLogical();
			this.state = 455;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===34) {
				{
				{
				this.state = 451;
				this.match(SparqlParser.T__33);
				this.state = 452;
				this.valueLogical();
				}
				}
				this.state = 457;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public valueLogical(): ValueLogicalContext {
		let localctx: ValueLogicalContext = new ValueLogicalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, SparqlParser.RULE_valueLogical);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 458;
			this.relationalExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relationalExpression(): RelationalExpressionContext {
		let localctx: RelationalExpressionContext = new RelationalExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, SparqlParser.RULE_relationalExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 460;
			this.numericExpression();
			this.state = 473;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 35:
				{
				this.state = 461;
				this.match(SparqlParser.T__34);
				this.state = 462;
				this.numericExpression();
				}
				break;
			case 36:
				{
				this.state = 463;
				this.match(SparqlParser.T__35);
				this.state = 464;
				this.numericExpression();
				}
				break;
			case 37:
				{
				this.state = 465;
				this.match(SparqlParser.T__36);
				this.state = 466;
				this.numericExpression();
				}
				break;
			case 38:
				{
				this.state = 467;
				this.match(SparqlParser.T__37);
				this.state = 468;
				this.numericExpression();
				}
				break;
			case 39:
				{
				this.state = 469;
				this.match(SparqlParser.T__38);
				this.state = 470;
				this.numericExpression();
				}
				break;
			case 40:
				{
				this.state = 471;
				this.match(SparqlParser.T__39);
				this.state = 472;
				this.numericExpression();
				}
				break;
			case 27:
			case 28:
			case 33:
			case 34:
				break;
			default:
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public numericExpression(): NumericExpressionContext {
		let localctx: NumericExpressionContext = new NumericExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, SparqlParser.RULE_numericExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 475;
			this.additiveExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public additiveExpression(): AdditiveExpressionContext {
		let localctx: AdditiveExpressionContext = new AdditiveExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, SparqlParser.RULE_additiveExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 477;
			this.multiplicativeExpression();
			this.state = 486;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 4026531843) !== 0) || _la===73 || _la===74) {
				{
				this.state = 484;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 41:
					{
					this.state = 478;
					this.match(SparqlParser.T__40);
					this.state = 479;
					this.multiplicativeExpression();
					}
					break;
				case 42:
					{
					this.state = 480;
					this.match(SparqlParser.T__41);
					this.state = 481;
					this.multiplicativeExpression();
					}
					break;
				case 69:
				case 70:
				case 71:
					{
					this.state = 482;
					this.numericLiteralPositive();
					}
					break;
				case 72:
				case 73:
				case 74:
					{
					this.state = 483;
					this.numericLiteralNegative();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 488;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		let localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, SparqlParser.RULE_multiplicativeExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 489;
			this.unaryExpression();
			this.state = 496;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===6 || _la===43) {
				{
				this.state = 494;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 6:
					{
					this.state = 490;
					this.match(SparqlParser.T__5);
					this.state = 491;
					this.unaryExpression();
					}
					break;
				case 43:
					{
					this.state = 492;
					this.match(SparqlParser.T__42);
					this.state = 493;
					this.unaryExpression();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 498;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unaryExpression(): UnaryExpressionContext {
		let localctx: UnaryExpressionContext = new UnaryExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, SparqlParser.RULE_unaryExpression);
		try {
			this.state = 506;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 44:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 499;
				this.match(SparqlParser.T__43);
				this.state = 500;
				this.primaryExpression();
				}
				break;
			case 41:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 501;
				this.match(SparqlParser.T__40);
				this.state = 502;
				this.primaryExpression();
				}
				break;
			case 42:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 503;
				this.match(SparqlParser.T__41);
				this.state = 504;
				this.primaryExpression();
				}
				break;
			case 26:
			case 45:
			case 46:
			case 47:
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 63:
			case 64:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 76:
			case 77:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 505;
				this.primaryExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public primaryExpression(): PrimaryExpressionContext {
		let localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, SparqlParser.RULE_primaryExpression);
		try {
			this.state = 515;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 26:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 508;
				this.brackettedExpression();
				}
				break;
			case 45:
			case 46:
			case 47:
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 509;
				this.builtInCall();
				}
				break;
			case 59:
			case 60:
			case 61:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 510;
				this.iriRefOrFunction();
				}
				break;
			case 76:
			case 77:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 511;
				this.rdfLiteral();
				}
				break;
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 512;
				this.numericLiteral();
				}
				break;
			case 57:
			case 58:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 513;
				this.booleanLiteral();
				}
				break;
			case 63:
			case 64:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 514;
				this.var_();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public brackettedExpression(): BrackettedExpressionContext {
		let localctx: BrackettedExpressionContext = new BrackettedExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, SparqlParser.RULE_brackettedExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 517;
			this.match(SparqlParser.T__25);
			this.state = 518;
			this.expression();
			this.state = 519;
			this.match(SparqlParser.T__27);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public builtInCall(): BuiltInCallContext {
		let localctx: BuiltInCallContext = new BuiltInCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, SparqlParser.RULE_builtInCall);
		try {
			this.state = 576;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 45:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 521;
				this.match(SparqlParser.T__44);
				this.state = 522;
				this.match(SparqlParser.T__25);
				this.state = 523;
				this.expression();
				this.state = 524;
				this.match(SparqlParser.T__27);
				}
				break;
			case 46:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 526;
				this.match(SparqlParser.T__45);
				this.state = 527;
				this.match(SparqlParser.T__25);
				this.state = 528;
				this.expression();
				this.state = 529;
				this.match(SparqlParser.T__27);
				}
				break;
			case 47:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 531;
				this.match(SparqlParser.T__46);
				this.state = 532;
				this.match(SparqlParser.T__25);
				this.state = 533;
				this.expression();
				this.state = 534;
				this.match(SparqlParser.T__26);
				this.state = 535;
				this.expression();
				this.state = 536;
				this.match(SparqlParser.T__27);
				}
				break;
			case 48:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 538;
				this.match(SparqlParser.T__47);
				this.state = 539;
				this.match(SparqlParser.T__25);
				this.state = 540;
				this.expression();
				this.state = 541;
				this.match(SparqlParser.T__27);
				}
				break;
			case 49:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 543;
				this.match(SparqlParser.T__48);
				this.state = 544;
				this.match(SparqlParser.T__25);
				this.state = 545;
				this.var_();
				this.state = 546;
				this.match(SparqlParser.T__27);
				}
				break;
			case 50:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 548;
				this.match(SparqlParser.T__49);
				this.state = 549;
				this.match(SparqlParser.T__25);
				this.state = 550;
				this.expression();
				this.state = 551;
				this.match(SparqlParser.T__26);
				this.state = 552;
				this.expression();
				this.state = 553;
				this.match(SparqlParser.T__27);
				}
				break;
			case 51:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 555;
				this.match(SparqlParser.T__50);
				this.state = 556;
				this.match(SparqlParser.T__25);
				this.state = 557;
				this.expression();
				this.state = 558;
				this.match(SparqlParser.T__27);
				}
				break;
			case 52:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 560;
				this.match(SparqlParser.T__51);
				this.state = 561;
				this.match(SparqlParser.T__25);
				this.state = 562;
				this.expression();
				this.state = 563;
				this.match(SparqlParser.T__27);
				}
				break;
			case 53:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 565;
				this.match(SparqlParser.T__52);
				this.state = 566;
				this.match(SparqlParser.T__25);
				this.state = 567;
				this.expression();
				this.state = 568;
				this.match(SparqlParser.T__27);
				}
				break;
			case 54:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 570;
				this.match(SparqlParser.T__53);
				this.state = 571;
				this.match(SparqlParser.T__25);
				this.state = 572;
				this.expression();
				this.state = 573;
				this.match(SparqlParser.T__27);
				}
				break;
			case 55:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 575;
				this.regexExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public regexExpression(): RegexExpressionContext {
		let localctx: RegexExpressionContext = new RegexExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, SparqlParser.RULE_regexExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 578;
			this.match(SparqlParser.T__54);
			this.state = 579;
			this.match(SparqlParser.T__25);
			this.state = 580;
			this.expression();
			this.state = 581;
			this.match(SparqlParser.T__26);
			this.state = 582;
			this.expression();
			this.state = 585;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===27) {
				{
				this.state = 583;
				this.match(SparqlParser.T__26);
				this.state = 584;
				this.expression();
				}
			}

			this.state = 587;
			this.match(SparqlParser.T__27);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public iriRefOrFunction(): IriRefOrFunctionContext {
		let localctx: IriRefOrFunctionContext = new IriRefOrFunctionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, SparqlParser.RULE_iriRefOrFunction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 589;
			this.iriRef();
			this.state = 591;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===26 || _la===81) {
				{
				this.state = 590;
				this.argList();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rdfLiteral(): RdfLiteralContext {
		let localctx: RdfLiteralContext = new RdfLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, SparqlParser.RULE_rdfLiteral);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 593;
			this.string_();
			this.state = 597;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 65:
				{
				this.state = 594;
				this.match(SparqlParser.LANGTAG);
				}
				break;
			case 56:
				{
				{
				this.state = 595;
				this.match(SparqlParser.T__55);
				this.state = 596;
				this.iriRef();
				}
				}
				break;
			case 6:
			case 19:
			case 20:
			case 21:
			case 22:
			case 23:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
			case 40:
			case 41:
			case 42:
			case 43:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 76:
			case 77:
			case 81:
			case 82:
				break;
			default:
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public numericLiteral(): NumericLiteralContext {
		let localctx: NumericLiteralContext = new NumericLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, SparqlParser.RULE_numericLiteral);
		try {
			this.state = 602;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 66:
			case 67:
			case 68:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 599;
				this.numericLiteralUnsigned();
				}
				break;
			case 69:
			case 70:
			case 71:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 600;
				this.numericLiteralPositive();
				}
				break;
			case 72:
			case 73:
			case 74:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 601;
				this.numericLiteralNegative();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public numericLiteralUnsigned(): NumericLiteralUnsignedContext {
		let localctx: NumericLiteralUnsignedContext = new NumericLiteralUnsignedContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, SparqlParser.RULE_numericLiteralUnsigned);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 604;
			_la = this._input.LA(1);
			if(!(((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 7) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public numericLiteralPositive(): NumericLiteralPositiveContext {
		let localctx: NumericLiteralPositiveContext = new NumericLiteralPositiveContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, SparqlParser.RULE_numericLiteralPositive);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 606;
			_la = this._input.LA(1);
			if(!(((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 7) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public numericLiteralNegative(): NumericLiteralNegativeContext {
		let localctx: NumericLiteralNegativeContext = new NumericLiteralNegativeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, SparqlParser.RULE_numericLiteralNegative);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 608;
			_la = this._input.LA(1);
			if(!(((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 7) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public booleanLiteral(): BooleanLiteralContext {
		let localctx: BooleanLiteralContext = new BooleanLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, SparqlParser.RULE_booleanLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 610;
			_la = this._input.LA(1);
			if(!(_la===57 || _la===58)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public string_(): String_Context {
		let localctx: String_Context = new String_Context(this, this._ctx, this.state);
		this.enterRule(localctx, 130, SparqlParser.RULE_string_);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 612;
			_la = this._input.LA(1);
			if(!(_la===76 || _la===77)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public iriRef(): IriRefContext {
		let localctx: IriRefContext = new IriRefContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, SparqlParser.RULE_iriRef);
		try {
			this.state = 616;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 59:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 614;
				this.match(SparqlParser.IRI_REF);
				}
				break;
			case 60:
			case 61:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 615;
				this.prefixedName();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public prefixedName(): PrefixedNameContext {
		let localctx: PrefixedNameContext = new PrefixedNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 134, SparqlParser.RULE_prefixedName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 618;
			_la = this._input.LA(1);
			if(!(_la===60 || _la===61)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public blankNode(): BlankNodeContext {
		let localctx: BlankNodeContext = new BlankNodeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 136, SparqlParser.RULE_blankNode);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 620;
			_la = this._input.LA(1);
			if(!(_la===62 || _la===82)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,87,623,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,
	39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,
	7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,
	53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,60,
	2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,2,
	68,7,68,1,0,1,0,1,0,1,0,1,0,3,0,144,8,0,1,0,1,0,1,1,3,1,149,8,1,1,1,5,1,
	152,8,1,10,1,12,1,155,9,1,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,3,4,166,8,
	4,1,4,4,4,169,8,4,11,4,12,4,170,1,4,3,4,174,8,4,1,4,5,4,177,8,4,10,4,12,
	4,180,9,4,1,4,1,4,1,4,1,5,1,5,1,5,5,5,188,8,5,10,5,12,5,191,9,5,1,5,1,5,
	1,5,1,6,1,6,4,6,198,8,6,11,6,12,6,199,1,6,3,6,203,8,6,1,6,5,6,206,8,6,10,
	6,12,6,209,9,6,1,6,3,6,212,8,6,1,6,1,6,1,7,1,7,5,7,218,8,7,10,7,12,7,221,
	9,7,1,7,1,7,1,8,1,8,1,8,3,8,228,8,8,1,9,1,9,1,10,1,10,1,10,1,11,1,11,1,
	12,3,12,238,8,12,1,12,1,12,1,13,3,13,243,8,13,1,13,3,13,246,8,13,1,14,1,
	14,3,14,250,8,14,1,14,1,14,3,14,254,8,14,3,14,256,8,14,1,15,1,15,1,15,4,
	15,261,8,15,11,15,12,15,262,1,16,1,16,1,16,1,16,3,16,269,8,16,3,16,271,
	8,16,1,17,1,17,1,17,1,18,1,18,1,18,1,19,1,19,3,19,281,8,19,1,19,1,19,3,
	19,285,8,19,1,19,3,19,288,8,19,1,19,3,19,291,8,19,5,19,293,8,19,10,19,12,
	19,296,9,19,1,19,1,19,1,20,1,20,1,20,3,20,303,8,20,3,20,305,8,20,1,21,1,
	21,1,21,3,21,310,8,21,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,24,1,24,1,24,
	5,24,322,8,24,10,24,12,24,325,9,24,1,25,1,25,1,25,1,26,1,26,1,26,3,26,333,
	8,26,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,5,28,343,8,28,10,28,12,28,
	346,9,28,1,28,1,28,3,28,350,8,28,1,29,1,29,3,29,354,8,29,1,29,1,29,1,30,
	1,30,1,30,3,30,361,8,30,3,30,363,8,30,1,31,1,31,1,31,1,31,1,31,1,31,3,31,
	371,8,31,1,32,1,32,1,32,1,32,1,32,1,32,3,32,379,8,32,5,32,381,8,32,10,32,
	12,32,384,9,32,1,33,3,33,387,8,33,1,34,1,34,1,34,5,34,392,8,34,10,34,12,
	34,395,9,34,1,35,1,35,1,36,1,36,3,36,401,8,36,1,37,1,37,3,37,405,8,37,1,
	38,1,38,1,38,1,38,1,39,1,39,4,39,413,8,39,11,39,12,39,414,1,39,1,39,1,40,
	1,40,3,40,421,8,40,1,41,1,41,3,41,425,8,41,1,42,1,42,3,42,429,8,42,1,43,
	1,43,1,44,1,44,1,44,1,44,1,44,1,44,3,44,439,8,44,1,45,1,45,1,46,1,46,1,
	46,5,46,446,8,46,10,46,12,46,449,9,46,1,47,1,47,1,47,5,47,454,8,47,10,47,
	12,47,457,9,47,1,48,1,48,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,
	49,1,49,1,49,1,49,3,49,474,8,49,1,50,1,50,1,51,1,51,1,51,1,51,1,51,1,51,
	1,51,5,51,485,8,51,10,51,12,51,488,9,51,1,52,1,52,1,52,1,52,1,52,5,52,495,
	8,52,10,52,12,52,498,9,52,1,53,1,53,1,53,1,53,1,53,1,53,1,53,3,53,507,8,
	53,1,54,1,54,1,54,1,54,1,54,1,54,1,54,3,54,516,8,54,1,55,1,55,1,55,1,55,
	1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,
	56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,
	1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,
	56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,3,56,577,8,56,
	1,57,1,57,1,57,1,57,1,57,1,57,1,57,3,57,586,8,57,1,57,1,57,1,58,1,58,3,
	58,592,8,58,1,59,1,59,1,59,1,59,3,59,598,8,59,1,60,1,60,1,60,3,60,603,8,
	60,1,61,1,61,1,62,1,62,1,63,1,63,1,64,1,64,1,65,1,65,1,66,1,66,3,66,617,
	8,66,1,67,1,67,1,68,1,68,1,68,0,0,69,0,2,4,6,8,10,12,14,16,18,20,22,24,
	26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,
	74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,
	116,118,120,122,124,126,128,130,132,134,136,0,10,1,0,4,5,1,0,15,16,1,0,
	63,64,1,0,66,68,1,0,69,71,1,0,72,74,1,0,57,58,1,0,76,77,1,0,60,61,2,0,62,
	62,82,82,651,0,138,1,0,0,0,2,148,1,0,0,0,4,156,1,0,0,0,6,159,1,0,0,0,8,
	163,1,0,0,0,10,184,1,0,0,0,12,195,1,0,0,0,14,215,1,0,0,0,16,224,1,0,0,0,
	18,229,1,0,0,0,20,231,1,0,0,0,22,234,1,0,0,0,24,237,1,0,0,0,26,242,1,0,
	0,0,28,255,1,0,0,0,30,257,1,0,0,0,32,270,1,0,0,0,34,272,1,0,0,0,36,275,
	1,0,0,0,38,278,1,0,0,0,40,299,1,0,0,0,42,309,1,0,0,0,44,311,1,0,0,0,46,
	314,1,0,0,0,48,318,1,0,0,0,50,326,1,0,0,0,52,332,1,0,0,0,54,334,1,0,0,0,
	56,349,1,0,0,0,58,351,1,0,0,0,60,357,1,0,0,0,62,370,1,0,0,0,64,372,1,0,
	0,0,66,386,1,0,0,0,68,388,1,0,0,0,70,396,1,0,0,0,72,400,1,0,0,0,74,404,
	1,0,0,0,76,406,1,0,0,0,78,410,1,0,0,0,80,420,1,0,0,0,82,424,1,0,0,0,84,
	428,1,0,0,0,86,430,1,0,0,0,88,438,1,0,0,0,90,440,1,0,0,0,92,442,1,0,0,0,
	94,450,1,0,0,0,96,458,1,0,0,0,98,460,1,0,0,0,100,475,1,0,0,0,102,477,1,
	0,0,0,104,489,1,0,0,0,106,506,1,0,0,0,108,515,1,0,0,0,110,517,1,0,0,0,112,
	576,1,0,0,0,114,578,1,0,0,0,116,589,1,0,0,0,118,593,1,0,0,0,120,602,1,0,
	0,0,122,604,1,0,0,0,124,606,1,0,0,0,126,608,1,0,0,0,128,610,1,0,0,0,130,
	612,1,0,0,0,132,616,1,0,0,0,134,618,1,0,0,0,136,620,1,0,0,0,138,143,3,2,
	1,0,139,144,3,8,4,0,140,144,3,10,5,0,141,144,3,12,6,0,142,144,3,14,7,0,
	143,139,1,0,0,0,143,140,1,0,0,0,143,141,1,0,0,0,143,142,1,0,0,0,144,145,
	1,0,0,0,145,146,5,0,0,1,146,1,1,0,0,0,147,149,3,4,2,0,148,147,1,0,0,0,148,
	149,1,0,0,0,149,153,1,0,0,0,150,152,3,6,3,0,151,150,1,0,0,0,152,155,1,0,
	0,0,153,151,1,0,0,0,153,154,1,0,0,0,154,3,1,0,0,0,155,153,1,0,0,0,156,157,
	5,1,0,0,157,158,5,59,0,0,158,5,1,0,0,0,159,160,5,2,0,0,160,161,5,60,0,0,
	161,162,5,59,0,0,162,7,1,0,0,0,163,165,5,3,0,0,164,166,7,0,0,0,165,164,
	1,0,0,0,165,166,1,0,0,0,166,173,1,0,0,0,167,169,3,86,43,0,168,167,1,0,0,
	0,169,170,1,0,0,0,170,168,1,0,0,0,170,171,1,0,0,0,171,174,1,0,0,0,172,174,
	5,6,0,0,173,168,1,0,0,0,173,172,1,0,0,0,174,178,1,0,0,0,175,177,3,16,8,
	0,176,175,1,0,0,0,177,180,1,0,0,0,178,176,1,0,0,0,178,179,1,0,0,0,179,181,
	1,0,0,0,180,178,1,0,0,0,181,182,3,24,12,0,182,183,3,26,13,0,183,9,1,0,0,
	0,184,185,5,7,0,0,185,189,3,58,29,0,186,188,3,16,8,0,187,186,1,0,0,0,188,
	191,1,0,0,0,189,187,1,0,0,0,189,190,1,0,0,0,190,192,1,0,0,0,191,189,1,0,
	0,0,192,193,3,24,12,0,193,194,3,26,13,0,194,11,1,0,0,0,195,202,5,8,0,0,
	196,198,3,84,42,0,197,196,1,0,0,0,198,199,1,0,0,0,199,197,1,0,0,0,199,200,
	1,0,0,0,200,203,1,0,0,0,201,203,5,6,0,0,202,197,1,0,0,0,202,201,1,0,0,0,
	203,207,1,0,0,0,204,206,3,16,8,0,205,204,1,0,0,0,206,209,1,0,0,0,207,205,
	1,0,0,0,207,208,1,0,0,0,208,211,1,0,0,0,209,207,1,0,0,0,210,212,3,24,12,
	0,211,210,1,0,0,0,211,212,1,0,0,0,212,213,1,0,0,0,213,214,3,26,13,0,214,
	13,1,0,0,0,215,219,5,9,0,0,216,218,3,16,8,0,217,216,1,0,0,0,218,221,1,0,
	0,0,219,217,1,0,0,0,219,220,1,0,0,0,220,222,1,0,0,0,221,219,1,0,0,0,222,
	223,3,24,12,0,223,15,1,0,0,0,224,227,5,10,0,0,225,228,3,18,9,0,226,228,
	3,20,10,0,227,225,1,0,0,0,227,226,1,0,0,0,228,17,1,0,0,0,229,230,3,22,11,
	0,230,19,1,0,0,0,231,232,5,11,0,0,232,233,3,22,11,0,233,21,1,0,0,0,234,
	235,3,132,66,0,235,23,1,0,0,0,236,238,5,12,0,0,237,236,1,0,0,0,237,238,
	1,0,0,0,238,239,1,0,0,0,239,240,3,38,19,0,240,25,1,0,0,0,241,243,3,30,15,
	0,242,241,1,0,0,0,242,243,1,0,0,0,243,245,1,0,0,0,244,246,3,28,14,0,245,
	244,1,0,0,0,245,246,1,0,0,0,246,27,1,0,0,0,247,249,3,34,17,0,248,250,3,
	36,18,0,249,248,1,0,0,0,249,250,1,0,0,0,250,256,1,0,0,0,251,253,3,36,18,
	0,252,254,3,34,17,0,253,252,1,0,0,0,253,254,1,0,0,0,254,256,1,0,0,0,255,
	247,1,0,0,0,255,251,1,0,0,0,256,29,1,0,0,0,257,258,5,13,0,0,258,260,5,14,
	0,0,259,261,3,32,16,0,260,259,1,0,0,0,261,262,1,0,0,0,262,260,1,0,0,0,262,
	263,1,0,0,0,263,31,1,0,0,0,264,265,7,1,0,0,265,271,3,110,55,0,266,269,3,
	52,26,0,267,269,3,86,43,0,268,266,1,0,0,0,268,267,1,0,0,0,269,271,1,0,0,
	0,270,264,1,0,0,0,270,268,1,0,0,0,271,33,1,0,0,0,272,273,5,17,0,0,273,274,
	5,66,0,0,274,35,1,0,0,0,275,276,5,18,0,0,276,277,5,66,0,0,277,37,1,0,0,
	0,278,280,5,19,0,0,279,281,3,40,20,0,280,279,1,0,0,0,280,281,1,0,0,0,281,
	294,1,0,0,0,282,285,3,42,21,0,283,285,3,50,25,0,284,282,1,0,0,0,284,283,
	1,0,0,0,285,287,1,0,0,0,286,288,5,20,0,0,287,286,1,0,0,0,287,288,1,0,0,
	0,288,290,1,0,0,0,289,291,3,40,20,0,290,289,1,0,0,0,290,291,1,0,0,0,291,
	293,1,0,0,0,292,284,1,0,0,0,293,296,1,0,0,0,294,292,1,0,0,0,294,295,1,0,
	0,0,295,297,1,0,0,0,296,294,1,0,0,0,297,298,5,21,0,0,298,39,1,0,0,0,299,
	304,3,62,31,0,300,302,5,20,0,0,301,303,3,40,20,0,302,301,1,0,0,0,302,303,
	1,0,0,0,303,305,1,0,0,0,304,300,1,0,0,0,304,305,1,0,0,0,305,41,1,0,0,0,
	306,310,3,44,22,0,307,310,3,48,24,0,308,310,3,46,23,0,309,306,1,0,0,0,309,
	307,1,0,0,0,309,308,1,0,0,0,310,43,1,0,0,0,311,312,5,22,0,0,312,313,3,38,
	19,0,313,45,1,0,0,0,314,315,5,23,0,0,315,316,3,84,42,0,316,317,3,38,19,
	0,317,47,1,0,0,0,318,323,3,38,19,0,319,320,5,24,0,0,320,322,3,38,19,0,321,
	319,1,0,0,0,322,325,1,0,0,0,323,321,1,0,0,0,323,324,1,0,0,0,324,49,1,0,
	0,0,325,323,1,0,0,0,326,327,5,25,0,0,327,328,3,52,26,0,328,51,1,0,0,0,329,
	333,3,110,55,0,330,333,3,112,56,0,331,333,3,54,27,0,332,329,1,0,0,0,332,
	330,1,0,0,0,332,331,1,0,0,0,333,53,1,0,0,0,334,335,3,132,66,0,335,336,3,
	56,28,0,336,55,1,0,0,0,337,350,5,81,0,0,338,339,5,26,0,0,339,344,3,90,45,
	0,340,341,5,27,0,0,341,343,3,90,45,0,342,340,1,0,0,0,343,346,1,0,0,0,344,
	342,1,0,0,0,344,345,1,0,0,0,345,347,1,0,0,0,346,344,1,0,0,0,347,348,5,28,
	0,0,348,350,1,0,0,0,349,337,1,0,0,0,349,338,1,0,0,0,350,57,1,0,0,0,351,
	353,5,19,0,0,352,354,3,60,30,0,353,352,1,0,0,0,353,354,1,0,0,0,354,355,
	1,0,0,0,355,356,5,21,0,0,356,59,1,0,0,0,357,362,3,62,31,0,358,360,5,20,
	0,0,359,361,3,60,30,0,360,359,1,0,0,0,360,361,1,0,0,0,361,363,1,0,0,0,362,
	358,1,0,0,0,362,363,1,0,0,0,363,61,1,0,0,0,364,365,3,82,41,0,365,366,3,
	64,32,0,366,371,1,0,0,0,367,368,3,74,37,0,368,369,3,66,33,0,369,371,1,0,
	0,0,370,364,1,0,0,0,370,367,1,0,0,0,371,63,1,0,0,0,372,373,3,72,36,0,373,
	382,3,68,34,0,374,378,5,29,0,0,375,376,3,72,36,0,376,377,3,68,34,0,377,
	379,1,0,0,0,378,375,1,0,0,0,378,379,1,0,0,0,379,381,1,0,0,0,380,374,1,0,
	0,0,381,384,1,0,0,0,382,380,1,0,0,0,382,383,1,0,0,0,383,65,1,0,0,0,384,
	382,1,0,0,0,385,387,3,64,32,0,386,385,1,0,0,0,386,387,1,0,0,0,387,67,1,
	0,0,0,388,393,3,70,35,0,389,390,5,27,0,0,390,392,3,70,35,0,391,389,1,0,
	0,0,392,395,1,0,0,0,393,391,1,0,0,0,393,394,1,0,0,0,394,69,1,0,0,0,395,
	393,1,0,0,0,396,397,3,80,40,0,397,71,1,0,0,0,398,401,3,84,42,0,399,401,
	5,30,0,0,400,398,1,0,0,0,400,399,1,0,0,0,401,73,1,0,0,0,402,405,3,78,39,
	0,403,405,3,76,38,0,404,402,1,0,0,0,404,403,1,0,0,0,405,75,1,0,0,0,406,
	407,5,31,0,0,407,408,3,64,32,0,408,409,5,32,0,0,409,77,1,0,0,0,410,412,
	5,26,0,0,411,413,3,80,40,0,412,411,1,0,0,0,413,414,1,0,0,0,414,412,1,0,
	0,0,414,415,1,0,0,0,415,416,1,0,0,0,416,417,5,28,0,0,417,79,1,0,0,0,418,
	421,3,82,41,0,419,421,3,74,37,0,420,418,1,0,0,0,420,419,1,0,0,0,421,81,
	1,0,0,0,422,425,3,86,43,0,423,425,3,88,44,0,424,422,1,0,0,0,424,423,1,0,
	0,0,425,83,1,0,0,0,426,429,3,86,43,0,427,429,3,132,66,0,428,426,1,0,0,0,
	428,427,1,0,0,0,429,85,1,0,0,0,430,431,7,2,0,0,431,87,1,0,0,0,432,439,3,
	132,66,0,433,439,3,118,59,0,434,439,3,120,60,0,435,439,3,128,64,0,436,439,
	3,136,68,0,437,439,5,81,0,0,438,432,1,0,0,0,438,433,1,0,0,0,438,434,1,0,
	0,0,438,435,1,0,0,0,438,436,1,0,0,0,438,437,1,0,0,0,439,89,1,0,0,0,440,
	441,3,92,46,0,441,91,1,0,0,0,442,447,3,94,47,0,443,444,5,33,0,0,444,446,
	3,94,47,0,445,443,1,0,0,0,446,449,1,0,0,0,447,445,1,0,0,0,447,448,1,0,0,
	0,448,93,1,0,0,0,449,447,1,0,0,0,450,455,3,96,48,0,451,452,5,34,0,0,452,
	454,3,96,48,0,453,451,1,0,0,0,454,457,1,0,0,0,455,453,1,0,0,0,455,456,1,
	0,0,0,456,95,1,0,0,0,457,455,1,0,0,0,458,459,3,98,49,0,459,97,1,0,0,0,460,
	473,3,100,50,0,461,462,5,35,0,0,462,474,3,100,50,0,463,464,5,36,0,0,464,
	474,3,100,50,0,465,466,5,37,0,0,466,474,3,100,50,0,467,468,5,38,0,0,468,
	474,3,100,50,0,469,470,5,39,0,0,470,474,3,100,50,0,471,472,5,40,0,0,472,
	474,3,100,50,0,473,461,1,0,0,0,473,463,1,0,0,0,473,465,1,0,0,0,473,467,
	1,0,0,0,473,469,1,0,0,0,473,471,1,0,0,0,473,474,1,0,0,0,474,99,1,0,0,0,
	475,476,3,102,51,0,476,101,1,0,0,0,477,486,3,104,52,0,478,479,5,41,0,0,
	479,485,3,104,52,0,480,481,5,42,0,0,481,485,3,104,52,0,482,485,3,124,62,
	0,483,485,3,126,63,0,484,478,1,0,0,0,484,480,1,0,0,0,484,482,1,0,0,0,484,
	483,1,0,0,0,485,488,1,0,0,0,486,484,1,0,0,0,486,487,1,0,0,0,487,103,1,0,
	0,0,488,486,1,0,0,0,489,496,3,106,53,0,490,491,5,6,0,0,491,495,3,106,53,
	0,492,493,5,43,0,0,493,495,3,106,53,0,494,490,1,0,0,0,494,492,1,0,0,0,495,
	498,1,0,0,0,496,494,1,0,0,0,496,497,1,0,0,0,497,105,1,0,0,0,498,496,1,0,
	0,0,499,500,5,44,0,0,500,507,3,108,54,0,501,502,5,41,0,0,502,507,3,108,
	54,0,503,504,5,42,0,0,504,507,3,108,54,0,505,507,3,108,54,0,506,499,1,0,
	0,0,506,501,1,0,0,0,506,503,1,0,0,0,506,505,1,0,0,0,507,107,1,0,0,0,508,
	516,3,110,55,0,509,516,3,112,56,0,510,516,3,116,58,0,511,516,3,118,59,0,
	512,516,3,120,60,0,513,516,3,128,64,0,514,516,3,86,43,0,515,508,1,0,0,0,
	515,509,1,0,0,0,515,510,1,0,0,0,515,511,1,0,0,0,515,512,1,0,0,0,515,513,
	1,0,0,0,515,514,1,0,0,0,516,109,1,0,0,0,517,518,5,26,0,0,518,519,3,90,45,
	0,519,520,5,28,0,0,520,111,1,0,0,0,521,522,5,45,0,0,522,523,5,26,0,0,523,
	524,3,90,45,0,524,525,5,28,0,0,525,577,1,0,0,0,526,527,5,46,0,0,527,528,
	5,26,0,0,528,529,3,90,45,0,529,530,5,28,0,0,530,577,1,0,0,0,531,532,5,47,
	0,0,532,533,5,26,0,0,533,534,3,90,45,0,534,535,5,27,0,0,535,536,3,90,45,
	0,536,537,5,28,0,0,537,577,1,0,0,0,538,539,5,48,0,0,539,540,5,26,0,0,540,
	541,3,90,45,0,541,542,5,28,0,0,542,577,1,0,0,0,543,544,5,49,0,0,544,545,
	5,26,0,0,545,546,3,86,43,0,546,547,5,28,0,0,547,577,1,0,0,0,548,549,5,50,
	0,0,549,550,5,26,0,0,550,551,3,90,45,0,551,552,5,27,0,0,552,553,3,90,45,
	0,553,554,5,28,0,0,554,577,1,0,0,0,555,556,5,51,0,0,556,557,5,26,0,0,557,
	558,3,90,45,0,558,559,5,28,0,0,559,577,1,0,0,0,560,561,5,52,0,0,561,562,
	5,26,0,0,562,563,3,90,45,0,563,564,5,28,0,0,564,577,1,0,0,0,565,566,5,53,
	0,0,566,567,5,26,0,0,567,568,3,90,45,0,568,569,5,28,0,0,569,577,1,0,0,0,
	570,571,5,54,0,0,571,572,5,26,0,0,572,573,3,90,45,0,573,574,5,28,0,0,574,
	577,1,0,0,0,575,577,3,114,57,0,576,521,1,0,0,0,576,526,1,0,0,0,576,531,
	1,0,0,0,576,538,1,0,0,0,576,543,1,0,0,0,576,548,1,0,0,0,576,555,1,0,0,0,
	576,560,1,0,0,0,576,565,1,0,0,0,576,570,1,0,0,0,576,575,1,0,0,0,577,113,
	1,0,0,0,578,579,5,55,0,0,579,580,5,26,0,0,580,581,3,90,45,0,581,582,5,27,
	0,0,582,585,3,90,45,0,583,584,5,27,0,0,584,586,3,90,45,0,585,583,1,0,0,
	0,585,586,1,0,0,0,586,587,1,0,0,0,587,588,5,28,0,0,588,115,1,0,0,0,589,
	591,3,132,66,0,590,592,3,56,28,0,591,590,1,0,0,0,591,592,1,0,0,0,592,117,
	1,0,0,0,593,597,3,130,65,0,594,598,5,65,0,0,595,596,5,56,0,0,596,598,3,
	132,66,0,597,594,1,0,0,0,597,595,1,0,0,0,597,598,1,0,0,0,598,119,1,0,0,
	0,599,603,3,122,61,0,600,603,3,124,62,0,601,603,3,126,63,0,602,599,1,0,
	0,0,602,600,1,0,0,0,602,601,1,0,0,0,603,121,1,0,0,0,604,605,7,3,0,0,605,
	123,1,0,0,0,606,607,7,4,0,0,607,125,1,0,0,0,608,609,7,5,0,0,609,127,1,0,
	0,0,610,611,7,6,0,0,611,129,1,0,0,0,612,613,7,7,0,0,613,131,1,0,0,0,614,
	617,5,59,0,0,615,617,3,134,67,0,616,614,1,0,0,0,616,615,1,0,0,0,617,133,
	1,0,0,0,618,619,7,8,0,0,619,135,1,0,0,0,620,621,7,9,0,0,621,137,1,0,0,0,
	65,143,148,153,165,170,173,178,189,199,202,207,211,219,227,237,242,245,
	249,253,255,262,268,270,280,284,287,290,294,302,304,309,323,332,344,349,
	353,360,362,370,378,382,386,393,400,404,414,420,424,428,438,447,455,473,
	484,486,494,496,506,515,576,585,591,597,602,616];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SparqlParser.__ATN) {
			SparqlParser.__ATN = new ATNDeserializer().deserialize(SparqlParser._serializedATN);
		}

		return SparqlParser.__ATN;
	}


	static DecisionsToDFA = SparqlParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class QueryContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public prologue(): PrologueContext {
		return this.getTypedRuleContext(PrologueContext, 0) as PrologueContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(SparqlParser.EOF, 0);
	}
	public selectQuery(): SelectQueryContext {
		return this.getTypedRuleContext(SelectQueryContext, 0) as SelectQueryContext;
	}
	public constructQuery(): ConstructQueryContext {
		return this.getTypedRuleContext(ConstructQueryContext, 0) as ConstructQueryContext;
	}
	public describeQuery(): DescribeQueryContext {
		return this.getTypedRuleContext(DescribeQueryContext, 0) as DescribeQueryContext;
	}
	public askQuery(): AskQueryContext {
		return this.getTypedRuleContext(AskQueryContext, 0) as AskQueryContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_query;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterQuery) {
	 		listener.enterQuery(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitQuery) {
	 		listener.exitQuery(this);
		}
	}
}


export class PrologueContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public baseDecl(): BaseDeclContext {
		return this.getTypedRuleContext(BaseDeclContext, 0) as BaseDeclContext;
	}
	public prefixDecl_list(): PrefixDeclContext[] {
		return this.getTypedRuleContexts(PrefixDeclContext) as PrefixDeclContext[];
	}
	public prefixDecl(i: number): PrefixDeclContext {
		return this.getTypedRuleContext(PrefixDeclContext, i) as PrefixDeclContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_prologue;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterPrologue) {
	 		listener.enterPrologue(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitPrologue) {
	 		listener.exitPrologue(this);
		}
	}
}


export class BaseDeclContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IRI_REF(): TerminalNode {
		return this.getToken(SparqlParser.IRI_REF, 0);
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_baseDecl;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterBaseDecl) {
	 		listener.enterBaseDecl(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitBaseDecl) {
	 		listener.exitBaseDecl(this);
		}
	}
}


export class PrefixDeclContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PNAME_NS(): TerminalNode {
		return this.getToken(SparqlParser.PNAME_NS, 0);
	}
	public IRI_REF(): TerminalNode {
		return this.getToken(SparqlParser.IRI_REF, 0);
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_prefixDecl;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterPrefixDecl) {
	 		listener.enterPrefixDecl(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitPrefixDecl) {
	 		listener.exitPrefixDecl(this);
		}
	}
}


export class SelectQueryContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public whereClause(): WhereClauseContext {
		return this.getTypedRuleContext(WhereClauseContext, 0) as WhereClauseContext;
	}
	public solutionModifier(): SolutionModifierContext {
		return this.getTypedRuleContext(SolutionModifierContext, 0) as SolutionModifierContext;
	}
	public datasetClause_list(): DatasetClauseContext[] {
		return this.getTypedRuleContexts(DatasetClauseContext) as DatasetClauseContext[];
	}
	public datasetClause(i: number): DatasetClauseContext {
		return this.getTypedRuleContext(DatasetClauseContext, i) as DatasetClauseContext;
	}
	public var__list(): Var_Context[] {
		return this.getTypedRuleContexts(Var_Context) as Var_Context[];
	}
	public var_(i: number): Var_Context {
		return this.getTypedRuleContext(Var_Context, i) as Var_Context;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_selectQuery;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterSelectQuery) {
	 		listener.enterSelectQuery(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitSelectQuery) {
	 		listener.exitSelectQuery(this);
		}
	}
}


export class ConstructQueryContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public constructTemplate(): ConstructTemplateContext {
		return this.getTypedRuleContext(ConstructTemplateContext, 0) as ConstructTemplateContext;
	}
	public whereClause(): WhereClauseContext {
		return this.getTypedRuleContext(WhereClauseContext, 0) as WhereClauseContext;
	}
	public solutionModifier(): SolutionModifierContext {
		return this.getTypedRuleContext(SolutionModifierContext, 0) as SolutionModifierContext;
	}
	public datasetClause_list(): DatasetClauseContext[] {
		return this.getTypedRuleContexts(DatasetClauseContext) as DatasetClauseContext[];
	}
	public datasetClause(i: number): DatasetClauseContext {
		return this.getTypedRuleContext(DatasetClauseContext, i) as DatasetClauseContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_constructQuery;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterConstructQuery) {
	 		listener.enterConstructQuery(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitConstructQuery) {
	 		listener.exitConstructQuery(this);
		}
	}
}


export class DescribeQueryContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public solutionModifier(): SolutionModifierContext {
		return this.getTypedRuleContext(SolutionModifierContext, 0) as SolutionModifierContext;
	}
	public datasetClause_list(): DatasetClauseContext[] {
		return this.getTypedRuleContexts(DatasetClauseContext) as DatasetClauseContext[];
	}
	public datasetClause(i: number): DatasetClauseContext {
		return this.getTypedRuleContext(DatasetClauseContext, i) as DatasetClauseContext;
	}
	public whereClause(): WhereClauseContext {
		return this.getTypedRuleContext(WhereClauseContext, 0) as WhereClauseContext;
	}
	public varOrIRIref_list(): VarOrIRIrefContext[] {
		return this.getTypedRuleContexts(VarOrIRIrefContext) as VarOrIRIrefContext[];
	}
	public varOrIRIref(i: number): VarOrIRIrefContext {
		return this.getTypedRuleContext(VarOrIRIrefContext, i) as VarOrIRIrefContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_describeQuery;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterDescribeQuery) {
	 		listener.enterDescribeQuery(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitDescribeQuery) {
	 		listener.exitDescribeQuery(this);
		}
	}
}


export class AskQueryContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public whereClause(): WhereClauseContext {
		return this.getTypedRuleContext(WhereClauseContext, 0) as WhereClauseContext;
	}
	public datasetClause_list(): DatasetClauseContext[] {
		return this.getTypedRuleContexts(DatasetClauseContext) as DatasetClauseContext[];
	}
	public datasetClause(i: number): DatasetClauseContext {
		return this.getTypedRuleContext(DatasetClauseContext, i) as DatasetClauseContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_askQuery;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterAskQuery) {
	 		listener.enterAskQuery(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitAskQuery) {
	 		listener.exitAskQuery(this);
		}
	}
}


export class DatasetClauseContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public defaultGraphClause(): DefaultGraphClauseContext {
		return this.getTypedRuleContext(DefaultGraphClauseContext, 0) as DefaultGraphClauseContext;
	}
	public namedGraphClause(): NamedGraphClauseContext {
		return this.getTypedRuleContext(NamedGraphClauseContext, 0) as NamedGraphClauseContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_datasetClause;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterDatasetClause) {
	 		listener.enterDatasetClause(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitDatasetClause) {
	 		listener.exitDatasetClause(this);
		}
	}
}


export class DefaultGraphClauseContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public sourceSelector(): SourceSelectorContext {
		return this.getTypedRuleContext(SourceSelectorContext, 0) as SourceSelectorContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_defaultGraphClause;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterDefaultGraphClause) {
	 		listener.enterDefaultGraphClause(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitDefaultGraphClause) {
	 		listener.exitDefaultGraphClause(this);
		}
	}
}


export class NamedGraphClauseContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public sourceSelector(): SourceSelectorContext {
		return this.getTypedRuleContext(SourceSelectorContext, 0) as SourceSelectorContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_namedGraphClause;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterNamedGraphClause) {
	 		listener.enterNamedGraphClause(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitNamedGraphClause) {
	 		listener.exitNamedGraphClause(this);
		}
	}
}


export class SourceSelectorContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public iriRef(): IriRefContext {
		return this.getTypedRuleContext(IriRefContext, 0) as IriRefContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_sourceSelector;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterSourceSelector) {
	 		listener.enterSourceSelector(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitSourceSelector) {
	 		listener.exitSourceSelector(this);
		}
	}
}


export class WhereClauseContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public groupGraphPattern(): GroupGraphPatternContext {
		return this.getTypedRuleContext(GroupGraphPatternContext, 0) as GroupGraphPatternContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_whereClause;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterWhereClause) {
	 		listener.enterWhereClause(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitWhereClause) {
	 		listener.exitWhereClause(this);
		}
	}
}


export class SolutionModifierContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public orderClause(): OrderClauseContext {
		return this.getTypedRuleContext(OrderClauseContext, 0) as OrderClauseContext;
	}
	public limitOffsetClauses(): LimitOffsetClausesContext {
		return this.getTypedRuleContext(LimitOffsetClausesContext, 0) as LimitOffsetClausesContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_solutionModifier;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterSolutionModifier) {
	 		listener.enterSolutionModifier(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitSolutionModifier) {
	 		listener.exitSolutionModifier(this);
		}
	}
}


export class LimitOffsetClausesContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public limitClause(): LimitClauseContext {
		return this.getTypedRuleContext(LimitClauseContext, 0) as LimitClauseContext;
	}
	public offsetClause(): OffsetClauseContext {
		return this.getTypedRuleContext(OffsetClauseContext, 0) as OffsetClauseContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_limitOffsetClauses;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterLimitOffsetClauses) {
	 		listener.enterLimitOffsetClauses(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitLimitOffsetClauses) {
	 		listener.exitLimitOffsetClauses(this);
		}
	}
}


export class OrderClauseContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public orderCondition_list(): OrderConditionContext[] {
		return this.getTypedRuleContexts(OrderConditionContext) as OrderConditionContext[];
	}
	public orderCondition(i: number): OrderConditionContext {
		return this.getTypedRuleContext(OrderConditionContext, i) as OrderConditionContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_orderClause;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterOrderClause) {
	 		listener.enterOrderClause(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitOrderClause) {
	 		listener.exitOrderClause(this);
		}
	}
}


export class OrderConditionContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public brackettedExpression(): BrackettedExpressionContext {
		return this.getTypedRuleContext(BrackettedExpressionContext, 0) as BrackettedExpressionContext;
	}
	public constraint(): ConstraintContext {
		return this.getTypedRuleContext(ConstraintContext, 0) as ConstraintContext;
	}
	public var_(): Var_Context {
		return this.getTypedRuleContext(Var_Context, 0) as Var_Context;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_orderCondition;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterOrderCondition) {
	 		listener.enterOrderCondition(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitOrderCondition) {
	 		listener.exitOrderCondition(this);
		}
	}
}


export class LimitClauseContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INTEGER(): TerminalNode {
		return this.getToken(SparqlParser.INTEGER, 0);
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_limitClause;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterLimitClause) {
	 		listener.enterLimitClause(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitLimitClause) {
	 		listener.exitLimitClause(this);
		}
	}
}


export class OffsetClauseContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INTEGER(): TerminalNode {
		return this.getToken(SparqlParser.INTEGER, 0);
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_offsetClause;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterOffsetClause) {
	 		listener.enterOffsetClause(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitOffsetClause) {
	 		listener.exitOffsetClause(this);
		}
	}
}


export class GroupGraphPatternContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public triplesBlock_list(): TriplesBlockContext[] {
		return this.getTypedRuleContexts(TriplesBlockContext) as TriplesBlockContext[];
	}
	public triplesBlock(i: number): TriplesBlockContext {
		return this.getTypedRuleContext(TriplesBlockContext, i) as TriplesBlockContext;
	}
	public graphPatternNotTriples_list(): GraphPatternNotTriplesContext[] {
		return this.getTypedRuleContexts(GraphPatternNotTriplesContext) as GraphPatternNotTriplesContext[];
	}
	public graphPatternNotTriples(i: number): GraphPatternNotTriplesContext {
		return this.getTypedRuleContext(GraphPatternNotTriplesContext, i) as GraphPatternNotTriplesContext;
	}
	public filter__list(): Filter_Context[] {
		return this.getTypedRuleContexts(Filter_Context) as Filter_Context[];
	}
	public filter_(i: number): Filter_Context {
		return this.getTypedRuleContext(Filter_Context, i) as Filter_Context;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_groupGraphPattern;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterGroupGraphPattern) {
	 		listener.enterGroupGraphPattern(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitGroupGraphPattern) {
	 		listener.exitGroupGraphPattern(this);
		}
	}
}


export class TriplesBlockContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public triplesSameSubject(): TriplesSameSubjectContext {
		return this.getTypedRuleContext(TriplesSameSubjectContext, 0) as TriplesSameSubjectContext;
	}
	public triplesBlock(): TriplesBlockContext {
		return this.getTypedRuleContext(TriplesBlockContext, 0) as TriplesBlockContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_triplesBlock;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterTriplesBlock) {
	 		listener.enterTriplesBlock(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitTriplesBlock) {
	 		listener.exitTriplesBlock(this);
		}
	}
}


export class GraphPatternNotTriplesContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public optionalGraphPattern(): OptionalGraphPatternContext {
		return this.getTypedRuleContext(OptionalGraphPatternContext, 0) as OptionalGraphPatternContext;
	}
	public groupOrUnionGraphPattern(): GroupOrUnionGraphPatternContext {
		return this.getTypedRuleContext(GroupOrUnionGraphPatternContext, 0) as GroupOrUnionGraphPatternContext;
	}
	public graphGraphPattern(): GraphGraphPatternContext {
		return this.getTypedRuleContext(GraphGraphPatternContext, 0) as GraphGraphPatternContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_graphPatternNotTriples;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterGraphPatternNotTriples) {
	 		listener.enterGraphPatternNotTriples(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitGraphPatternNotTriples) {
	 		listener.exitGraphPatternNotTriples(this);
		}
	}
}


export class OptionalGraphPatternContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public groupGraphPattern(): GroupGraphPatternContext {
		return this.getTypedRuleContext(GroupGraphPatternContext, 0) as GroupGraphPatternContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_optionalGraphPattern;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterOptionalGraphPattern) {
	 		listener.enterOptionalGraphPattern(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitOptionalGraphPattern) {
	 		listener.exitOptionalGraphPattern(this);
		}
	}
}


export class GraphGraphPatternContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public varOrIRIref(): VarOrIRIrefContext {
		return this.getTypedRuleContext(VarOrIRIrefContext, 0) as VarOrIRIrefContext;
	}
	public groupGraphPattern(): GroupGraphPatternContext {
		return this.getTypedRuleContext(GroupGraphPatternContext, 0) as GroupGraphPatternContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_graphGraphPattern;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterGraphGraphPattern) {
	 		listener.enterGraphGraphPattern(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitGraphGraphPattern) {
	 		listener.exitGraphGraphPattern(this);
		}
	}
}


export class GroupOrUnionGraphPatternContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public groupGraphPattern_list(): GroupGraphPatternContext[] {
		return this.getTypedRuleContexts(GroupGraphPatternContext) as GroupGraphPatternContext[];
	}
	public groupGraphPattern(i: number): GroupGraphPatternContext {
		return this.getTypedRuleContext(GroupGraphPatternContext, i) as GroupGraphPatternContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_groupOrUnionGraphPattern;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterGroupOrUnionGraphPattern) {
	 		listener.enterGroupOrUnionGraphPattern(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitGroupOrUnionGraphPattern) {
	 		listener.exitGroupOrUnionGraphPattern(this);
		}
	}
}


export class Filter_Context extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public constraint(): ConstraintContext {
		return this.getTypedRuleContext(ConstraintContext, 0) as ConstraintContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_filter_;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterFilter_) {
	 		listener.enterFilter_(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitFilter_) {
	 		listener.exitFilter_(this);
		}
	}
}


export class ConstraintContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public brackettedExpression(): BrackettedExpressionContext {
		return this.getTypedRuleContext(BrackettedExpressionContext, 0) as BrackettedExpressionContext;
	}
	public builtInCall(): BuiltInCallContext {
		return this.getTypedRuleContext(BuiltInCallContext, 0) as BuiltInCallContext;
	}
	public functionCall(): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_constraint;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterConstraint) {
	 		listener.enterConstraint(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitConstraint) {
	 		listener.exitConstraint(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public iriRef(): IriRefContext {
		return this.getTypedRuleContext(IriRefContext, 0) as IriRefContext;
	}
	public argList(): ArgListContext {
		return this.getTypedRuleContext(ArgListContext, 0) as ArgListContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_functionCall;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterFunctionCall) {
	 		listener.enterFunctionCall(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitFunctionCall) {
	 		listener.exitFunctionCall(this);
		}
	}
}


export class ArgListContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NIL(): TerminalNode {
		return this.getToken(SparqlParser.NIL, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_argList;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterArgList) {
	 		listener.enterArgList(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitArgList) {
	 		listener.exitArgList(this);
		}
	}
}


export class ConstructTemplateContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public constructTriples(): ConstructTriplesContext {
		return this.getTypedRuleContext(ConstructTriplesContext, 0) as ConstructTriplesContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_constructTemplate;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterConstructTemplate) {
	 		listener.enterConstructTemplate(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitConstructTemplate) {
	 		listener.exitConstructTemplate(this);
		}
	}
}


export class ConstructTriplesContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public triplesSameSubject(): TriplesSameSubjectContext {
		return this.getTypedRuleContext(TriplesSameSubjectContext, 0) as TriplesSameSubjectContext;
	}
	public constructTriples(): ConstructTriplesContext {
		return this.getTypedRuleContext(ConstructTriplesContext, 0) as ConstructTriplesContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_constructTriples;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterConstructTriples) {
	 		listener.enterConstructTriples(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitConstructTriples) {
	 		listener.exitConstructTriples(this);
		}
	}
}


export class TriplesSameSubjectContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public varOrTerm(): VarOrTermContext {
		return this.getTypedRuleContext(VarOrTermContext, 0) as VarOrTermContext;
	}
	public propertyListNotEmpty(): PropertyListNotEmptyContext {
		return this.getTypedRuleContext(PropertyListNotEmptyContext, 0) as PropertyListNotEmptyContext;
	}
	public triplesNode(): TriplesNodeContext {
		return this.getTypedRuleContext(TriplesNodeContext, 0) as TriplesNodeContext;
	}
	public propertyList(): PropertyListContext {
		return this.getTypedRuleContext(PropertyListContext, 0) as PropertyListContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_triplesSameSubject;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterTriplesSameSubject) {
	 		listener.enterTriplesSameSubject(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitTriplesSameSubject) {
	 		listener.exitTriplesSameSubject(this);
		}
	}
}


export class PropertyListNotEmptyContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public verb_list(): VerbContext[] {
		return this.getTypedRuleContexts(VerbContext) as VerbContext[];
	}
	public verb(i: number): VerbContext {
		return this.getTypedRuleContext(VerbContext, i) as VerbContext;
	}
	public objectList_list(): ObjectListContext[] {
		return this.getTypedRuleContexts(ObjectListContext) as ObjectListContext[];
	}
	public objectList(i: number): ObjectListContext {
		return this.getTypedRuleContext(ObjectListContext, i) as ObjectListContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_propertyListNotEmpty;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterPropertyListNotEmpty) {
	 		listener.enterPropertyListNotEmpty(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitPropertyListNotEmpty) {
	 		listener.exitPropertyListNotEmpty(this);
		}
	}
}


export class PropertyListContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public propertyListNotEmpty(): PropertyListNotEmptyContext {
		return this.getTypedRuleContext(PropertyListNotEmptyContext, 0) as PropertyListNotEmptyContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_propertyList;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterPropertyList) {
	 		listener.enterPropertyList(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitPropertyList) {
	 		listener.exitPropertyList(this);
		}
	}
}


export class ObjectListContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public object__list(): Object_Context[] {
		return this.getTypedRuleContexts(Object_Context) as Object_Context[];
	}
	public object_(i: number): Object_Context {
		return this.getTypedRuleContext(Object_Context, i) as Object_Context;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_objectList;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterObjectList) {
	 		listener.enterObjectList(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitObjectList) {
	 		listener.exitObjectList(this);
		}
	}
}


export class Object_Context extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public graphNode(): GraphNodeContext {
		return this.getTypedRuleContext(GraphNodeContext, 0) as GraphNodeContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_object_;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterObject_) {
	 		listener.enterObject_(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitObject_) {
	 		listener.exitObject_(this);
		}
	}
}


export class VerbContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public varOrIRIref(): VarOrIRIrefContext {
		return this.getTypedRuleContext(VarOrIRIrefContext, 0) as VarOrIRIrefContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_verb;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterVerb) {
	 		listener.enterVerb(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitVerb) {
	 		listener.exitVerb(this);
		}
	}
}


export class TriplesNodeContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public collection(): CollectionContext {
		return this.getTypedRuleContext(CollectionContext, 0) as CollectionContext;
	}
	public blankNodePropertyList(): BlankNodePropertyListContext {
		return this.getTypedRuleContext(BlankNodePropertyListContext, 0) as BlankNodePropertyListContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_triplesNode;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterTriplesNode) {
	 		listener.enterTriplesNode(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitTriplesNode) {
	 		listener.exitTriplesNode(this);
		}
	}
}


export class BlankNodePropertyListContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public propertyListNotEmpty(): PropertyListNotEmptyContext {
		return this.getTypedRuleContext(PropertyListNotEmptyContext, 0) as PropertyListNotEmptyContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_blankNodePropertyList;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterBlankNodePropertyList) {
	 		listener.enterBlankNodePropertyList(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitBlankNodePropertyList) {
	 		listener.exitBlankNodePropertyList(this);
		}
	}
}


export class CollectionContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public graphNode_list(): GraphNodeContext[] {
		return this.getTypedRuleContexts(GraphNodeContext) as GraphNodeContext[];
	}
	public graphNode(i: number): GraphNodeContext {
		return this.getTypedRuleContext(GraphNodeContext, i) as GraphNodeContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_collection;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterCollection) {
	 		listener.enterCollection(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitCollection) {
	 		listener.exitCollection(this);
		}
	}
}


export class GraphNodeContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public varOrTerm(): VarOrTermContext {
		return this.getTypedRuleContext(VarOrTermContext, 0) as VarOrTermContext;
	}
	public triplesNode(): TriplesNodeContext {
		return this.getTypedRuleContext(TriplesNodeContext, 0) as TriplesNodeContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_graphNode;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterGraphNode) {
	 		listener.enterGraphNode(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitGraphNode) {
	 		listener.exitGraphNode(this);
		}
	}
}


export class VarOrTermContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public var_(): Var_Context {
		return this.getTypedRuleContext(Var_Context, 0) as Var_Context;
	}
	public graphTerm(): GraphTermContext {
		return this.getTypedRuleContext(GraphTermContext, 0) as GraphTermContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_varOrTerm;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterVarOrTerm) {
	 		listener.enterVarOrTerm(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitVarOrTerm) {
	 		listener.exitVarOrTerm(this);
		}
	}
}


export class VarOrIRIrefContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public var_(): Var_Context {
		return this.getTypedRuleContext(Var_Context, 0) as Var_Context;
	}
	public iriRef(): IriRefContext {
		return this.getTypedRuleContext(IriRefContext, 0) as IriRefContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_varOrIRIref;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterVarOrIRIref) {
	 		listener.enterVarOrIRIref(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitVarOrIRIref) {
	 		listener.exitVarOrIRIref(this);
		}
	}
}


export class Var_Context extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VAR1(): TerminalNode {
		return this.getToken(SparqlParser.VAR1, 0);
	}
	public VAR2(): TerminalNode {
		return this.getToken(SparqlParser.VAR2, 0);
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_var_;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterVar_) {
	 		listener.enterVar_(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitVar_) {
	 		listener.exitVar_(this);
		}
	}
}


export class GraphTermContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public iriRef(): IriRefContext {
		return this.getTypedRuleContext(IriRefContext, 0) as IriRefContext;
	}
	public rdfLiteral(): RdfLiteralContext {
		return this.getTypedRuleContext(RdfLiteralContext, 0) as RdfLiteralContext;
	}
	public numericLiteral(): NumericLiteralContext {
		return this.getTypedRuleContext(NumericLiteralContext, 0) as NumericLiteralContext;
	}
	public booleanLiteral(): BooleanLiteralContext {
		return this.getTypedRuleContext(BooleanLiteralContext, 0) as BooleanLiteralContext;
	}
	public blankNode(): BlankNodeContext {
		return this.getTypedRuleContext(BlankNodeContext, 0) as BlankNodeContext;
	}
	public NIL(): TerminalNode {
		return this.getToken(SparqlParser.NIL, 0);
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_graphTerm;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterGraphTerm) {
	 		listener.enterGraphTerm(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitGraphTerm) {
	 		listener.exitGraphTerm(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public conditionalOrExpression(): ConditionalOrExpressionContext {
		return this.getTypedRuleContext(ConditionalOrExpressionContext, 0) as ConditionalOrExpressionContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_expression;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
}


export class ConditionalOrExpressionContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public conditionalAndExpression_list(): ConditionalAndExpressionContext[] {
		return this.getTypedRuleContexts(ConditionalAndExpressionContext) as ConditionalAndExpressionContext[];
	}
	public conditionalAndExpression(i: number): ConditionalAndExpressionContext {
		return this.getTypedRuleContext(ConditionalAndExpressionContext, i) as ConditionalAndExpressionContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_conditionalOrExpression;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterConditionalOrExpression) {
	 		listener.enterConditionalOrExpression(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitConditionalOrExpression) {
	 		listener.exitConditionalOrExpression(this);
		}
	}
}


export class ConditionalAndExpressionContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public valueLogical_list(): ValueLogicalContext[] {
		return this.getTypedRuleContexts(ValueLogicalContext) as ValueLogicalContext[];
	}
	public valueLogical(i: number): ValueLogicalContext {
		return this.getTypedRuleContext(ValueLogicalContext, i) as ValueLogicalContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_conditionalAndExpression;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterConditionalAndExpression) {
	 		listener.enterConditionalAndExpression(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitConditionalAndExpression) {
	 		listener.exitConditionalAndExpression(this);
		}
	}
}


export class ValueLogicalContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public relationalExpression(): RelationalExpressionContext {
		return this.getTypedRuleContext(RelationalExpressionContext, 0) as RelationalExpressionContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_valueLogical;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterValueLogical) {
	 		listener.enterValueLogical(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitValueLogical) {
	 		listener.exitValueLogical(this);
		}
	}
}


export class RelationalExpressionContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public numericExpression_list(): NumericExpressionContext[] {
		return this.getTypedRuleContexts(NumericExpressionContext) as NumericExpressionContext[];
	}
	public numericExpression(i: number): NumericExpressionContext {
		return this.getTypedRuleContext(NumericExpressionContext, i) as NumericExpressionContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_relationalExpression;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterRelationalExpression) {
	 		listener.enterRelationalExpression(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitRelationalExpression) {
	 		listener.exitRelationalExpression(this);
		}
	}
}


export class NumericExpressionContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public additiveExpression(): AdditiveExpressionContext {
		return this.getTypedRuleContext(AdditiveExpressionContext, 0) as AdditiveExpressionContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_numericExpression;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterNumericExpression) {
	 		listener.enterNumericExpression(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitNumericExpression) {
	 		listener.exitNumericExpression(this);
		}
	}
}


export class AdditiveExpressionContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public multiplicativeExpression_list(): MultiplicativeExpressionContext[] {
		return this.getTypedRuleContexts(MultiplicativeExpressionContext) as MultiplicativeExpressionContext[];
	}
	public multiplicativeExpression(i: number): MultiplicativeExpressionContext {
		return this.getTypedRuleContext(MultiplicativeExpressionContext, i) as MultiplicativeExpressionContext;
	}
	public numericLiteralPositive_list(): NumericLiteralPositiveContext[] {
		return this.getTypedRuleContexts(NumericLiteralPositiveContext) as NumericLiteralPositiveContext[];
	}
	public numericLiteralPositive(i: number): NumericLiteralPositiveContext {
		return this.getTypedRuleContext(NumericLiteralPositiveContext, i) as NumericLiteralPositiveContext;
	}
	public numericLiteralNegative_list(): NumericLiteralNegativeContext[] {
		return this.getTypedRuleContexts(NumericLiteralNegativeContext) as NumericLiteralNegativeContext[];
	}
	public numericLiteralNegative(i: number): NumericLiteralNegativeContext {
		return this.getTypedRuleContext(NumericLiteralNegativeContext, i) as NumericLiteralNegativeContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_additiveExpression;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterAdditiveExpression) {
	 		listener.enterAdditiveExpression(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitAdditiveExpression) {
	 		listener.exitAdditiveExpression(this);
		}
	}
}


export class MultiplicativeExpressionContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unaryExpression_list(): UnaryExpressionContext[] {
		return this.getTypedRuleContexts(UnaryExpressionContext) as UnaryExpressionContext[];
	}
	public unaryExpression(i: number): UnaryExpressionContext {
		return this.getTypedRuleContext(UnaryExpressionContext, i) as UnaryExpressionContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_multiplicativeExpression;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterMultiplicativeExpression) {
	 		listener.enterMultiplicativeExpression(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitMultiplicativeExpression) {
	 		listener.exitMultiplicativeExpression(this);
		}
	}
}


export class UnaryExpressionContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_unaryExpression;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterUnaryExpression) {
	 		listener.enterUnaryExpression(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitUnaryExpression) {
	 		listener.exitUnaryExpression(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public brackettedExpression(): BrackettedExpressionContext {
		return this.getTypedRuleContext(BrackettedExpressionContext, 0) as BrackettedExpressionContext;
	}
	public builtInCall(): BuiltInCallContext {
		return this.getTypedRuleContext(BuiltInCallContext, 0) as BuiltInCallContext;
	}
	public iriRefOrFunction(): IriRefOrFunctionContext {
		return this.getTypedRuleContext(IriRefOrFunctionContext, 0) as IriRefOrFunctionContext;
	}
	public rdfLiteral(): RdfLiteralContext {
		return this.getTypedRuleContext(RdfLiteralContext, 0) as RdfLiteralContext;
	}
	public numericLiteral(): NumericLiteralContext {
		return this.getTypedRuleContext(NumericLiteralContext, 0) as NumericLiteralContext;
	}
	public booleanLiteral(): BooleanLiteralContext {
		return this.getTypedRuleContext(BooleanLiteralContext, 0) as BooleanLiteralContext;
	}
	public var_(): Var_Context {
		return this.getTypedRuleContext(Var_Context, 0) as Var_Context;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_primaryExpression;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterPrimaryExpression) {
	 		listener.enterPrimaryExpression(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitPrimaryExpression) {
	 		listener.exitPrimaryExpression(this);
		}
	}
}


export class BrackettedExpressionContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_brackettedExpression;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterBrackettedExpression) {
	 		listener.enterBrackettedExpression(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitBrackettedExpression) {
	 		listener.exitBrackettedExpression(this);
		}
	}
}


export class BuiltInCallContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public var_(): Var_Context {
		return this.getTypedRuleContext(Var_Context, 0) as Var_Context;
	}
	public regexExpression(): RegexExpressionContext {
		return this.getTypedRuleContext(RegexExpressionContext, 0) as RegexExpressionContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_builtInCall;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterBuiltInCall) {
	 		listener.enterBuiltInCall(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitBuiltInCall) {
	 		listener.exitBuiltInCall(this);
		}
	}
}


export class RegexExpressionContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_regexExpression;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterRegexExpression) {
	 		listener.enterRegexExpression(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitRegexExpression) {
	 		listener.exitRegexExpression(this);
		}
	}
}


export class IriRefOrFunctionContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public iriRef(): IriRefContext {
		return this.getTypedRuleContext(IriRefContext, 0) as IriRefContext;
	}
	public argList(): ArgListContext {
		return this.getTypedRuleContext(ArgListContext, 0) as ArgListContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_iriRefOrFunction;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterIriRefOrFunction) {
	 		listener.enterIriRefOrFunction(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitIriRefOrFunction) {
	 		listener.exitIriRefOrFunction(this);
		}
	}
}


export class RdfLiteralContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public string_(): String_Context {
		return this.getTypedRuleContext(String_Context, 0) as String_Context;
	}
	public LANGTAG(): TerminalNode {
		return this.getToken(SparqlParser.LANGTAG, 0);
	}
	public iriRef(): IriRefContext {
		return this.getTypedRuleContext(IriRefContext, 0) as IriRefContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_rdfLiteral;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterRdfLiteral) {
	 		listener.enterRdfLiteral(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitRdfLiteral) {
	 		listener.exitRdfLiteral(this);
		}
	}
}


export class NumericLiteralContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public numericLiteralUnsigned(): NumericLiteralUnsignedContext {
		return this.getTypedRuleContext(NumericLiteralUnsignedContext, 0) as NumericLiteralUnsignedContext;
	}
	public numericLiteralPositive(): NumericLiteralPositiveContext {
		return this.getTypedRuleContext(NumericLiteralPositiveContext, 0) as NumericLiteralPositiveContext;
	}
	public numericLiteralNegative(): NumericLiteralNegativeContext {
		return this.getTypedRuleContext(NumericLiteralNegativeContext, 0) as NumericLiteralNegativeContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_numericLiteral;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterNumericLiteral) {
	 		listener.enterNumericLiteral(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitNumericLiteral) {
	 		listener.exitNumericLiteral(this);
		}
	}
}


export class NumericLiteralUnsignedContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INTEGER(): TerminalNode {
		return this.getToken(SparqlParser.INTEGER, 0);
	}
	public DECIMAL(): TerminalNode {
		return this.getToken(SparqlParser.DECIMAL, 0);
	}
	public DOUBLE(): TerminalNode {
		return this.getToken(SparqlParser.DOUBLE, 0);
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_numericLiteralUnsigned;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterNumericLiteralUnsigned) {
	 		listener.enterNumericLiteralUnsigned(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitNumericLiteralUnsigned) {
	 		listener.exitNumericLiteralUnsigned(this);
		}
	}
}


export class NumericLiteralPositiveContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INTEGER_POSITIVE(): TerminalNode {
		return this.getToken(SparqlParser.INTEGER_POSITIVE, 0);
	}
	public DECIMAL_POSITIVE(): TerminalNode {
		return this.getToken(SparqlParser.DECIMAL_POSITIVE, 0);
	}
	public DOUBLE_POSITIVE(): TerminalNode {
		return this.getToken(SparqlParser.DOUBLE_POSITIVE, 0);
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_numericLiteralPositive;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterNumericLiteralPositive) {
	 		listener.enterNumericLiteralPositive(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitNumericLiteralPositive) {
	 		listener.exitNumericLiteralPositive(this);
		}
	}
}


export class NumericLiteralNegativeContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INTEGER_NEGATIVE(): TerminalNode {
		return this.getToken(SparqlParser.INTEGER_NEGATIVE, 0);
	}
	public DECIMAL_NEGATIVE(): TerminalNode {
		return this.getToken(SparqlParser.DECIMAL_NEGATIVE, 0);
	}
	public DOUBLE_NEGATIVE(): TerminalNode {
		return this.getToken(SparqlParser.DOUBLE_NEGATIVE, 0);
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_numericLiteralNegative;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterNumericLiteralNegative) {
	 		listener.enterNumericLiteralNegative(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitNumericLiteralNegative) {
	 		listener.exitNumericLiteralNegative(this);
		}
	}
}


export class BooleanLiteralContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_booleanLiteral;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterBooleanLiteral) {
	 		listener.enterBooleanLiteral(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitBooleanLiteral) {
	 		listener.exitBooleanLiteral(this);
		}
	}
}


export class String_Context extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING_LITERAL1(): TerminalNode {
		return this.getToken(SparqlParser.STRING_LITERAL1, 0);
	}
	public STRING_LITERAL2(): TerminalNode {
		return this.getToken(SparqlParser.STRING_LITERAL2, 0);
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_string_;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterString_) {
	 		listener.enterString_(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitString_) {
	 		listener.exitString_(this);
		}
	}
}


export class IriRefContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IRI_REF(): TerminalNode {
		return this.getToken(SparqlParser.IRI_REF, 0);
	}
	public prefixedName(): PrefixedNameContext {
		return this.getTypedRuleContext(PrefixedNameContext, 0) as PrefixedNameContext;
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_iriRef;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterIriRef) {
	 		listener.enterIriRef(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitIriRef) {
	 		listener.exitIriRef(this);
		}
	}
}


export class PrefixedNameContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PNAME_LN(): TerminalNode {
		return this.getToken(SparqlParser.PNAME_LN, 0);
	}
	public PNAME_NS(): TerminalNode {
		return this.getToken(SparqlParser.PNAME_NS, 0);
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_prefixedName;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterPrefixedName) {
	 		listener.enterPrefixedName(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitPrefixedName) {
	 		listener.exitPrefixedName(this);
		}
	}
}


export class BlankNodeContext extends ParserRuleContext {
	constructor(parser?: SparqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BLANK_NODE_LABEL(): TerminalNode {
		return this.getToken(SparqlParser.BLANK_NODE_LABEL, 0);
	}
	public ANON(): TerminalNode {
		return this.getToken(SparqlParser.ANON, 0);
	}
    public get ruleIndex(): number {
    	return SparqlParser.RULE_blankNode;
	}
	public enterRule(listener: SparqlListener): void {
	    if(listener.enterBlankNode) {
	 		listener.enterBlankNode(this);
		}
	}
	public exitRule(listener: SparqlListener): void {
	    if(listener.exitBlankNode) {
	 		listener.exitBlankNode(this);
		}
	}
}
