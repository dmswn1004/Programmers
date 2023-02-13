def solution(a, b):
    return sum([i for i in range(min([a,b]),max([a,b])+1)])

# 실행 시간이 더 빠른 풀이
def solution(a, b):
    if a > b: a, b = b, a
    return sum(range(a,b+1))
