# 풀이 1
def solution(arr1, arr2):
    for i in range(len(arr1)):
        for j in range(len(arr1[0])):
            arr1[i][j] += arr2[i][j]
    return arr1
  
# 풀이 2
def solution(arr1, arr2):
    return [[c + d for c, d in zip(a,b)] for a, b in zip(arr1,arr2)]
