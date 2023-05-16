function solution(arr) {
    arr.sort((a,b)=>(a-b));
    var answer = lcm(arr[0], arr[1]);
    console.log(answer)
    for(var i = 2; i < arr.length; i++){
        answer = lcm(answer, arr[i]);
    }
    return answer;
}

function lcm(a,b){
    for(var i = Math.max(a,b); i <= a * b; i++){
        if(i % a == 0 && i % b == 0) return i;
    }
}
