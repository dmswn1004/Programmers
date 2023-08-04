function solution(s, skip, index) {
    var answer = '';
    var abc = "abcdefghijklmnopqrstuvwxyz";
    abc = [...abc].filter(a => !skip.includes(a));
    
    for(var j of s){
        answer += abc[(abc.indexOf(j) + index) % abc.length];
    }
    return answer;
}
