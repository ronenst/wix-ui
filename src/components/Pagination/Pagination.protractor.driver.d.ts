export declare const paginationDriverFactory: (component: any) => {
    element: () => any;
    getNavButtonLocation: (btnName: "first" | "last" | "next" | "previous") => Promise<{
        x: number;
        y: number;
    }>;
};
