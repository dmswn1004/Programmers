function solution(wallpaper) {
    var x = [];
    var y = [];
    for(var i = 0; i < wallpaper.length; i++){
        for(var j = 0; j < wallpaper[i].length; j++){
            if(wallpaper[i][j] == '#'){
                x.push(i);
                y.push(j);
            }
        }
    }
    return [Math.min(...x), Math.min(...y), Math.max(...x)+1, Math.max(...y)+1];
}
