import { Injectable } from '@angular/core';

export abstract class Logger {

  static LOGGER_LEVEL: any = {
    FATAL: 4,
    ERROR: 3,
    WARN: 2,
    INFO: 1,
    DEBUG: 0
  }

  /** 開啟Client logger */
  static ENABLE_CLIENT_LOGGER: boolean;

  /** 開啟Server logger */
  static ENABLE_SERVER_LOGGER: boolean;

  /** 開啟紀錄執行時間log */
  static ENABLE_PERFORMANCE_LOG: boolean;

  /** 開啟Global錯誤的Alert顯示 */
  static ENABLE_GLOBAL_ERROR_ALERT: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LoggerService implements Logger {

  constructor() { }

  /** 預設錯誤層級 */
  protected loggerLevel: number = Logger.LOGGER_LEVEL.ERROR;

  /**
   * mfp logger
   */
  private mfpLogger: any = null;

  /**
   * Service名稱
   */
  protected getServiceName(): string {
    return 'LoggerService';
  }

  /**
   * mfp log logger
   */
  protected mfpLog(...logs: any[]): void {
    if (this.mfpLogger != null) {
      this.mfpLogger.log(...logs);
    }
  }

  /**
   * mfp debug logger
   */
  protected mfpDebug(...logs: any[]): void {
    if (this.mfpLogger != null) {
      this.mfpLogger.debug(...logs);
    }
  }

  /**
   * mfp info logger
   */
  protected mfpInfo(...logs: any[]): void {
    if (this.mfpLogger != null) {
      this.mfpLogger.info(...logs);
    }
  }

  /**
   * mfp warn logger
   */
  protected mfpWarn(...logs: any[]): void {
    if (this.mfpLogger != null) {
      this.mfpLogger.warn(...logs);
    }
  }

  /**
   * mfp error logger
   */
  protected mfpError(...logs: any[]): void {
    if (this.mfpLogger != null) {
      this.mfpLogger.error(...logs);
    }
  }

  /**
   * mfp fatal logger
   */
  protected mfpFtal(...logs: any[]): void {
    if (this.mfpLogger != null) {
      this.mfpLogger.fatal(...logs);
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

  /**
   * debug client logger
   */
  debug(...logs: any[]): void {
    if (Logger.ENABLE_SERVER_LOGGER) { // 有設定開啟Server log
      // 依server log level也顯示client log
      if (this.loggerLevel <= Logger.LOGGER_LEVEL.DEBUG) return; // 已log,不需再執行CLIENT_LOGGER
    }

    if (Logger.ENABLE_CLIENT_LOGGER) {
      if (this.loggerLevel <= Logger.LOGGER_LEVEL.DEBUG) {
        this.mfpWarn('DEBUG', ...logs);
      }
    }
  }

  /**
   * info client logger
   */
  info(...logs: any[]): void {
    if (Logger.ENABLE_SERVER_LOGGER) {
      if (this.loggerLevel <= Logger.LOGGER_LEVEL.INFO) this.mfpInfo('INFO：', ...logs);
    }

    if (Logger.ENABLE_CLIENT_LOGGER) {
      if (this.loggerLevel <= Logger.LOGGER_LEVEL.INFO) this.mfpInfo('WEB', ...logs);
    }
  }

  /**
   * warn client logger
   */
  warn(...logs: any[]): void {
    if (Logger.ENABLE_SERVER_LOGGER) {
      if (this.loggerLevel <= Logger.LOGGER_LEVEL.WARN) this.mfpWarn('WARN：', ...logs);
    }

    if (Logger.ENABLE_CLIENT_LOGGER) {
      if (this.loggerLevel <= Logger.LOGGER_LEVEL.WARN) this.mfpInfo('WEB', ...logs);
    }
  }

  /**
   * error client logger
   */
  error(...logs: any[]): void {
    if (Logger.ENABLE_SERVER_LOGGER) {
      if (this.loggerLevel <= Logger.LOGGER_LEVEL.ERROR) this.mfpError('ERROR：', ...logs);
    }

    if (Logger.ENABLE_CLIENT_LOGGER) {
      if (this.loggerLevel <= Logger.LOGGER_LEVEL.ERROR) this.mfpError('WEB', ...logs);
    }
  }

  /**
   * fatal client logger
   */
  fatal(...logs: any[]): void {
    if (Logger.ENABLE_SERVER_LOGGER) {
      if (this.loggerLevel <= Logger.LOGGER_LEVEL.FATAL) this.mfpFtal('FATAL：', ...logs);
    }

    if (Logger.ENABLE_CLIENT_LOGGER) {
      if (this.loggerLevel <= Logger.LOGGER_LEVEL.FATAL) this.mfpFtal('WEB', ...logs);
    }
  }
}
