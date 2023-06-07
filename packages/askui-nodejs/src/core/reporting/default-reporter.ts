import { Step } from './step';

export const DEFAULT_REPORTER = {
  config: {
    withScreenshots: 'onFailure',
    withDetectedElements: 'onFailure',
  } as const,
  onStepBegin: (_step: Step) => Promise.resolve(),
  onStepRetry: (_step: Step) => Promise.resolve(),
  onStepEnd: (_step: Step) => Promise.resolve(),
};
