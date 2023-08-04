function solution(keymap, targets) {
    var answer = [];
    for(var i of targets){
        var num = 0;
        for(var j = 0; j < i.length; j++){
            num += Math.min(...keymap.map(a => a.indexOf(i[j])).filter(a => a >= 0)) + 1;
        }
        num == Infinity? answer.push(-1) : answer.push(num);
    }
    return answer;
}
