import { createArgsWithDefaults, createCliFlagsFromArgs } from './ui-controller-args';

describe('createCliFlagsFromArgs()', () => {
  test('test createCliFlagsFromArgs should return -d 0 as default output', () => {
    const expected = ['-d 0', '-p 6769', '--host 127.0.0.1', '-m ', '--log-level debug'];
    const argsWithDefaults = createArgsWithDefaults();
    const actual = createCliFlagsFromArgs(argsWithDefaults);
    expect(actual).toStrictEqual(expected);
  });

  test('test createCliFlagsFromArgs  output should include -d 0 when no display was selected', () => {
    const expected = ['-d 0', '-p 6777', '--host 0.0.0.0', '-m ', '--log-level debug'];
    const argsWithDefaults = createArgsWithDefaults({ port: 6777, host: '0.0.0.0' });
    const actual = createCliFlagsFromArgs(argsWithDefaults);

    expect(actual).toStrictEqual(expected);
  });

  test('test createCliFlagsFromArgs  output should include the display that was selected ', () => {
    const expected = ['-d 99', '-p 6777', '--host 0.0.0.0', '-m ', '--log-level debug'];
    const argsWithDefaults = createArgsWithDefaults({ port: 6777, host: '0.0.0.0', display: 99 });
    const actual = createCliFlagsFromArgs(argsWithDefaults);
    expect(actual).toStrictEqual(expected);
  });
});
