import { CustomElement } from './custom-element';
import { CustomElementJson } from './custom-element-json';

export class TestStep {
  constructor(
    public instruction: string,
    public customElements: CustomElement[] = [],
  ) { }

  static fromJson(step: TestStep & { customElements: CustomElementJson[] }): TestStep {
    return new TestStep(
      step.instruction,
      (step.customElements || []).map((customELement) => CustomElement.fromJson(customELement)),
    );
  }
}
