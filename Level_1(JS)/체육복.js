function solution(n, lost, reserve) {
    var realLost = lost.filter(a => !reserve.includes(a));
    var realReserve = reserve.filter(a => !lost.includes(a));
    var answer = n - realLost.length;
   
    realLost.sort((a,b)=>(a-b));
    
    for(var i of realLost){
        if(realReserve.includes(i-1)){
            realReserve = realReserve.filter(a => a !== (i - 1));
            answer++;
        } else if(realReserve.includes(i+1)){
            realReserve = realReserve.filter(a => a !== (i + 1));
            answer++;
        }
    }
    
    return answer;
}
