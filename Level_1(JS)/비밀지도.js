function solution(n, arr1, arr2) {
    var answer = "";
    arr1 = arr1.map(a=>a.toString(2).split(""));
    arr2 = arr2.map(a=>a.toString(2).split(""));
    
    for(var i = 0; i < n; i ++){
        while(arr1[i].length != n) arr1[i].unshift('0');
        while(arr2[i].length != n) arr2[i].unshift('0');
    }
    for(var i = 0; i < n; i ++){
        for(var j = 0; j < n; j ++){
            arr1[i][j] | arr2[i][j]? answer += "#" : answer += " ";
        }
        i < n-1? answer += "-" : 0;
    }
    return answer.split("-");
}


// 다른 사람의 풀이
function solution(n, arr1, arr2) {
    return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
}

const addZero = (n, s) => {
    return '0'.repeat(n - s.length) + s;
}
