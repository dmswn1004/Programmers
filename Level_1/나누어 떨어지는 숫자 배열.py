# 방법 1
def solution(arr, divisor):
    answer = sorted([i for i in arr if i % divisor == 0])
    if len(answer) == 0:
        answer.append(-1)
    return answer

  
# 방법 2
def solution(arr, divisor):
    return sorted([n for n in arr if n % divisor == 0]) or [-1]
