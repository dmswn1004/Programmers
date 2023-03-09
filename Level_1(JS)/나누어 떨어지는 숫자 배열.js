function solution(arr, divisor) {
    var answer = arr.filter(a=> a % divisor == 0);
    return answer.length > 1? answer.sort((a,b)=>(a - b)) : [-1];
}
