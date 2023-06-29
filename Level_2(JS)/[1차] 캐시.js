function solution(cacheSize, cities) {
    var answer = 0;
    var cache = [];
    if (cacheSize == 0) return cities.length * 5;
    
    cities.forEach((a)=>{
        a = a.toLowerCase()
        if(cache.includes(a)){
            cache.splice(cache.indexOf(a),1);
            cache.push(a);
            answer += 1;
        }else{
            if(cache.length == cacheSize){
                cache.shift();
            }
            cache.push(a);
            answer += 5;
        }
    })
    return answer;
}
