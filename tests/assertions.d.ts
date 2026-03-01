import { AlertSeverity } from '../components/expandable-alert';
export declare const expectContentPlaceholder: () => Promise<void>;
export declare const assertDatetimeInputValue: (element: HTMLElement, { value, fmt }: {
    value: Date;
    fmt: string;
}) => void;
export declare const expectProgressIndicator: () => void;
export declare const waitForProgressIndicatorToBeRemoved: () => Promise<void>;
export declare const waitForProgressFinish: () => Promise<void>;
export declare const expectAlert: ({ title, message, severity, }: {
    title?: RegExp | string;
    message: RegExp | string;
    severity: AlertSeverity;
}) => Promise<void>;
export declare enum AssertCloseDateUpTo {
    Year = 1,
    Month = 2,
    Day = 3,
    Hour = 4,
    Minute = 5,
    Seconds = 6,
    Milliseconds = 7
}
export declare const assertCloseDate: (date: Date, expectedDate: Date, upTo: AssertCloseDateUpTo) => void;
