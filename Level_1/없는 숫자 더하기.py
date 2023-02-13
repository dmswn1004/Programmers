# 풀이 1
def solution(numbers):
    answer = 0
    for i in range(10):
        if i not in numbers:
            answer += i
    return answer

# 풀이 2
def solution(numbers):
    return sum(range(10)) - sum(numbers)
