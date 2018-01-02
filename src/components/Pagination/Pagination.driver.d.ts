export declare const paginationDriverFactory: ({element, eventTrigger}: {
    element: HTMLElement;
    eventTrigger: any;
}) => {
    exists: () => boolean;
    amountOfPages: number;
    getPagesList: () => string[];
    getPage: (idx?: number) => Element;
    getCurrentPage: () => Element;
    getNavButton: (btnName: string) => {
        element: HTMLButtonElement;
        placement: "inline" | "top" | "bottom" | "nowhere";
    };
    clickOnPage: (idx: number) => void;
    clickOnNavButton: (btnName: string) => void;
    getPageInput: () => HTMLInputElement;
    getLastPageField: () => Element;
    changeInput: (newValue: string) => void;
    inputKeyDown: (keyCode: number) => void;
    inputBlur: () => void;
};
