function solution(n, words) {
    for(var i = 1; i < words.length; i++){
        if(words[i-1].substr(-1) != words[i][0] || words.slice(0,i).indexOf(words[i]) != -1)
            return [i % n + 1, Math.ceil((i+1)/n)];
    }
    return [0,0];
}
