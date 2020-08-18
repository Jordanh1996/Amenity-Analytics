import {
  hasOccurrence,
  getSentences,
  getSentencesWithOccurence,
  getInfo,
} from '../../../src/utils/text';
import { stub } from 'sinon';
import article from '../../__fixtures__/article';

describe('text', () => {
  describe('hasOccurrence', () => {
    test('should return true if string includes keyword', () => {
      const str = 'this includes the keyword';
      const keyword = 'keyword';

      const result = hasOccurrence(str, keyword);

      expect(result).toBe(true);
    });

    test('should return false if string does no include keyword', () => {
      const str = 'this does not include the keyword';
      const keyword = 'non matching keyword';

      const result = hasOccurrence(str, keyword);

      expect(result).toBe(false);
    });
  });

  describe('getSentences', () => {
    [
      {
        delimiter: /\.[\n \t]/,
        delimiterStrings: ['. ', '.\n', '.\t'],
        sentences: [
          'This is sentence 1',
          'This is sentence 2, and it includes a url: http://example.example',
          'This is sentence 3 and it includes a price tag 99.12$',
          'This is sentence 4',
        ],
      }, // can optionally add more sentences with different delimiters, but since this project includes only 1 use case I'll pass
    ].forEach(({ delimiter, sentences, delimiterStrings }) => {
      let text = '';
      for (let i = 0; i < sentences.length; i++) {
        text += sentences[i] + (delimiterStrings[i] || '');
      }
      test(`should correctly delimit text sentences -  ${text} - with delimiter ${delimiter}`, () => {
        const result = getSentences(text, delimiter);

        expect(result).toEqual(sentences);
      });
    });
  });

  describe('getSentencesWithOccurence', () => {
    test('should return empty array if there are no matches', () => {
      const sentences = ['sentence 1', 'sentence 2'];
      const keyword = 'non matching keyword';

      const hasOccurrenceStub = stub();
      for (let sentence of sentences) {
        hasOccurrenceStub.withArgs(sentence, keyword).returns(false);
      }

      const result = getSentencesWithOccurence(sentences, keyword);

      expect(result).toEqual([]);
    });

    test('should match keyword with occurances', () => {
      const sentences = ['sentence 1', 'sentence 2'];
      const keyword = '2';

      const hasOccurrenceStub = stub();
      hasOccurrenceStub.withArgs(sentences[0], keyword).returns(false);
      hasOccurrenceStub.withArgs(sentences[1], keyword).returns(true);

      const result = getSentencesWithOccurence(sentences, keyword);

      expect(result).toEqual([sentences[1]]);
    });
  });

  describe('getInfo', () => {
    test('should return the correct info for an article', () => {
      const companyName = 'Microsoft';
      const products = [
        'Surface Pro',
        'Surface Laptop',
        'Office 365',
        'Windows',
      ];

      const result = getInfo(article, companyName, products);

      expect(result).toMatchSnapshot();
    });
  });
});
