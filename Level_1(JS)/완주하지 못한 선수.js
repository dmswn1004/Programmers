function solution(participant, completion) {
    participant.sort();
    completion.sort();
    for(var i = 0; i < participant.length; i++){
        if(participant[i] !== completion[i]) return participant[i];
    }
}

// 다른 방법의 풀이
function solution(participant, completion) {
    var names = {};
    
    participant.forEach(name => {
        names[name] = (names[name] || 0) + 1;
    })
    
    completion.forEach(name => {
        names[name] -= 1;
    })
    
    for(var i in names){
        if(names[i] > 0) return i;
    }
}

