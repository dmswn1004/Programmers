# 풀이 1
def solution(price, money, count):
    for i in range(1, count+1):
        money -= price *i
        
    if money > 0:
        return 0
    else: 
        return abs(money)

# 풀이 2      
def solution(price, money, count):
    return abs(min(money - sum([price*i for i in range(1,count+1)]),0))
