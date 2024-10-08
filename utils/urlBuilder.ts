import { UrlBuilderProps } from "../interfaces/urlBuilderInterface";

export const BuildUrl = (urlData : UrlBuilderProps) : string => {

    let formattedUrl : string = "";
    formattedUrl += urlData.responseType + "?text=" + urlData.inputText + FillTextForUrl(urlData) + FillCharForUrl(urlData) + AddWordsForUrl(urlData)
    
    return formattedUrl;
}

const FillTextForUrl = (urlData : UrlBuilderProps) : string => {
    let textFillUrl : string = urlData.fill_text ? "&fill_text=" + urlData.fill_text : "";
    return textFillUrl;
}

const FillCharForUrl = (urlData : UrlBuilderProps) : string => {
    let textCharUrl : string = urlData.fill_char ? "&fill_char=" + urlData.fill_char : "";
    return textCharUrl;
}

const AddWordsForUrl = (urlData : UrlBuilderProps) : string => {//This probably work needs for the list of words 
    let addWordsUrl : string = urlData.addWords ? "&add=" + urlData.addWords : "";
    return addWordsUrl;
}