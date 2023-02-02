# 방법 1
def solution(s):
    return s.count('p') + s.count('P') == s.count('y') + s.count('Y')

# 방법 2
def solution(s):
    pnum = 0
    ynum = 0
    for i in s:
        if i == 'P' or i == 'p':
            pnum += 1
        if i == 'Y' or i == 'y':
            ynum += 1
            
    if pnum == ynum:
        return True
    else:
        return False
