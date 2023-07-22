function solution(lottos, win_nums) {
    var zero = lottos.filter((a)=>(a == 0)).length;
    if(zero == win_nums.length) return [1, zero];
    
    var answer = 7;
    
    for(var num of win_nums){
        if(lottos.includes(num)) answer--;
    }
    if(answer == 7) answer--;
    return [answer-zero, answer];
}

// 다른 사람의 풀이
function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    let minCount = lottos.filter(v => win_nums.includes(v)).length;
    let zeroCount = lottos.filter(v => !v).length;

    const maxCount = minCount + zeroCount;

    return [rank[maxCount], rank[minCount]];
}
