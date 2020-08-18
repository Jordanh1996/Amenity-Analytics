## How to run this ?

I personally used yarn to install my dependencies, feel free to use your favourite package manager
Installing dependencies:
`npm install` / `yarn`
Running the project:
`npm start` / `yarn start`

#### Using a different file

The assignment did not include instructions for inserting a different article and only mentioned to write the function to implement it, so I did not include any fancy CLI or such because I assume that it misses out the purpose of this assignment.
Therefore, if you wish to use a different file with different arguments (than those given in the assignment description) you can find the parameters given at src/index.ts on the analyzeFizeAndPrint function and overwrite it.

## Unit Testing:

I used jest with sinon.

##### running the tests:

- Make sure to install the dependencies first.
- run in the terminal: `npm/yarn test`

In order to run tests on watch mode run: `npm/yarn run test:watch`

## Assumptions:

- Sentences should be seperated with with dot. In order to avoid doing so incorrectly (for example, urls and prices includes dots but the dots does not delimit sentences) I assume a space / new line should follow a dot.
- Products that have no match in the article should not be printed or send an alert to the user that they were not mentioned (Not really an issue adding it, just wasn't really sure whether I should).

## Possbile Improvements Suggestions

- If we want to support really big articles (such that maybe we cannot fit all the text in the memory of the pc running the project) we can use the 'read' function of the fs module and scan the file with a buffer size that we please and dump the last buffer every time we finish analyzing it.
- The current implementation includes an object where each key of it is the product, and the value is the array of sentences which it occurs in, we can improve the memory consumption if we would hold as the value of each key an array that holds the offset of the start of the sentence from the start of the given file.
