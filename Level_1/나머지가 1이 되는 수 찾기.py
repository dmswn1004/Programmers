# 방법 1
def solution(n):
    answer = 0
    for i in range(1,n):
        if n % i == 1:
            return i
    return answer
  
# 방법 2
def solution(n):
    return [i for i in range(1,n+1) if n%i==1][0]
