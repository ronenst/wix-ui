export declare const inputDriverFactory: ({element, eventTrigger}: {
    element: any;
    eventTrigger: any;
}) => {
    exists: () => boolean;
    isDisabled: () => any;
    isReadOnly: () => any;
    getMaxLength: () => any;
    getPlaceholder: () => any;
    isRequired: () => any;
    getTabIndex: () => any;
    getType: () => any;
    getValue: () => any;
    setValue: (value: any) => void;
};
