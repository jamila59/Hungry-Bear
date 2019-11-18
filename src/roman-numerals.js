export var romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
export var arabicNumerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
export var result = '';

export function convert(number) {



  for (var i = 0; i < romanNumerals.length; i++) {
   while (number >= arabicNumerals[i]) {
     result += romanNumerals[i];
     number -= arabicNumerals[i];
   }
 }
 return result;
}
