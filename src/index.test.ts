import * as API from '.';

describe('Public API', () => {
  const methods = [
    'onlyNumbers',
    'isLastChar',
    'randomNumber',
    'formatCPF',
    'generateCPF',
    'isValidCPF',
    'formatCNPJ',
  ];

  methods.forEach(method => {
    test(`${method} is available in the Public API`, () => {
      expect(API).toHaveProperty(method);
    });
  });
});
