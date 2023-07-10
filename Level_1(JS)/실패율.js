function solution(N, stages) {
    var answer = [];
    var num = {};
    stages.sort((a,b)=>(a-b));
    
    for(var i = 1; i < N + 1; i++){
        var rate = stages.filter(a=>(a == i)).length / stages.filter(a=>(a > i)).length;
        num[i] = rate;
    }

    num = Object.keys(num).sort((a, b) => num[b] - num[a]);

    num.forEach((key) => {
      answer.push(Number(key));
    });

    return answer;
}

// 다른 사람의 풀이
function solution(N, stages) {
    let result = [];
    for(let i=1; i<=N; i++){
        let reach = stages.filter((x) => x >= i).length;
        let curr = stages.filter((x) => x === i).length;
        result.push([i, curr/reach]);
    }
    result.sort((a,b) => b[1] - a[1]);
    return result.map((x) => x[0]);
}
