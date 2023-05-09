function solution(brown, yellow) {
    for(var i = 3; i < brown / 2; i++){
        var width = parseInt((brown + yellow) / i);
        if(i * width === brown + yellow) 
            if((width - 2) * (i - 2) == yellow)
                return [width, i]
    }
}
