class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        num_set = set()
        for items in nums:
            if items in num_set:
                return True
                break
            else:
                num_set.add(items)
        return False
        