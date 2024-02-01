/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    numbers = {}
    for (let i=0; i < nums.length; i++) {
        if (numbers[nums[i]]) {
            numbers[nums[i]] += 1
        } else {
            numbers[nums[i]] = 1
        }
    }
    majorityNumberValue = 0
    majorityNumber = 0
    for (num in numbers) {
        if (majorityNumberValue < numbers[num]) {
            majorityNumberValue = numbers[num]
            majorityNumber = num
        }
    }
    return majorityNumber
};