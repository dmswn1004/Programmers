function solution(k, tangerine) {
    var answer = 0;
    var dict = {};
    tangerine.forEach((a) => dict[a] = (dict[a] || 0) + 1);
    var arr = Object.values(dict).sort((a, b) => b - a);
    for (var t of arr) {
        answer++;
        if (k > t) k -= t;
        else break;
    }
    return answer;
}
