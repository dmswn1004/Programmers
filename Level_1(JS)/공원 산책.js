function solution(park, routes) {
    var size = [park.length, park[0].length];
    var answer = [];
    park.map((a, i)=>{
        if(a.indexOf("S") !== -1) answer = [i, a.indexOf("S")];
    })
    for(var route of routes){
        var [direction, distance] = route.split(" ");
        distance = parseInt(distance, 10);
        
        if(direction === "E"){
            if(answer[1] + distance < size[1] && park[answer[0]].slice(answer[1]+1, answer[1]+distance+1).indexOf("X") === -1) {
                answer[1] += distance;
            }
        } else if(direction === "W"){
            if(answer[1] - distance >= 0 && park[answer[0]].slice(answer[1]-distance, answer[1]).indexOf("X") === -1) {
                answer[1] -= distance;
            }
        } else if(direction === "S"){
            if(answer[0] + distance < size[0]){
                var flag = true;
                for(var i = 1; i <= distance; i++){
                    if(park[answer[0] + i][answer[1]] === "X"){
                        flag = false;
                        break;
                    }
                }
               if(flag) answer[0] += distance;
            }
        } else if(direction  === "N"){
            if(answer[0] - distance >= 0){
                var flag = true;
                for(var i = 1; i <= distance; i++){
                    if(park[answer[0] - i][answer[1]] === "X"){
                        flag = false;
                        break;
                    }
                }
                if(flag) answer[0] -= distance;
            }
        }
    }
    return answer;
}

// 다른 사람의 풀이
function solution(park, routes) {
    const n = park.length, m = park[0].length;
    const map = park.map(x => [...x]), dir = { 'E': [0, 1], 'S': [1, 0], 'W': [0, -1], 'N': [-1, 0]};
    var i = map.findIndex(x => x.includes('S')), j = map[i].findIndex(x => x === 'S');
    const move = (route) => {
        let [r, s] = route.split(' '), x = i, y = j;
        for(let k = 0; k < Number(s); k++) {
            x += dir[r][0];
            y += dir[r][1];
            if (x < 0 || y < 0 || x >= n || y >= m || map[x][y] === 'X') return [i, j];
        }
        return [x, y];
    }
    for(let route of routes) var [i, j] = move(route);
    return [i, j];
}
