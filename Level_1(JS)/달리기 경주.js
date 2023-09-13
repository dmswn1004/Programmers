function solution(players, callings) {
    var index = {};
    players.forEach((name, i) => {
        index[name] = i;
    });

    for(var call of callings){
        var current = index[call];
        var temp = players[current-1];
        [players[current], players[current-1]] = [players[current-1], players[current]];
        
        index[call] = current - 1;
        index[temp] = current;
    }
    return players;
}
