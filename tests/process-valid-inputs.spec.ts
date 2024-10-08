import { test, expect } from '@playwright/test';
import { processValidInputs } from '../data/testData.ts';
import apiMethodNames from '../utils/apiMethodNames.ts';
import { UrlBuilderProps } from '../interfaces/urlBuilderInterface.ts';
import { BuildUrl } from '../utils/urlBuilder.ts';

for (let methodName in apiMethodNames){
  
  //type = type.toString();
  test.describe(`Format = ${apiMethodNames[methodName]}`, () => {

    processValidInputs.forEach(testScenario => {
      
      const urlParams : UrlBuilderProps = {
        responseType : apiMethodNames[methodName],
        inputText: testScenario.inputText,
        fill_text: testScenario.fill_text,
        fill_char: testScenario.fill_char,
        addWords: testScenario.addWords
      };
  
      const appendUrl : string = BuildUrl(urlParams);

      test(`${testScenario.name}`, async ({request})=>{
        const response = await request.get(appendUrl);
        console.log("appendUrl = "+ appendUrl);
        expect(response.status()).toBe(200);
        
        switch (apiMethodNames[methodName]) {
          case "json":
            const jsonData = await response.json();
            expect(jsonData.result).toBe(testScenario.expected);
            console.log(jsonData);
            break;
          case "xml":
            const xmlData = await response.text();
            const [_, xmlResultString] = xmlData?.match(/<result>(.+?)<\/result>/) ?? [ '', ''];
            expect(xmlResultString).toBe(testScenario.expected);
            break;
          case "plain":
            const plainData = await response.text();
            expect(plainData).toBe(testScenario.expected);
            console.log(plainData);
            break;
          default:
            break;
        }
      });
    });
  });
};
  



