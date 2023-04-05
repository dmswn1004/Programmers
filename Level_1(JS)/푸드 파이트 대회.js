function solution(food) {
    var answer = '';
    for(var i = 1; i <= food.length; i++){
        if(food[i] > 1) answer += String(i).repeat(parseInt(food[i] / 2));
    }
    return answer + '0' + answer.split("").reverse().join("");
}
