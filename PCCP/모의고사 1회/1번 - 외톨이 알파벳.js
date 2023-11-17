// 문제 : https://school.programmers.co.kr/learn/courses/15008/lessons/121683

function solution(input_string) {
    let answer = [];
    let arr = [];

    // 뭉쳐있는 알파벳 중복 제거
    for(let i = 0; i < input_string.length; i++) {
        if(input_string[i] !== input_string[i+1]) {
            arr.push(input_string[i]);
        }
    }
    
    let obj = {};
    arr.map(a => obj[a] = (obj[a] || 0) + 1);
    (Object.entries(obj)).map((a, i) => {
        let [alpha, num] = a;
        if(num >= 2) answer.push(alpha);
    })
    

    return answer.length > 0 ? answer.sort().join("") : "N";
}
