function solution(n) {
    var num = n + 1;
    while(true){
        var nNum = n.toString(2).split("").filter(a => a === "1").length;
        if(nNum == num.toString(2).split("").filter(a => a === "1").length)
            return num;
        num++;
    }
}

// 다른 사람의 풀이 (정규식 이용)
function solution(n,a=n+1) {
    return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length ? a : solution(n,a+1);
}
