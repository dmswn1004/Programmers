function solution(s) {
    var answer = [];
    var num = 0;
    while(num < s.length){
        if(s.slice(0, num).indexOf(s[num]) == -1) answer.push(-1);
        else {
            answer.push(num - s.slice(0, num).lastIndexOf(s[num]));
        }
        num++;
    }
    return answer;
}

// 다른 사람의 풀이
const solution = (s) =>
  [...s].map((char, i) => {
    const count = s.slice(0, i).lastIndexOf(char);
    return count < 0 ? count : i - count;
  });
