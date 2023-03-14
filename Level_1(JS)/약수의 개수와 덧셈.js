function solution(left, right) {
    var answer = 0;
    for (var i = left; i <= right; i++){
        var num = 1;
        for (var j = 1; j < i; j++) {
            if (i % j == 0) num++;
        }
        num % 2? answer -= i : answer += i;
    }
    return answer;
}

function solution(left, right) {
    var answer = 0;
    for (var i = left; i <= right; i++){
        Number.isInteger(Math.sqrt(i))? answer -= i : answer += i;
    }
    return answer;
}
