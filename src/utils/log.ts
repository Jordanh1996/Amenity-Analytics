import { Info } from './text';

export const logResult = ({
  companyName,
  isTalkingAboutCompany,
  products,
  keywordToSentences,
}: Info): void => {
  console.log(
    `Is the article talking about the company ${companyName} ? ${isTalkingAboutCompany}`
  );

  for (let product of products) {
    console.log(); // new line
    const productSentences = keywordToSentences[product];
    if (productSentences) {
      console.log(`${product} sentences:`);
      for (let sentence of productSentences) {
        console.log(`  *  ${sentence}.`);
      }
    }
  }
};
