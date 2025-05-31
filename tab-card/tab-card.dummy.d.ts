import { TabData } from './tab-card';
export declare const DummyTabs: ({
    text: string;
    icon?: undefined;
} | {
    text: string;
    icon: import("react/jsx-runtime").JSX.Element;
})[];
export interface TabCardDummyProps {
    tabs: TabData[];
    initialTab: number;
    onChangeTab: (tab: TabData, index: number) => void;
}
export declare function TabCardDummy({ tabs, initialTab, onChangeTab, }: TabCardDummyProps): import("react/jsx-runtime").JSX.Element;
