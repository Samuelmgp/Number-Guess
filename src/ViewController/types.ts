export type ViewID = string;

export interface ViewRenderProps {
    active: boolean;
    navigateTo: (to?: ViewID) => void;
    getData: () => any;
}

export interface ViewProps {
    id: ViewID;
    component: React.ComponentType<ViewRenderProps>;
    active?: boolean;
    navigateTo?: (to?: ViewID) => void;
    getData?: () => any;
}