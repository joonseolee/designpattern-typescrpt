export interface Handler {
  handle(request: string): string;
}

export abstract class AbstractHandler implements Handler {
  private nextHandler: Handler | null;

  constructor(handler: Handler | null = null) {
    this.nextHandler = handler;
  }

  handle(request: string): string {
    if (this.nextHandler) return this.nextHandler.handle(request);
    return '';
  }
}
