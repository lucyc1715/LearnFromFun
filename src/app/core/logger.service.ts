import { BuiltinFunctionCall } from '@angular/compiler/src/compiler_util/expression_converter';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export abstract class Logger {

  static LOGGER_LEVEL: any = {
    FATAL: 4,
    ERROR: 3,
    WARN: 2,
    INFO: 1,
    DEBUG: 0
  }

  static debugMode: boolean;
}

@Injectable({ providedIn: 'root' })
export class LoggerService implements Logger {

  constructor() { }

  /**
  * Debug mode switch
  *
  * @returns {boolean}
  */
  get debugMode() { return Logger.debugMode; }
  set debugMode(status: boolean) { Logger.debugMode = status; }

  /**
   * Debug logger
   *
   * @param msg Debug message
   */
  tee(...msg: any[]) {
    // save log into file: how to save log to local
    // this.eleSvc.sendInfoLog(JSON.stringify([...msg]));

    // show log on console
    if (Logger.debugMode) console.log(...msg);
  }

  /**
  * Error logger
  *
  * @param msg Error message
  */
  teeErr(...msg: any[]) {
    // save error log into file
    // this.eleSvc.sendErrorLog(JSON.stringify([...msg]));

    // show error log on console
    if (Logger.debugMode) console.error(...msg);
  }

  /**
  * Enable or disable debug mode
  */
  toggleDebugMode() {
    // if (!environment.production) this.eleSvc.ipcRenderer.sendSync('show-dev-tools');
  }

  /** 預設錯誤層級 */
  protected loggerLevel: number = Logger.LOGGER_LEVEL.ERROR;


  /**
   * logger
   */
  private initLogger: any = null;

  /**
   * log logger
   */
  protected mfpLog(...logs: any[]): void {
    if (this.initLogger != null) {
      this.initLogger.log(...logs);
    }
  }

  /**
   * debug logger
   */
  protected mfpDebug(...logs: any[]): void {
    if (this.initLogger != null) {
      this.initLogger.debug(...logs);
    }
  }

  /**
   * info logger
   */
  protected mfpInfo(...logs: any[]): void {
    if (this.initLogger != null) {
      this.initLogger.info(...logs);
    }
  }

  /**
   * warn logger
   */
  protected mfpWarn(...logs: any[]): void {
    if (this.initLogger != null) {
      this.initLogger.warn(...logs);
    }
  }

  /**
   * error logger
   */
  protected mfpError(...logs: any[]): void {
    if (this.initLogger != null) {
      this.initLogger.error(...logs);
    }
  }

  /**
   * fatal logger
   */
  protected mfpFtal(...logs: any[]): void {
    if (this.initLogger != null) {
      this.initLogger.fatal(...logs);
    }
  }

  /**
   * log是否為Debug層級
   */
  isDebug(): boolean {
    if (this.loggerLevel <= Logger.LOGGER_LEVEL.DEBUG) {
      return true;
    }
    return false;
  }

  /**
   * log是否為Info層級
   */
  isInfo(): boolean {
    if (this.loggerLevel <= Logger.LOGGER_LEVEL.INFO) {
      return true;
    }
    return false;
  }

  /**
   * log是否為Warn層級
   */
  isWarn(): boolean {
    if (this.loggerLevel <= Logger.LOGGER_LEVEL.WARN) {
      return true;
    }
    return false;
  }

  /**
   * log是否為Error層級
   */
  isError(): boolean {
    if (this.loggerLevel <= Logger.LOGGER_LEVEL.ERROR) {
      return true;
    }
    return false;
  }

  /**
   * log是否為Fatal層級
   */
  isFatal(): boolean {
    if (this.loggerLevel <= Logger.LOGGER_LEVEL.FATAL) {
      return true;
    }
    return false;
  }

}
