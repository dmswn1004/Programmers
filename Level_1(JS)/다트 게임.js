function solution(dartResult) {
    var answer = [];
    
    for(var i = 0; i < dartResult.length; i++){
        if(dartResult[i] >= 0 && dartResult[i] <= 9){
            var num = dartResult[i];
            if(dartResult[i] == 1 && dartResult[i+1] == 0){
                i++;
                num = 10;
            }
            
            if(dartResult[i+1] == 'D') num *= num;
            else if(dartResult[i+1] == 'T') num *= num * num;
            
            if(dartResult[i+2] == '*'){
                num *= 2;
                answer[answer.length-1] *= 2;
            }else if(dartResult[i+2] == '#'){
                num *= -1;
            }
            answer.push(Number(num));
        }
    }
    return answer.reduce((a,b)=>(a + b));
}

// 다른 사람의 풀이
function solution(dartResult) {
    const bonus = { 'S': 1, 'D': 2, 'T': 3 },
          options = { '*': 2, '#': -1, undefined: 1 };

    let darts = dartResult.match(/\d.?\D/g);

    for (let i = 0; i < darts.length; i++) {
        let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
            score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

        if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= options['*'];

        darts[i] = score;
    }

    return darts.reduce((a, b) => a + b);
}
