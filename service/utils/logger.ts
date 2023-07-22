export class Logger {
  private static isDev: boolean;

  constructor() {
    Logger.isDev = process.env.NODE_ENV === 'development';
  }

  static info(msg: any): void {
    if (!this.isDev) return;
    console.info(msg);
  }

  static error(msg: any): void {
    if (!this.isDev) return;
    console.error(msg);
  }

  static warn(msg: any): void {
    if (!this.isDev) return;
    console.warn(msg);
  }

  static debug(msg: any): void {
    if (!this.isDev) return;
    console.debug(msg);
  }
}
