import { logResult } from '../../../src/utils/log';

describe('log', () => {
  describe('logResult', () => {
    let output: string;
    const storeLog = (input: string | void) =>
      (output += (input ? input : '') + '\n');
    beforeEach(() => {
      output = '';
      console.log = jest.fn(storeLog);
    });

    test('Log should match snapshot', () => {
      logResult({
        companyName: 'Microsoft',
        isTalkingAboutCompany: true,
        products: ['product1', 'product2'],
        keywordToSentences: { product1: ['sentence1', 'sentence2'] },
      });
      expect(output).toMatchSnapshot();
    });
  });
});
