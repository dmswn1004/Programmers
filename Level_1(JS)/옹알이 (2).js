function solution(babbling) {
    var answer = 0;
    var word = ["aya", "ye", "woo", "ma"];
    for(var i = 0; i < babbling.length; i++){
        for(var j = 0; j < word.length; j++){
            babbling[i] = babbling[i].replaceAll(word[j], j);
        }
        
        if(!isNaN(babbling[i])){
            var flag = true;
            babbling[i] = [...babbling[i]];
            
            babbling[i].forEach((a,k)=>{
                if (babbling[i][k] === babbling[i][k-1]) {
                    flag = false;
                }
            })
            if (flag) answer++;
        }
    }
    return answer;
}

// 다른 사람의 풀이
function solution(babbling) {
    const regexp1 = /(aya|ye|woo|ma)\1+/;
    const regexp2 = /^(aya|ye|woo|ma)+$/;

    return babbling.reduce((ans, word) => (
        !regexp1.test(word) && regexp2.test(word) ? ++ans : ans
    ), 0);
}
