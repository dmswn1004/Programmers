function solution(s) {
    var answer = [];
    s = s.slice(2,-2).split("},{").map((a)=>(a.split(",").map((a)=>(Number(a)))));
    s.sort((a,b)=>(a.length - b.length));
    for(var i = 0; i < s.length; i++){
        for(var j = 0; j < s[i].length; j++){
            if(!answer.includes(s[i][j])) answer.push(s[i][j]);
        }
    }
    return answer;
}
