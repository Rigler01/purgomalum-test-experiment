export interface UrlBuilderProps extends BaseParams {
    methodName: string,
}

export interface TestParams extends BaseParams{
    name: string,
    expected: string,
}

export interface BaseParams {
    inputText: string,
    fill_text?: string,
    fill_char?: string,
    addWords?: string[]
}


