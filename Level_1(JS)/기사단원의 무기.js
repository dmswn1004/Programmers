function solution(number, limit, power) {
    var answer = 1;
    for(var i = 2; i <= number; i++){
        var num = 2;
        for(var j = 2;  j <= Math.sqrt(i); j++){
            if (i % j === 0) {
                if (j === i / j) num++;
                else num += 2;
            }
        }
        if(num > limit) num = power;
        answer += num;
    }
    return answer;
}
