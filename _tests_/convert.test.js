import { convert } from './../src/roman-numerals.js';
import { arabicNumerals } from './../src/roman-numerals.js';
import { romanNumerals } from './../src/roman-numerals.js';
import { result } from './../src/roman-numerals.js';

describe('Convert', () => {

  test('should correctly assess no more than 3 of the same characters', () => {
    var input = convert(5)
    expect(input.length).toBeLessThan(4);
  });
  test('should not convert numbers greater than 4000', () => {
    var input1 = arabicNumerals
    expect(input1).toBeLessThan(4000);
});
})
