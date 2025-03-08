import { BasicModelInstance, FieldType, Model } from './generators.model';
export declare const BirthDateFormat = "dd/MM/yyyy";
export declare const ReturnTimeFormat = "HH:mm";
export declare const TradeDateFormat = "dd/MM/yyyy HH:mm";
export declare const mockModel: Model;
export interface MockInstance {
    id: string;
    firstName: string;
    middleName: string;
    lastName: string;
    age: number;
    birthDate: Date;
    car: {
        model: string;
        manufacturer: string;
        color: string;
        type: string[];
        vin: string;
        vrm: string;
        returnTime: Date;
    };
    quantity: number;
    available: boolean;
    currency: string;
    tradeDate: Date;
    [key: string]: FieldType;
    codes: string[];
    identifiers: string[];
}
export declare const createModelInstance: <T extends BasicModelInstance>(model: Model, seed?: number) => T;
