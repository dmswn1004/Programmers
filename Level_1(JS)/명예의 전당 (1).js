function solution(k, score) {
    var answer = [];
    for(var i = 0; i < score.length; i++){
        i < k? answer.push(Math.min(...score.slice(0,i+1))) : answer.push(score.slice(0,i+1).sort((a,b)=>(b-a))[k-1]);
    }
    return answer;
}
