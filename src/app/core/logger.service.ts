import { BuiltinFunctionCall } from '@angular/compiler/src/compiler_util/expression_converter';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as fs from "fs";
const { Console } = require("console");
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

  /** 預設錯誤層級 */
  protected loggerLevel: number = Logger.LOGGER_LEVEL.ERROR;
  protected myLogger = new Console({
    stdout: "",
    stderr: "",
  });
  constructor() { }

  /**
   * Debug logger
   *
   * @param msg Debug message
   */
  tee(...msg: any[]) {
    // save log into file
    // this.eleSvc.sendInfoLog(JSON.stringify([...msg]));
    this.saveLog(JSON.stringify([...msg]));

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
    this.saveLog(JSON.stringify([...msg]));

    // show error log on console
    if (Logger.debugMode) console.error(...msg);
  }

  /**
  * Enable or disable debug mode
  */
  toggleDebugMode() {
    // if (!environment.production) this.eleSvc.ipcRenderer.sendSync('show-dev-tools');
  }

  saveLog(log: any) {
    const genTime = Date.now();
    const dir = './logs';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    this.myLogger = new Console({
      stdout: fs.createWriteStream("normalStdout.txt"),
      stderr: fs.createWriteStream("errStdErr.txt"),
    });
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
