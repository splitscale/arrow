import { saveLogsToDb } from './saveLogsToDb';

class Logger {
  private logs: any[] = [];

  private saveLog(msg: any) {
    this.logs.push(msg);
  }

  public saveLogs() {
    Promise.all(this.logs.map((log) => saveLogsToDb(log)))
      .then(() => {
        this.logs = [];
      }) // Clear logs after saving
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
