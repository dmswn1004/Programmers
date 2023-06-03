function solution(elements) {
    var answer = [...elements];
    var n = 2;
    while(n <= elements.length){
        for(var i = 0; i < elements.length; i++){
            var sum = 0;
            for(var j = i; j < n + i; j++){
               sum += elements[j % elements.length];
            }
            answer.push(sum);
        }
        n++;
    }
    return [...new Set(answer)].length;
}
