import { AbstractHandler, Handler } from './abstract-handler';

export class MonkeyHandler extends AbstractHandler {
  constructor(handler: Handler | null = null) {
    super(handler);
  }

  handle(request: string): string {
    if (request.indexOf('monkey') > -1) {
      console.log('monkey is present');
      return 'monkey is present';
    }
    console.log('monkey is not here');
    return super.handle(request);
  }
}

export class MonkeyStaffHandler extends AbstractHandler {
  constructor(handler: Handler | null = null) {
    super(handler);
  }

  handle(request: string): string {
    if (request.indexOf('staff') > -1) {
      console.log('staff -> monkey is present');
      return 'staff -> monkey is present';
    }
    console.log('staff -> monkey is not here');
    return super.handle(request);
  }
}

export class MonkeyProducerHandler extends AbstractHandler {
  constructor(handler: Handler | null = null) {
    super(handler);
  }

  handle(request: string): string {
    if (request.indexOf('producer') > -1) {
      console.log('producer -> monkey is present');
      return 'producer -> monkey is present';
    }
    console.log('producer -> monkey is not here');
    return super.handle(request);
  }
}

export class MonkeyCompanyHandler extends AbstractHandler {
  constructor(handler: Handler | null = null) {
    super(handler);
  }

  handle(request: string): string {
    if (request.indexOf('company') > -1) {
      console.log('company -> monkey is present');
      return 'company -> monkey is present';
    }
    console.log('company -> monkey is not here');
    return super.handle(request);
  }
}
