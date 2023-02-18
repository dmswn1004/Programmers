# 풀이 1
def solution(nums):
    num = set(nums)
    if len(nums)//2 < len(num):
        return len(nums)//2
    else:
        return len(num)
      
# 풀이 2      
def solution(nums): 
    return min(len(nums)/2, len(set(nums)))
