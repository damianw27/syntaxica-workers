// Generated from F:\Projects\syntaxica\syntaxica-workers\src\grammars/Sparql/Sparql.g4 by ANTLR 4.13.0

import { ParseTreeListener } from '@syntaxica/antlr';

import {
  QueryContext,
  PrologueContext,
  BaseDeclContext,
  PrefixDeclContext,
  SelectQueryContext,
  ConstructQueryContext,
  DescribeQueryContext,
  AskQueryContext,
  DatasetClauseContext,
  DefaultGraphClauseContext,
  NamedGraphClauseContext,
  SourceSelectorContext,
  WhereClauseContext,
  SolutionModifierContext,
  LimitOffsetClausesContext,
  OrderClauseContext,
  OrderConditionContext,
  LimitClauseContext,
  OffsetClauseContext,
  GroupGraphPatternContext,
  TriplesBlockContext,
  GraphPatternNotTriplesContext,
  OptionalGraphPatternContext,
  GraphGraphPatternContext,
  GroupOrUnionGraphPatternContext,
  Filter_Context,
  ConstraintContext,
  FunctionCallContext,
  ArgListContext,
  ConstructTemplateContext,
  ConstructTriplesContext,
  TriplesSameSubjectContext,
  PropertyListNotEmptyContext,
  PropertyListContext,
  ObjectListContext,
  Object_Context,
  VerbContext,
  TriplesNodeContext,
  BlankNodePropertyListContext,
  CollectionContext,
  GraphNodeContext,
  VarOrTermContext,
  VarOrIRIrefContext,
  Var_Context,
  GraphTermContext,
  ExpressionContext,
  ConditionalOrExpressionContext,
  ConditionalAndExpressionContext,
  ValueLogicalContext,
  RelationalExpressionContext,
  NumericExpressionContext,
  AdditiveExpressionContext,
  MultiplicativeExpressionContext,
  UnaryExpressionContext,
  PrimaryExpressionContext,
  BrackettedExpressionContext,
  BuiltInCallContext,
  RegexExpressionContext,
  IriRefOrFunctionContext,
  RdfLiteralContext,
  NumericLiteralContext,
  NumericLiteralUnsignedContext,
  NumericLiteralPositiveContext,
  NumericLiteralNegativeContext,
  BooleanLiteralContext,
  String_Context,
  IriRefContext,
  PrefixedNameContext,
  BlankNodeContext,
} from './sparql-parser';

/**
 * This interface defines a complete listener for a parse tree produced by
 * `SparqlParser`.
 */
