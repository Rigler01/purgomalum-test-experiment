import { test, expect } from '@playwright/test';
import { checkContainsProfanity } from '../data/testData.ts';
import apiMethodNames from '../utils/apiMethodNames.ts';
import { UrlBuilderProps } from '../interfaces/urlBuilderInterface.ts';
import { BuildUrl } from '../utils/urlBuilder.ts';

test.describe('Containsprofanity endpoint', () => {

    checkContainsProfanity.forEach(testScenario => {
      
      const urlParams : UrlBuilderProps = {
        responseType : apiMethodNames.containsprofanity,
        inputText: testScenario.inputText,
      };
  
      const appendUrl : string = BuildUrl(urlParams);

      test(`${testScenario.name}`, async ({request})=>{
        const response = await request.get(appendUrl);
        console.log("appendUrl = "+ appendUrl);
        expect(response.status()).toBe(200);
        
        const plainData = await response.text();
        expect(plainData).toBe(testScenario.expected);
        console.log(plainData);
        })
    });
});