function solution(s) {
    var answer = "";
    var str = s.toLowerCase().split(" ");
    for(var i = 0; i < str.length; i++){
        for(var j = 0; j < str[i].length; j++){
            j % 2? answer += str[i][j] : answer += str[i][j].toUpperCase();
        }
        i < str.length -1? answer += ' ' : null;
    }
    return answer;
}
