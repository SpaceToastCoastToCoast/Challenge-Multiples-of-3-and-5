/**
 * sumOfAMultiple() sums of the multiples of 3 and 5 for any number passed in
 * @param  {Number} n Number that is to be used for calculating multiples up to that Number
 * @return {Number}
 */
exports.sumOfAMultiple = function( n ) {
  var sum = 0;

  // do your work here
  multiplesOfThree = (n - 1) / 3;
  multiplesOfFive = (n - 1) / 5;


  for(var i = 1; i <= multiplesOfThree; i++) {
    if(i % 5 !== 0){
      sum += (i * 3);
    }
  }

  for(i = 1; i <= multiplesOfFive; i++) {
    sum += (i * 5);
  }

  return sum;
};
