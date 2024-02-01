class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        
        for self in nums:
            if nums[self] == nums[self]:
                del nums[self]
                self += 1
                return len(nums)
        