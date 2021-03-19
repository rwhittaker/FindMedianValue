function median(numbers) {
            // median of [3, 5, 4, 4, 1, 1, 2, 3] = 3
            var median = 0,
                numsLen = numbers.length;
            if (
                numsLen % 2 === 0 // is even
            ) {
                // average of two middle numbers
                median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
            } else { // is odd
                // middle number only
                median = numbers[(numsLen - 1) / 2];
            }
            result = median;
            console.log(result);
  return result;
        }
     

var res = median([3, 5, 4, 4, 1, 1, 2, 3]);
console.log(res);