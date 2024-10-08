import { TestParams } from "../interfaces/urlBuilderInterface";

export const processValidInputs : TestParams[] = [
    {
        name: "No profanities found in text",
        inputText: "this is clean text for Playwright",
        expected: "this is clean text for Playwright"
    },
    {
        name: "Profanity replaced with default",
        inputText: "this is dumbass text for Playwright",
        expected: "this is ******* text for Playwright"
    },
    {
        name: "Profanity replaced with valid fill_char",
        inputText: "this is dumbass text for Playwright",
        fill_char: "~",
        expected: "this is ~~~~~~~ text for Playwright"
    },
    {
        name: "Profanity replaced with valid fill_text",
        inputText: "this is dumbass text for Playwright",
        fill_text: "[naughty!]",
        expected: "this is [naughty!] text for Playwright"
    },
    {
        name: "2 words in text added to profanity list, default replacement",
        inputText: "this is clean text for Playwright, words added to list",
        addWords:["clean","playwright"],
        expected: "this is ***** text for **********, words added to list"
    }
];

export const checkContainsProfanity : TestParams[] = [
    {
        name: "Contains profanity - true",
        inputText: "this is dumbass text for Playwright",
        expected: "true"
    },
    {
        name: "Contains profanity - false",
        inputText: "this is clean text for Playwright",
        expected: "false"
    }
];


