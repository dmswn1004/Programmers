# 방법 1
def solution(n):
    return sum([i for i in range(1, n+1) if n % i == 0])

# 방법 2
def solution(n):
    answer = 0
    for i in range(1, n+1):
        if n % i == 0:
            answer = answer + i
    return answer
