import { ILogBuilder } from './type';
declare class Logger {
    private __optionsDefault__;
    constructor(options?: ILogBuilder);
    private __initOptionDefault__;
    private __LogBuilder__;
    private __LogExcute__;
    Log(...args: any[]): void;
    Log(opts: ILogBuilder, ...args: any[]): void;
    LogInfo(...args: any[]): void;
    LogInfo(opts: ILogBuilder, ...args: any[]): void;
    LogSuccess(...args: any[]): void;
    LogSuccess(opts: ILogBuilder, ...args: any[]): void;
    LogWarn(...args: any[]): void;
    LogWarn(opts: ILogBuilder, ...args: any[]): void;
    LogDanger(...args: any[]): void;
    LogDanger(opts: ILogBuilder, ...args: any[]): void;
}
export { Logger };
