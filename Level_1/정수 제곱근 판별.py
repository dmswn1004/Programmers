# 처음 풀이
def solution(n):
    answer = -1
    for i in range(1,n+1):
        if i * i == n:
            return (i + 1) * (i + 1)
    return answer
  
# 정답 2
def solution(n):
    sqrt = n ** (1/2)

    if sqrt % 1 == 0:
        return (sqrt + 1) ** 2
    return -1
