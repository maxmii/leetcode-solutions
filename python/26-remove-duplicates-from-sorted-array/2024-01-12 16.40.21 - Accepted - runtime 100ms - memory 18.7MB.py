class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        j = 1
        for i in range(1, len(nums)):
            print(nums[i])
            print(nums[i-1])
            if nums[i] != nums[i - 1]:
                nums[j] = nums[i]
                print(nums[j])
                j +=1
        return j