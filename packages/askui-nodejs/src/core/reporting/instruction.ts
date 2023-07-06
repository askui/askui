import { CustomElement } from '../model/custom-element';

export interface Instruction {
  readonly value: string;
  readonly valueHumanReadable: string;
  readonly customElements?: Readonly<Readonly<CustomElement>>[];
  readonly secretText?: string | undefined;
}
