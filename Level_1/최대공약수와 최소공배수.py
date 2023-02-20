# 풀이
def solution(n, m):
    answer = []
    for i in range(min(n,m)+1,0,-1):
        if n % i == 0 and m % i == 0:
            answer.append(i)
            break
            
    for i in range(1, n*m+1):
        if i % n == 0 and i % m ==0:
            answer.append(i)
            break
    return answer

# 재귀 이용 풀이
def gcd(a, b):
    return b if a % b == 0 else gcd(b, a % b)

def lcm(a, b):
    return int(a * b / gcd(a, b))

def solution(n, m):
    return [gcd(n,m), lcm(n,m)]
