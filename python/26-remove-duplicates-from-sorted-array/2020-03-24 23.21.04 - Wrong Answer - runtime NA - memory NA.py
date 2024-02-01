class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        
        for self in nums:
            if nums[self] == nums[self]:
                del nums[self]
            return len(nums)
        