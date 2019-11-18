import { HungryBear } from './../src/hungrybear.js';

// In order to use Jest's fake timer, we first need to specify that they should be included with jest.useFakeTimers();


describe('Fuzzy', () => {
  jest.useFakeTimers();
  let fuzzy;

// setup and teardown between tests.

  beforeEach(function() {
    fuzzy = new HungryBear("Fuzzy");
    fuzzy.setHunger();
  });


  afterEach(function() {
    jest.clearAllTimers();
  });

// After each test, we'll use jest.clearAllTimers() to remove all timers. If we didn't do this, our test would get polluted with timers we're not using anymore.

  test('should have a name and a food level of 10 when it is created', () => {
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
  });

  test('should have a food level of 7 after 3001 milliseconds', () => {
    jest.advanceTimersByTime(3001);
    expect(fuzzy.foodLevel).toEqual(7);
  });
});


// When fuzzy is created, he should have a foodLevel of 10. After three seconds, fuzzy's foodLevel should be down to 7.

test('should get very hungry if the food level drops below zero', function() {
    fuzzy.foodLevel = 0;
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  test('should get very hungry if 10 seconds pass without feeding', function() {
    jest.advanceTimersByTime(10001);
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  test('should have a food level of ten if it is fed', function() {
    jest.advanceTimersByTime(9001);
    fuzzy.feed();
    expect(fuzzy.foodLevel).toEqual(10);
  });
