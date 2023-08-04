function solution(s) {
    var answer = 0;
    
    while(s.length > 0){
        var x = s[0];
        var xNum = 0
        var other = 0;
        for(var i = 0; i < s.length; i++){
            x === s[i]? xNum++ : other++;
            if(xNum === other){
                answer++;
                s = s.slice(i + 1);
                break;
            }
        }
        if (xNum !== other) {
            answer++;
            break;
        }
    }

    return answer;
}
