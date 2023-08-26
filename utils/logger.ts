import { saveLogsToDb } from './saveLogsToDb';

class Logger {
  private saveLog(msg: any) {
    saveLogsToDb(msg)
      .then(() => {})
      .catch(console.error);
  }

  info(msg: any): void {
    console.info(msg);
    this.saveLog(msg);
  }

  error(msg: any): void {
    console.error(msg);
    this.saveLog(msg);
  }

  warn(msg: any): void {
    console.warn(msg);
    this.saveLog(msg);
  }

  debug(msg: any): void {
    console.debug(msg);
    this.saveLog(msg);
  }
}

export const logger = new Logger();
