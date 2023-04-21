function solution(s){
    var arr = [];
    if(s.split("(").length != s.split(")").length) return false;
    s.split("").map(a=>{
        if(a == "(") arr.push(a);
        if(a == ")"){
            if(arr.length > 0) arr.pop();
            else return false;
        }  
    });
    return arr.length == 0? true : false;
}

// 다른 사람의 풀이
function solution(s){
    let cum = 0
    for (let paren of s) {
        cum += paren === '('? 1: -1
        if(cum < 0) {
            return false
        }
    }
    return cum === 0? true: false;
}
