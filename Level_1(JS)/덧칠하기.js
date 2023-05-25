function solution(n, m, section) {
    var answer = 0;
    var index = 0;
    for(i of section){
        if(i < index) continue;
        answer++;
        index = i + m;
    } 
    return answer;
}
