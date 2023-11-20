function solution(command) {
    let answer = [0, 0];
    let direction = ['+y', '+x', '-y', '-x'];
    let currentDirection = '+y';
    for(let c of command){
        if(c === 'R') {
            let index1 = direction.indexOf(currentDirection);
            currentDirection = direction[(index1 + 1) % 4];
        } else if (c === 'L') {
            let index2 = direction.indexOf(currentDirection) - 1;
            if(index2 === - 1) index2 = 3;
            currentDirection = direction[index2];
        } else if (c === 'G') {
            let [sign, value] = currentDirection.split('');
            if(value === 'x') {
                sign === '+' ? answer[0] += 1 : answer[0] -= 1;
            } else {
                sign === '+' ? answer[1] += 1 : answer[1] -= 1;
            }
        } else if (c === 'B') {
            let [sign, value] = currentDirection.split('');
            if(value === 'x') {
                sign === '+' ? answer[0] -= 1 : answer[0] += 1;
            } else {
                sign === '+' ? answer[1] -= 1 : answer[1] += 1;
            }
        }
    }
    return answer;
}

// 다른 사람의 풀이
function solution(command) {
    let now = 0;
    let VALUES = [0, 0, 0, 0]

    Array.from(command).forEach((e)=>{
        if(e === "G"){
            VALUES[now] += 1;
        } else if(e ==="B") {
            VALUES[(now + 2) % 4] += 1;
        } else if(e ==="L"){
            now = (now + 3) % 4; 
        } else if( e==="R"){
            now = (now + 1) % 4;
        }
    })

    return [VALUES[1] - VALUES[3], VALUES[0] - VALUES[2]];
}
