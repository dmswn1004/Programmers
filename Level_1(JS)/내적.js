function solution(a, b) {
    var answer = 0;
    for (var i = 0; i < a.length; i++){
        answer += a[i] * b[i];
    }
    return answer;
}

function solution(a, b) {
    return a.reduce((acc, cur, i)=>(acc += cur*b[i]), 0);
}
