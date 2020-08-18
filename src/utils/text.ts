export interface Info {
  companyName: string;
  isTalkingAboutCompany: boolean;
  products: string[];
  keywordToSentences: { [key: string]: string[] };
}

export const hasOccurrence = (text: string, keyword: string): boolean => {
  return text.includes(keyword);
};

export const getSentences = (
  text: string,
  delimiter: RegExp | string = /\.[\n \t]/
): string[] => {
  return text.split(delimiter);
};

export const getSentencesWithOccurence = (
  sentences: string[],
  keyword: string
): string[] => {
  const res = [];

  for (let sentence of sentences) {
    if (hasOccurrence(sentence, keyword)) {
      res.push(sentence);
    }
  }

  return Array.from(new Set(res)); // this is used in order to delete repeating sentences
};

export const getInfo = (
  text: string,
  companyName: string,
  products: string[]
): Info => {
  const isTalkingAboutCompany = hasOccurrence(text, companyName);
  const sentences = getSentences(text);
  const keywordToSentences: { [key: string]: string[] } = {};
  for (let product of products) {
    keywordToSentences[product] = getSentencesWithOccurence(sentences, product);
  }

  return {
    companyName,
    isTalkingAboutCompany,
    products,
    keywordToSentences,
  };
};
