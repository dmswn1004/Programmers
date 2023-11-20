function solution(queries) {
    var answer = [];
    for (let arr of queries) {
        let [n, p] = arr;
        answer.push(findCharacter(n, p));
    }
    return answer;
}

function findCharacter(n, p) {
    let character = ['RR', 'Rr', 'Rr', 'rr'];
    if (n == 1) return 'Rr';
    if (n == 2) {
        return character[p - 1];
    } else {
        let parentCharacter = findCharacter(n - 1, Math.ceil(p / 4));
    
        if (parentCharacter === 'RR') return 'RR';
        if (parentCharacter === 'rr') return 'rr';
        if (parentCharacter === 'Rr') {
            let index = p % 4 - 1;
            if (index === -1) index = 3;
            return character[index];
        }
    }
}
