class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        splitted_words = s.strip().split(' ')
        print(splitted_words[-1])
        return len(splitted_words[-1].strip())