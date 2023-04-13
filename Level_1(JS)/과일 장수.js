function solution(k, m, score) {
    var answer = 0;
    score.sort((a,b)=>(b-a));
    for(var i = 0; i < score.length; i+=m){ 
        if(score.slice(i,i+m).length == m) answer += score.slice(i,i+m)[m-1] * m;
    }
    return answer;
}
