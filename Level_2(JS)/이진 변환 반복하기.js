function solution(s) {
    var answer = [0, 0];
    while(s != "1"){
        answer[0]++;
        answer[1] += s.length - s.split("0").join("").length; 
        s = s.split("0").join("");
        var slen = s.length;
        s = slen.toString(2);
    }
    return answer;
}
