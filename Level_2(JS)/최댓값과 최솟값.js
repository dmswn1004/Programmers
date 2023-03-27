// 풀이 1
function solution(s) {
    s = s.split(" ");
    return Math.min(...s) + " " + Math.max(...s);
}

// 풀이 2
function solution(s) {
    s = s.split(" ").sort((a,b)=>(a-b));
    return s[0] + " " + s[s.length-1];
}
