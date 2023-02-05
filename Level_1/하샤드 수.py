# 방법 1
def solution(x):
    ls = list(str(x))
    sum = 0
    for i in ls:
        sum += int(i)

    if x % sum == 0:
        return True
    else:
        return False
      
# 방법 2
def solution(x):
   return x % sum([int(i) for i in str(x)]) == 0   
