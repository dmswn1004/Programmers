# 풀이 1
def solution(s):
    answer = True
    if len(s) != 4 and len(s) != 6:
        return False
    for i in s:
        if '0' <= i <= '9':
            pass
        else: return False
    return answer
  
# 풀이 2  
def solution(s):
    return s.isdigit() and (len(s)==4 or len(s)==6)
