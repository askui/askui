---
sidebar_position: 2
---

# Jest

## Global Hooks Not Executed or Executed in Wrong Order
If you use Jest's global hooks like `before*()` and `after*()` that do no reside inside a `describe`-block you may run into the following issues:

* Hooks are not executed at all
* Hooks are executed in wrong order

The solution is to stop using global hooks and do your setup inside a `describe`-block. Please also consult [Jest's docs for a detailed explanation](https://jestjs.io/docs/setup-teardown#order-of-execution).

```typescript
/*
 * DO NOT DO THIS!
 */
beforeAll(() => console.log('1 - beforeAll')); // won't work reliably
afterAll(() => console.log('1 - afterAll')); // won't work reliably
beforeEach(() => console.log('1 - beforeEach')); // won't work reliably
afterEach(() => console.log('1 - afterEach')); // won't work reliably

it('', () => console.log('1 - test'));

/*
 * DO THIS INSTEAD
 */
describe('Scoped / Nested block', () => {
  beforeAll(() => console.log('2 - beforeAll')); // works
  afterAll(() => console.log('2 - afterAll')); // works
  beforeEach(() => console.log('2 - beforeEach')); // works
  afterEach(() => console.log('2 - afterEach')); // works

  it('', () => console.log('2 - test'));
  
  describe('More deeply scoped / nested block', () => {
    beforeAll(() => console.log('3 - beforeAll')); // works
    afterAll(() => console.log('3 - afterAll')); // works
    beforeEach(() => console.log('3 - beforeEach')); // works
    afterEach(() => console.log('3 - afterEach')); // works
  
    it('', () => console.log('3 - test'));
  });
});
```

## Termination Error

Jest sometimes has problems terminating correctly. If this happens, you can see the following error message:

```shell
Jest did not exit one second after the test run has completed.

This usually means that there are asynchronous operations 
that weren't stopped in your tests. 
Consider running Jest with `--detectOpenHandles` to troubleshoot this issue.
```

As described in the error message Jest has problems stopping because of some processes which are still running.
This can cause problems in your CI/CD pipeline because your pipeline can't continue after 
getting this error.

A solution is to force Jest to stop. For this case Jest provides the `--forceExit` flag: 

```shell
npx jest --config ./test/jest.config.ts --forceExit
```