def solution(s):
    if len(arr) % 2 == 0:
        return s[(len(s)-1)//2:len(s)//2+1]
    else:
        return s[len(s)//2]
