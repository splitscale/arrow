class Logger {
  private isDev: boolean;

  constructor() {
    this.isDev = process.env.EXPO_PUBLIC_NODE_ENV === 'development';
  }

  info(msg: any): void {
    if (!this.isDev) return;
    console.info(msg);
  }

  error(msg: any): void {
    if (!this.isDev) return;
    console.error(msg);
  }

  warn(msg: any): void {
    if (!this.isDev) return;
    console.warn(msg);
  }

  debug(msg: any): void {
    if (!this.isDev) return;
    console.debug(msg);
  }
}

export const logger = new Logger();
