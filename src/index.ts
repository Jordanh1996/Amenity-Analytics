import * as fs from 'fs';
import { getInfo, Info } from './utils/text';
import { logResult } from './utils/log';

const ENCODING = 'utf8';

const analyzeFileAndPrint = (
  filePath = './article.txt',
  companyName = 'Microsoft',
  products = ['Surface Pro', 'Surface Laptop', 'Office 365', 'Windows']
): Promise<Info> => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, ENCODING, (err, article) => {
      if (err) reject(err);

      const info = getInfo(article, companyName, products);

      logResult(info);
      resolve(info);
    });
  });
};

const start = async () => {
  try {
    await analyzeFileAndPrint();
  } catch (err) {
    console.error('cannot read file', err);
    process.exit(1);
  }
};

start();
