# 풀이
def solution(left, right):
    answer = 0
    for i in range(left, right+1):
        num = 1
        for j in range(1,i):
            if i % j == 0: 
                num += 1
        if num % 2 == 0: answer += i
        else:  answer -= i
            
    return answer
  
# 개선된 풀이 (시간 ↓)
import math

def solution(left, right):
    answer = 0
    for i in range(left, right + 1, 1):
        if int(math.sqrt(i)) == math.sqrt(i):
            answer -= i
        else:
            answer += i
    return answer