export default class SparqlListener extends ParseTreeListener {
  /**
   * Enter a parse tree produced by `SparqlParser.query`.
   * @param ctx the parse tree
   */
  enterQuery?: (ctx: QueryContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.query`.
   * @param ctx the parse tree
   */
  exitQuery?: (ctx: QueryContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.prologue`.
   * @param ctx the parse tree
   */
  enterPrologue?: (ctx: PrologueContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.prologue`.
   * @param ctx the parse tree
   */
  exitPrologue?: (ctx: PrologueContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.baseDecl`.
   * @param ctx the parse tree
   */
  enterBaseDecl?: (ctx: BaseDeclContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.baseDecl`.
   * @param ctx the parse tree
   */
  exitBaseDecl?: (ctx: BaseDeclContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.prefixDecl`.
   * @param ctx the parse tree
   */
  enterPrefixDecl?: (ctx: PrefixDeclContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.prefixDecl`.
   * @param ctx the parse tree
   */
  exitPrefixDecl?: (ctx: PrefixDeclContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.selectQuery`.
   * @param ctx the parse tree
   */
  enterSelectQuery?: (ctx: SelectQueryContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.selectQuery`.
   * @param ctx the parse tree
   */
  exitSelectQuery?: (ctx: SelectQueryContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.constructQuery`.
   * @param ctx the parse tree
   */
  enterConstructQuery?: (ctx: ConstructQueryContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.constructQuery`.
   * @param ctx the parse tree
   */
  exitConstructQuery?: (ctx: ConstructQueryContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.describeQuery`.
   * @param ctx the parse tree
   */
  enterDescribeQuery?: (ctx: DescribeQueryContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.describeQuery`.
   * @param ctx the parse tree
   */
  exitDescribeQuery?: (ctx: DescribeQueryContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.askQuery`.
   * @param ctx the parse tree
   */
  enterAskQuery?: (ctx: AskQueryContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.askQuery`.
   * @param ctx the parse tree
   */
  exitAskQuery?: (ctx: AskQueryContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.datasetClause`.
   * @param ctx the parse tree
   */
  enterDatasetClause?: (ctx: DatasetClauseContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.datasetClause`.
   * @param ctx the parse tree
   */
  exitDatasetClause?: (ctx: DatasetClauseContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.defaultGraphClause`.
   * @param ctx the parse tree
   */
  enterDefaultGraphClause?: (ctx: DefaultGraphClauseContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.defaultGraphClause`.
   * @param ctx the parse tree
   */
  exitDefaultGraphClause?: (ctx: DefaultGraphClauseContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.namedGraphClause`.
   * @param ctx the parse tree
   */
  enterNamedGraphClause?: (ctx: NamedGraphClauseContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.namedGraphClause`.
   * @param ctx the parse tree
   */
  exitNamedGraphClause?: (ctx: NamedGraphClauseContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.sourceSelector`.
   * @param ctx the parse tree
   */
  enterSourceSelector?: (ctx: SourceSelectorContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.sourceSelector`.
   * @param ctx the parse tree
   */
  exitSourceSelector?: (ctx: SourceSelectorContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.whereClause`.
   * @param ctx the parse tree
   */
  enterWhereClause?: (ctx: WhereClauseContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.whereClause`.
   * @param ctx the parse tree
   */
  exitWhereClause?: (ctx: WhereClauseContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.solutionModifier`.
   * @param ctx the parse tree
   */
  enterSolutionModifier?: (ctx: SolutionModifierContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.solutionModifier`.
   * @param ctx the parse tree
   */
  exitSolutionModifier?: (ctx: SolutionModifierContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.limitOffsetClauses`.
   * @param ctx the parse tree
   */
  enterLimitOffsetClauses?: (ctx: LimitOffsetClausesContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.limitOffsetClauses`.
   * @param ctx the parse tree
   */
  exitLimitOffsetClauses?: (ctx: LimitOffsetClausesContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.orderClause`.
   * @param ctx the parse tree
   */
  enterOrderClause?: (ctx: OrderClauseContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.orderClause`.
   * @param ctx the parse tree
   */
  exitOrderClause?: (ctx: OrderClauseContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.orderCondition`.
   * @param ctx the parse tree
   */
  enterOrderCondition?: (ctx: OrderConditionContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.orderCondition`.
   * @param ctx the parse tree
   */
  exitOrderCondition?: (ctx: OrderConditionContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.limitClause`.
   * @param ctx the parse tree
   */
  enterLimitClause?: (ctx: LimitClauseContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.limitClause`.
   * @param ctx the parse tree
   */
  exitLimitClause?: (ctx: LimitClauseContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.offsetClause`.
   * @param ctx the parse tree
   */
  enterOffsetClause?: (ctx: OffsetClauseContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.offsetClause`.
   * @param ctx the parse tree
   */
  exitOffsetClause?: (ctx: OffsetClauseContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.groupGraphPattern`.
   * @param ctx the parse tree
   */
  enterGroupGraphPattern?: (ctx: GroupGraphPatternContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.groupGraphPattern`.
   * @param ctx the parse tree
   */
  exitGroupGraphPattern?: (ctx: GroupGraphPatternContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.triplesBlock`.
   * @param ctx the parse tree
   */
  enterTriplesBlock?: (ctx: TriplesBlockContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.triplesBlock`.
   * @param ctx the parse tree
   */
  exitTriplesBlock?: (ctx: TriplesBlockContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.graphPatternNotTriples`.
   * @param ctx the parse tree
   */
  enterGraphPatternNotTriples?: (ctx: GraphPatternNotTriplesContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.graphPatternNotTriples`.
   * @param ctx the parse tree
   */
  exitGraphPatternNotTriples?: (ctx: GraphPatternNotTriplesContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.optionalGraphPattern`.
   * @param ctx the parse tree
   */
  enterOptionalGraphPattern?: (ctx: OptionalGraphPatternContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.optionalGraphPattern`.
   * @param ctx the parse tree
   */
  exitOptionalGraphPattern?: (ctx: OptionalGraphPatternContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.graphGraphPattern`.
   * @param ctx the parse tree
   */
  enterGraphGraphPattern?: (ctx: GraphGraphPatternContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.graphGraphPattern`.
   * @param ctx the parse tree
   */
  exitGraphGraphPattern?: (ctx: GraphGraphPatternContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.groupOrUnionGraphPattern`.
   * @param ctx the parse tree
   */
  enterGroupOrUnionGraphPattern?: (ctx: GroupOrUnionGraphPatternContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.groupOrUnionGraphPattern`.
   * @param ctx the parse tree
   */
  exitGroupOrUnionGraphPattern?: (ctx: GroupOrUnionGraphPatternContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.filter_`.
   * @param ctx the parse tree
   */
  enterFilter_?: (ctx: Filter_Context) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.filter_`.
   * @param ctx the parse tree
   */
  exitFilter_?: (ctx: Filter_Context) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.constraint`.
   * @param ctx the parse tree
   */
  enterConstraint?: (ctx: ConstraintContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.constraint`.
   * @param ctx the parse tree
   */
  exitConstraint?: (ctx: ConstraintContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.functionCall`.
   * @param ctx the parse tree
   */
  enterFunctionCall?: (ctx: FunctionCallContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.functionCall`.
   * @param ctx the parse tree
   */
  exitFunctionCall?: (ctx: FunctionCallContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.argList`.
   * @param ctx the parse tree
   */
  enterArgList?: (ctx: ArgListContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.argList`.
   * @param ctx the parse tree
   */
  exitArgList?: (ctx: ArgListContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.constructTemplate`.
   * @param ctx the parse tree
   */
  enterConstructTemplate?: (ctx: ConstructTemplateContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.constructTemplate`.
   * @param ctx the parse tree
   */
  exitConstructTemplate?: (ctx: ConstructTemplateContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.constructTriples`.
   * @param ctx the parse tree
   */
  enterConstructTriples?: (ctx: ConstructTriplesContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.constructTriples`.
   * @param ctx the parse tree
   */
  exitConstructTriples?: (ctx: ConstructTriplesContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.triplesSameSubject`.
   * @param ctx the parse tree
   */
  enterTriplesSameSubject?: (ctx: TriplesSameSubjectContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.triplesSameSubject`.
   * @param ctx the parse tree
   */
  exitTriplesSameSubject?: (ctx: TriplesSameSubjectContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.propertyListNotEmpty`.
   * @param ctx the parse tree
   */
  enterPropertyListNotEmpty?: (ctx: PropertyListNotEmptyContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.propertyListNotEmpty`.
   * @param ctx the parse tree
   */
  exitPropertyListNotEmpty?: (ctx: PropertyListNotEmptyContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.propertyList`.
   * @param ctx the parse tree
   */
  enterPropertyList?: (ctx: PropertyListContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.propertyList`.
   * @param ctx the parse tree
   */
  exitPropertyList?: (ctx: PropertyListContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.objectList`.
   * @param ctx the parse tree
   */
  enterObjectList?: (ctx: ObjectListContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.objectList`.
   * @param ctx the parse tree
   */
  exitObjectList?: (ctx: ObjectListContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.object_`.
   * @param ctx the parse tree
   */
  enterObject_?: (ctx: Object_Context) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.object_`.
   * @param ctx the parse tree
   */
  exitObject_?: (ctx: Object_Context) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.verb`.
   * @param ctx the parse tree
   */
  enterVerb?: (ctx: VerbContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.verb`.
   * @param ctx the parse tree
   */
  exitVerb?: (ctx: VerbContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.triplesNode`.
   * @param ctx the parse tree
   */
  enterTriplesNode?: (ctx: TriplesNodeContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.triplesNode`.
   * @param ctx the parse tree
   */
  exitTriplesNode?: (ctx: TriplesNodeContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.blankNodePropertyList`.
   * @param ctx the parse tree
   */
  enterBlankNodePropertyList?: (ctx: BlankNodePropertyListContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.blankNodePropertyList`.
   * @param ctx the parse tree
   */
  exitBlankNodePropertyList?: (ctx: BlankNodePropertyListContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.collection`.
   * @param ctx the parse tree
   */
  enterCollection?: (ctx: CollectionContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.collection`.
   * @param ctx the parse tree
   */
  exitCollection?: (ctx: CollectionContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.graphNode`.
   * @param ctx the parse tree
   */
  enterGraphNode?: (ctx: GraphNodeContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.graphNode`.
   * @param ctx the parse tree
   */
  exitGraphNode?: (ctx: GraphNodeContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.varOrTerm`.
   * @param ctx the parse tree
   */
  enterVarOrTerm?: (ctx: VarOrTermContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.varOrTerm`.
   * @param ctx the parse tree
   */
  exitVarOrTerm?: (ctx: VarOrTermContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.varOrIRIref`.
   * @param ctx the parse tree
   */
  enterVarOrIRIref?: (ctx: VarOrIRIrefContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.varOrIRIref`.
   * @param ctx the parse tree
   */
  exitVarOrIRIref?: (ctx: VarOrIRIrefContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.var_`.
   * @param ctx the parse tree
   */
  enterVar_?: (ctx: Var_Context) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.var_`.
   * @param ctx the parse tree
   */
  exitVar_?: (ctx: Var_Context) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.graphTerm`.
   * @param ctx the parse tree
   */
  enterGraphTerm?: (ctx: GraphTermContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.graphTerm`.
   * @param ctx the parse tree
   */
  exitGraphTerm?: (ctx: GraphTermContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.expression`.
   * @param ctx the parse tree
   */
  enterExpression?: (ctx: ExpressionContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.expression`.
   * @param ctx the parse tree
   */
  exitExpression?: (ctx: ExpressionContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.conditionalOrExpression`.
   * @param ctx the parse tree
   */
  enterConditionalOrExpression?: (ctx: ConditionalOrExpressionContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.conditionalOrExpression`.
   * @param ctx the parse tree
   */
  exitConditionalOrExpression?: (ctx: ConditionalOrExpressionContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.conditionalAndExpression`.
   * @param ctx the parse tree
   */
  enterConditionalAndExpression?: (ctx: ConditionalAndExpressionContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.conditionalAndExpression`.
   * @param ctx the parse tree
   */
  exitConditionalAndExpression?: (ctx: ConditionalAndExpressionContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.valueLogical`.
   * @param ctx the parse tree
   */
  enterValueLogical?: (ctx: ValueLogicalContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.valueLogical`.
   * @param ctx the parse tree
   */
  exitValueLogical?: (ctx: ValueLogicalContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.relationalExpression`.
   * @param ctx the parse tree
   */
  enterRelationalExpression?: (ctx: RelationalExpressionContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.relationalExpression`.
   * @param ctx the parse tree
   */
  exitRelationalExpression?: (ctx: RelationalExpressionContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.numericExpression`.
   * @param ctx the parse tree
   */
  enterNumericExpression?: (ctx: NumericExpressionContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.numericExpression`.
   * @param ctx the parse tree
   */
  exitNumericExpression?: (ctx: NumericExpressionContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.additiveExpression`.
   * @param ctx the parse tree
   */
  enterAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.additiveExpression`.
   * @param ctx the parse tree
   */
  exitAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.multiplicativeExpression`.
   * @param ctx the parse tree
   */
  enterMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.multiplicativeExpression`.
   * @param ctx the parse tree
   */
  exitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.unaryExpression`.
   * @param ctx the parse tree
   */
  enterUnaryExpression?: (ctx: UnaryExpressionContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.unaryExpression`.
   * @param ctx the parse tree
   */
  exitUnaryExpression?: (ctx: UnaryExpressionContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.primaryExpression`.
   * @param ctx the parse tree
   */
  enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.primaryExpression`.
   * @param ctx the parse tree
   */
  exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.brackettedExpression`.
   * @param ctx the parse tree
   */
  enterBrackettedExpression?: (ctx: BrackettedExpressionContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.brackettedExpression`.
   * @param ctx the parse tree
   */
  exitBrackettedExpression?: (ctx: BrackettedExpressionContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.builtInCall`.
   * @param ctx the parse tree
   */
  enterBuiltInCall?: (ctx: BuiltInCallContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.builtInCall`.
   * @param ctx the parse tree
   */
  exitBuiltInCall?: (ctx: BuiltInCallContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.regexExpression`.
   * @param ctx the parse tree
   */
  enterRegexExpression?: (ctx: RegexExpressionContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.regexExpression`.
   * @param ctx the parse tree
   */
  exitRegexExpression?: (ctx: RegexExpressionContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.iriRefOrFunction`.
   * @param ctx the parse tree
   */
  enterIriRefOrFunction?: (ctx: IriRefOrFunctionContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.iriRefOrFunction`.
   * @param ctx the parse tree
   */
  exitIriRefOrFunction?: (ctx: IriRefOrFunctionContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.rdfLiteral`.
   * @param ctx the parse tree
   */
  enterRdfLiteral?: (ctx: RdfLiteralContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.rdfLiteral`.
   * @param ctx the parse tree
   */
  exitRdfLiteral?: (ctx: RdfLiteralContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.numericLiteral`.
   * @param ctx the parse tree
   */
  enterNumericLiteral?: (ctx: NumericLiteralContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.numericLiteral`.
   * @param ctx the parse tree
   */
  exitNumericLiteral?: (ctx: NumericLiteralContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.numericLiteralUnsigned`.
   * @param ctx the parse tree
   */
  enterNumericLiteralUnsigned?: (ctx: NumericLiteralUnsignedContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.numericLiteralUnsigned`.
   * @param ctx the parse tree
   */
  exitNumericLiteralUnsigned?: (ctx: NumericLiteralUnsignedContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.numericLiteralPositive`.
   * @param ctx the parse tree
   */
  enterNumericLiteralPositive?: (ctx: NumericLiteralPositiveContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.numericLiteralPositive`.
   * @param ctx the parse tree
   */
  exitNumericLiteralPositive?: (ctx: NumericLiteralPositiveContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.numericLiteralNegative`.
   * @param ctx the parse tree
   */
  enterNumericLiteralNegative?: (ctx: NumericLiteralNegativeContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.numericLiteralNegative`.
   * @param ctx the parse tree
   */
  exitNumericLiteralNegative?: (ctx: NumericLiteralNegativeContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.booleanLiteral`.
   * @param ctx the parse tree
   */
  enterBooleanLiteral?: (ctx: BooleanLiteralContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.booleanLiteral`.
   * @param ctx the parse tree
   */
  exitBooleanLiteral?: (ctx: BooleanLiteralContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.string_`.
   * @param ctx the parse tree
   */
  enterString_?: (ctx: String_Context) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.string_`.
   * @param ctx the parse tree
   */
  exitString_?: (ctx: String_Context) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.iriRef`.
   * @param ctx the parse tree
   */
  enterIriRef?: (ctx: IriRefContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.iriRef`.
   * @param ctx the parse tree
   */
  exitIriRef?: (ctx: IriRefContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.prefixedName`.
   * @param ctx the parse tree
   */
  enterPrefixedName?: (ctx: PrefixedNameContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.prefixedName`.
   * @param ctx the parse tree
   */
  exitPrefixedName?: (ctx: PrefixedNameContext) => void;

  /**
   * Enter a parse tree produced by `SparqlParser.blankNode`.
   * @param ctx the parse tree
   */
  enterBlankNode?: (ctx: BlankNodeContext) => void;

  /**
   * Exit a parse tree produced by `SparqlParser.blankNode`.
   * @param ctx the parse tree
   */
  exitBlankNode?: (ctx: BlankNodeContext) => void;
}
