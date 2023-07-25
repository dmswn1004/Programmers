function solution(X, Y) {
    var answer = "";
    X = X.split('');
    Y = Y.split('');
    for(var i = 9; i >= 0; i--){
        var xnum = X.filter((a)=> Number(a) === i).length;
        var ynum = Y.filter((a)=> Number(a) === i).length;
        answer += String(i).repeat(Math.min(xnum, ynum));
    }

    if(answer.length === 0) return "-1";
    if (Number(answer) === 0) return "0"; // "00", "000" 등
    
    return answer;
}
