class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        my_dict = dict()

        for key, val in enumerate(nums):
            my_dict[key] = val
        

        for second_key, second_val in enumerate(nums):
            for key, val in my_dict.items():
                if key != second_key:
                    if second_val + val == target:
                        return [second_key, key]
                        break

        