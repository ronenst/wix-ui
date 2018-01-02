export declare const tooltipDriverFactory: ({element, eventTrigger}: {
    element: any;
    eventTrigger: any;
}) => {
    exists: () => boolean;
    isTargetElementExists: () => boolean;
    isContentExists: () => boolean;
    mouseEnter: () => any;
};
