# 풀이 1
def solution(participant, completion):
    participant = sorted(participant)
    completion = sorted(completion)
    completion.append("")

    for i, j in zip(participant, completion):
        if i != j:
            return i
