function solution(s) {
    var a = parseInt(s.length / 2);
    return s.length % 2? s[a] : s.slice(a-1, a+1);
}


function solution(s) {
    return s.slice(parseInt((s.length-1)/2), parseInt(s.length/2)+1);
}
