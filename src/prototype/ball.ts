export class Ball {
  public primitive: any;
  public component: Date;
  public circularReference: ComponentWithBackReference;

  constructor() {
    this.component = new Date();
    this.circularReference = new ComponentWithBackReference(this);
  }

  clone(): this {
    const clone = Object.create(this);
    clone.component = Object.create(this.component);

    clone.circularReference = {
      ...this.circularReference,
      prototype: { ...this },
    };

    return clone;
  }
}

export class ComponentWithBackReference {
  public prototype;

  constructor(prototype: Ball) {
    this.prototype = prototype;
  }
}
