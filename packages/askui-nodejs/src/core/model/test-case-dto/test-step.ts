import { CustomElement } from './custom-element';

export interface TestStep {
  instruction: string
  customElements?: CustomElement[]
  secretText?: string | undefined
}
