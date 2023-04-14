function solution(name, yearning, photo) {
    var answer = [];
    for(var i = 0; i < photo.length; i++){
        var sum = 0;
        for(var j = 0; j < photo[i].length; j++){
            if(name.indexOf(photo[i][j]) != -1) sum += yearning[name.indexOf(photo[i][j])];
        }
        answer.push(sum);
    }
    return answer;
}

// 다른 사람의 풀이
function solution(name, yearning, photo) {
    let obj = {};
    for(let i = 0; i < name.length; i++){
        obj[name[i]] = yearning[i];
    }
    return photo.map(value => value.map(v => obj[v] ? obj[v] : 0).reduce((acc,cur) => acc + cur,0))
}
