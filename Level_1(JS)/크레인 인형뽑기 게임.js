function solution(board, moves) {
    var answer = 0;
    var arr = [];
    while(moves.length > 0){
        var num = moves.shift();
        for(var i = 0; i < board.length; i++){
            if(board[i][num-1] !== 0){
                if(arr.length > 0 && arr.at(-1) === board[i][num-1]){
                    arr.pop();
                    answer++;
                }else{
                    arr.push(board[i][num-1]);
                }
                board[i][num-1] = 0;
                break;
            }
        }
    }
    return answer * 2;
}
