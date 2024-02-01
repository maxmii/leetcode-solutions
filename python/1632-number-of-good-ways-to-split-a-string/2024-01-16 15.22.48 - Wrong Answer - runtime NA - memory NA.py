class Solution:
    def numSplits(self, s: str) -> int:
        left_array = []
        right_array = list(s)
        good_splits = 0
        string_length = len(s)
        for i in range(string_length):
            left_array.append(right_array[0])
            right_array.pop()
            if len(set(left_array)) == len(set(right_array)):
                good_splits += 1
        return good_splits


                



            

            
            