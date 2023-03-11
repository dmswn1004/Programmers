function solution(numbers) {
    var answer = 0;
    for (var i = 0; i < 10; i++){
        numbers.includes(i)? 0 : answer += i;
    }
    return answer;
}
