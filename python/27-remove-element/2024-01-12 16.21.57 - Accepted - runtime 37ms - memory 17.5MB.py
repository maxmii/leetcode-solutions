class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        index=0
        for num in range(len(nums)):
            if (nums[num] != val):
                nums[index] = nums[num]
                index += 1
        return index
        