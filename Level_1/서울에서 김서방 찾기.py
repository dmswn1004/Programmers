# 방법 1
def solution(seoul):
    answer = ''
    for i in range(len(seoul)):
        if seoul[i] == "Kim":
            answer = f'김서방은 {i}에 있다'
    return answer
  
# 방법 2
def solution(seoul):
    return "김서방은 {}에 있다".format(seoul.index('Kim'))
