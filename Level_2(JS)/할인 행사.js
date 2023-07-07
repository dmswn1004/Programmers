function solution(want, number, discount) {
    var answer = 0;
    discount.forEach((a,i)=>{
        var arr = discount.slice(i,i+10);
        if(arr.length < 10) return answer;

        var num = 0;
        for(var j = 0; j < want.length; j++){
            if(arr.filter((a)=>(a == want[j])).length == number[j]) num++;
            else break;  
        }
        if(num == want.length) answer++;
    });
    
    return answer;
}
