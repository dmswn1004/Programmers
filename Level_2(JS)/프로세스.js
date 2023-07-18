function solution(priorities, location) {
    var answer = 0; 
    var arr = [];
    
		// location 정보 배열
    for(let i = 0; i < priorities.length; i++){
        arr.push(i);
    }

    while(priorities.length){
        var max = Math.max(...priorities);
        
        if(priorities[0] < max){
            priorities.push(priorities.shift());
            arr.push(arr.shift());
        }else {
            answer++;
            priorities.shift();
            if(arr.shift() == location)
                return answer;
        }
    }
}
