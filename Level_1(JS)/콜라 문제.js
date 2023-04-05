function solution(a, b, n) {
    var answer = 0;
    while(n >= a){
        answer += parseInt(n / a) * b;
        n = parseInt(n / a) * b + (n % a);
    }
    return answer;
}
