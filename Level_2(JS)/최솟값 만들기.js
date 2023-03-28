// for문 사용
function solution(A,B){
    A.sort((a,b)=>(a-b));
    B.sort((a,b)=>(b-a));
    var answer = 0;
    for(var i = 0; i < A.length; i++){
        answer += A[i] * B[i];
    }
    return answer;
}

// reduce 사용
function solution(A,B){
    A.sort((a,b)=>(a-b));
    B.sort((a,b)=>(b-a));
    return A.reduce((acc, cur, i) => acc + cur * B[i], 0)
}
