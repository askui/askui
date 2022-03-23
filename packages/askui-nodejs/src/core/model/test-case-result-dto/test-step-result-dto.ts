import { TestStepState } from './test-step-state';

export class TestStepResultDto {
  constructor(
    public state: TestStepState,
    public comment: string = '',
    public createDate: Date = new Date(),
    public updateDate: Date = new Date(),
  ) { }

  static fromJson(testStepResult: TestStepResultDto): TestStepResultDto {
    return new TestStepResultDto(
      TestStepState[testStepResult.state],
      testStepResult.comment,
      new Date(testStepResult.createDate),
      new Date(testStepResult.updateDate),
    );
  }
}
