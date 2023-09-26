import { StepReporter } from './step-reporter';
import { Reporter } from './reporter';
import { Step } from './step';
import { Instruction } from './instruction';
import { logger } from '../../lib/logger';

jest.mock('../../lib/logger');

describe('StepReporter', () => {
  const error = new Error('Fake Error');
  let instruction: Instruction;
  let reporter0: Reporter;
  let reporter1: Reporter;
  let reporter2: Reporter;

  beforeEach(() => {
    jest.clearAllMocks();

    instruction = {
      value: 'value',
      valueHumanReadable: 'valueHumanReadable',
    };

    reporter0 = {
      onStepBegin: jest.fn(),
      onStepEnd: jest.fn(),
      config: {},
    };

    reporter1 = {
      onStepBegin: jest.fn((_currentStep: Step) => {
        throw error;
      }),
      onStepEnd: jest.fn(),
      config: {
        withScreenshots: 'required',
        withDetectedElements: 'begin',
      },
    };

    reporter2 = {
      onStepBegin: jest.fn(),
      onStepEnd: jest.fn(),
      config: {
        withScreenshots: 'always',
        withDetectedElements: 'always',
      },
    };
  });

  describe('config', () => {
    it("should set withScreenshots to 'required' given reporters passed include a reporter with 'required' and no reporter with a higher SnapshotDetailLevel", () => {
      const stepReporter = new StepReporter(reporter1);
      expect(stepReporter.config.withScreenshots).toEqual('required');
    });

    it("should set withDetectedElements to 'begin' given reporters passed include a reporter with 'begin' and no reporter with a higher SnapshotDetailLevel", () => {
      const stepReporter = new StepReporter(reporter1);
      expect(stepReporter.config.withDetectedElements).toEqual('begin');
    });

    it("should set withScreenshots to the maximum value 'always' given reporters passed include a reporter with 'always'", () => {
      const stepReporter = new StepReporter([reporter1, reporter2]);
      expect(stepReporter.config.withScreenshots).toEqual('always');
    });

    it("should set withDetectedElements to the maximum value 'always' given reporters passed include a reporter with 'always'", () => {
      const stepReporter = new StepReporter([reporter1, reporter2]);
      expect(stepReporter.config.withDetectedElements).toEqual('always');
    });

    it("should set withScreenshots to default 'onFailure' if no reporter has a value", () => {
      const stepReporter = new StepReporter(reporter0);
      expect(stepReporter.config.withScreenshots).toEqual('onFailure');
    });

    it("should set withDetectedElements to default 'onFailure' if no reporter has a value", () => {
      const stepReporter = new StepReporter(reporter0);
      expect(stepReporter.config.withDetectedElements).toEqual('onFailure');
    });

    it("should set withScreenshots to default 'required' if no reporter was passed", () => {
      const stepReporter = new StepReporter();
      expect(stepReporter.config.withScreenshots).toEqual('required');
    });

    it("should set withDetectedElements to default 'required' if no reporter was passed", () => {
      const stepReporter = new StepReporter();
      expect(stepReporter.config.withDetectedElements).toEqual('required');
    });
  });

  describe('resetStep', () => {
    it('should reset currentStep', () => {
      const stepReporter = new StepReporter();
      stepReporter.resetStep(instruction);
      expect(stepReporter.currentStep?.instruction).toEqual(instruction);
    });
  });

  it('should continue reporting given a call to a reporter throws an error', async () => {
    const stepReporter = new StepReporter([reporter1, reporter2]);
    await stepReporter.resetStep(instruction);
    await stepReporter.onStepBegin({
      createdAt: new Date(),
    });
    await stepReporter.onStepEnd({
      createdAt: new Date(),
    });
    await stepReporter.flush();
    expect(logger.error).toHaveBeenCalledWith(error);
    expect(reporter1.onStepBegin).toHaveBeenCalled();
    expect(reporter2.onStepBegin).toHaveBeenCalled();
    expect(reporter1.onStepEnd).toHaveBeenCalledAfter(reporter1.onStepBegin as jest.Mock);
    expect(reporter2.onStepEnd).toHaveBeenCalledAfter(reporter2.onStepBegin as jest.Mock);
  });

  it('should continue reporting given a call takes longer, e.g., until all calls to another reporter have been resolved', async () => {
    let resolve = () => {};
    const unfulfillablePromise = new Promise<void>((res) => { resolve = res; });
    reporter1.onStepBegin = jest.fn((_currentStep) => unfulfillablePromise);
    reporter2.onStepEnd = jest.fn((_currentStep) => {
      resolve();
      return Promise.resolve();
    });
    reporter1.onStepRetry = jest.fn();
    reporter2.onStepRetry = jest.fn();
    const stepReporter = new StepReporter([reporter1, reporter2]);
    await stepReporter.resetStep(instruction);
    await stepReporter.onStepBegin({
      createdAt: new Date(),
    });
    await stepReporter.onStepRetry({
      createdAt: new Date(),
    }, new Error());
    await stepReporter.onStepEnd({
      createdAt: new Date(),
    });
    await stepReporter.flush();
    expect(reporter1.onStepRetry).toHaveBeenCalledAfter(reporter2.onStepEnd as jest.Mock);
    expect(reporter1.onStepEnd).toHaveBeenCalledAfter(reporter1.onStepRetry as jest.Mock);
  });

  it('should call reporter hooks in the correct order', async () => {
    const stepReporter = new StepReporter([reporter1, reporter2]);
    await stepReporter.resetStep(instruction);
    await stepReporter.onStepBegin({
      createdAt: new Date(),
    });
    await stepReporter.onStepEnd({
      createdAt: new Date(),
    });
    await stepReporter.flush();
    expect(reporter1.onStepBegin).toHaveBeenCalledBefore(reporter1.onStepEnd as jest.Mock);
    expect(reporter2.onStepBegin).toHaveBeenCalledBefore(reporter2.onStepEnd as jest.Mock);
  });
});
