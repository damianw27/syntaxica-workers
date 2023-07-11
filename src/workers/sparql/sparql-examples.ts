import { GrammarExample } from '@syntaxica/lib/dist/lib/types/grammar-example';

export const sparqlExamples: GrammarExample[] = [
  {
    name: 'Simple select',
    code:
      'PREFIX dbpedia-owl: <https://dbpedia.org/ontology/>\n' +
      'PREFIX dbpprop: <https://dbpedia.org/property/>\n' +
      'PREFIX dbres: <https://dbpedia.org/resource/>\n' +
      '\n' +
      'SELECT ?y WHERE {\n' +
      ' ?y dbpedia-owl:binomialAuthority dbres:Johan_Christian_Fabricius.\n' +
      '}\n',
  },
  {
    name: 'Select with order',
    code:
      'PREFIX sch-ont:   <https://education.data.gov.uk/def/school/>\n' +
      'SELECT ?name WHERE {\n' +
      '  ?school a sch-ont:School.\n' +
      '  ?school sch-ont:establishmentName ?name.\n' +
      '  ?school sch-ont:districtAdministrative <https://statistics.data.gov.uk/id/local-authority-district/00AA>.\n' +
      '}\n' +
      'ORDER BY ?name',
  },
  {
    name: 'Select with limit',
    code:
      'PREFIX dc: <https://purl.org/dc/elements/1.1/>\n' +
      'SELECT ?node ?title\n' +
      'WHERE{\n' +
      '  ?node dc:title ?title .\n' +
      '}\n' +
      'LIMIT 3',
  },
];
