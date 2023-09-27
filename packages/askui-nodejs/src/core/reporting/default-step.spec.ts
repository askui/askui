import { DefaultStep } from './default-step';
import { Instruction } from './instruction';
import { Snapshot } from './snapshot';
import { ControlCommandError } from '../../execution/control-command-error';

describe('DefaultStep', () => {
  let instructionMock: Instruction;
  let snapshotMock: Snapshot;

  beforeEach(() => {
    // Mocks
    instructionMock = {
      value: 'fake instruction',
      valueHumanReadable: 'Fake instruction',
    };
    snapshotMock = { createdAt: new Date() } as Snapshot;
  });

  it('should initialize correctly', () => {
    const defaultStep = new DefaultStep(instructionMock);
    expect(defaultStep.instruction).toBe(instructionMock);
    expect(defaultStep.runs).toEqual([]);
  });

  describe('onBegin', () => {
    it('should add a run with status "running"', () => {
      const defaultStep = new DefaultStep(instructionMock);
      const result = defaultStep.onBegin(snapshotMock);
      expect(result.runs.length).toBe(1);
      expect(result.runs[0]?.status).toBe('running');
    });
  });

  describe('onRetry', () => {
    it('should update the last run and add a new "running" run', () => {
      const defaultStep = new DefaultStep(instructionMock);
      defaultStep.onBegin(snapshotMock);

      const errorMock = new Error('Fake error');
      const result = defaultStep.onRetry(snapshotMock, errorMock);

      expect(result.runs.length).toBe(2);
      expect(result.runs[0]?.status).toBeOneOf(['failed', 'erroneous']);
      expect(result.runs[1]?.status).toBe('running');
    });
  });

  describe('onEnd', () => {
    it('should update the last run status to "passed" without error', () => {
      const defaultStep = new DefaultStep(instructionMock);
      defaultStep.onBegin(snapshotMock);

      const result = defaultStep.onEnd(snapshotMock);
      expect(result.runs[0]?.status).toBe('passed');
    });

    it('should update the last run status to "failed" for ControlCommandError', () => {
      const defaultStep = new DefaultStep(instructionMock);
      defaultStep.onBegin(snapshotMock);

      const errorMock = new ControlCommandError('Control error');
      const result = defaultStep.onEnd(snapshotMock, errorMock);
      expect(result.runs[0]?.status).toBe('failed');
    });

    it('should update the last run status to "erroneous" for other errors', () => {
      const defaultStep = new DefaultStep(instructionMock);
      defaultStep.onBegin(snapshotMock);

      const errorMock = new Error('Fake error');
      const result = defaultStep.onEnd(snapshotMock, errorMock);
      expect(result.runs[0]?.status).toBe('erroneous');
    });
  });

  describe('immutability checks', () => {
    it('should return a new instance with the same properties recursively for onBegin', () => {
      const defaultStep = new DefaultStep(instructionMock);
      const result = defaultStep.onBegin(snapshotMock);

      expect(result).not.toBe(defaultStep); // Check it's a new instance
      expect(result).toEqual(expect.objectContaining({ // Check properties recursively
        ...defaultStep,
        runs: expect.any(Array),
        status: 'running',
      }));
    });

    it('should return a new instance with the same properties recursively for onRetry', () => {
      const defaultStep = new DefaultStep(instructionMock);
      defaultStep.onBegin(snapshotMock);

      const errorMock = new Error('Fake error');
      const result = defaultStep.onRetry(snapshotMock, errorMock);

      expect(result).not.toBe(defaultStep);
      expect(result).toEqual(expect.objectContaining({
        ...defaultStep,
        runs: expect.any(Array),
      }));
    });

    it('should return a new instance with the same properties recursively for onEnd', () => {
      const defaultStep = new DefaultStep(instructionMock);
      defaultStep.onBegin(snapshotMock);

      const result = defaultStep.onEnd(snapshotMock);

      expect(result).not.toBe(defaultStep);
      expect(result).toEqual(expect.objectContaining({
        ...defaultStep,
        runs: expect.any(Array),
        status: 'passed',
      }));
    });
  });
});
