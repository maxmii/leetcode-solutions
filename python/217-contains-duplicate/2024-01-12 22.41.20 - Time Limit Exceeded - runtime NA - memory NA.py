class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        myArray = []
        for items in nums:
            if items in myArray:
                return True
                break
            else:
                myArray.append(items)
        return False
        