// 풀이가 조금 비효율적인 것 같음....
function solution(s, n) {
    s = s.split("");
    for(var i = 0; i < s.length; i++){
        if(s[i] != " "){
            // 대문자
            if(65 <= s[i].charCodeAt() && s[i].charCodeAt() <= 90){
                s[i].charCodeAt() + n > 90? 
                    s[i] = String.fromCharCode(s[i].charCodeAt() + n - 26) : 
                    s[i] = String.fromCharCode(s[i].charCodeAt() + n);
            } 
            // 소문자
            else if(97 <= s[i].charCodeAt() && s[i].charCodeAt() <= 122){
                s[i].charCodeAt() + n > 122? 
                    s[i] = String.fromCharCode(s[i].charCodeAt() + n - 26) : 
                    s[i] = String.fromCharCode(s[i].charCodeAt() + n);
            }
        }
    }
    return s.join("");
}


// 다른 사람의 풀이 중 아스키코드를 사용하지 않는 방법
function solution(s, n) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var answer= '';

    for(var i =0; i <s.length; i++){
        var text = s[i];
        if(text == ' ') {
            answer += ' '; 
            continue;
        }
        var textArr = upper.includes(text) ? upper : lower;
        var index = textArr.indexOf(text) + n;
        if(index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    return answer;
}
