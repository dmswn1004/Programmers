# 방법 1
def solution(n):
    answer = ''
    for i in range(n):
        if i % 2 == 0: answer += '수'
        else: answer += '박'
    return answer
    
    return ("수박"*n)[:n]

# 방법 2
def solution(n):
    return ("수박"*n)[:n]
