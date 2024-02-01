class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        index = 1
        duplicate = 1
        for i in range(1, len(nums)):
            if nums[i] == nums[i-1]:
                duplicate += 1
            else:
                duplicate = 1

            if duplicate <= 2:
                nums[index] = nums[i]
                index +=1
        return index

