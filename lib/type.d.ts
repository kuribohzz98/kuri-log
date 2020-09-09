import { ColorCode } from "./constants";
export interface ILogBuilder {
    tag?: string;
    timeLog?: boolean;
    icon?: string;
    timeLogDate?: boolean;
    timeLogTime?: boolean;
}
export interface ILogBuilderBasic extends ILogBuilder {
    messages: any[];
    colorText?: ColorCode;
}
