function solution(numbers, hand) {
    var answer = '';
    var lHand = '*';
    var rHand = '#';
    for(var num of numbers){
        if(num === 1 || num === 4 || num ===7){
            answer += 'L';
            lHand = num;
        } else if(num === 3 || num === 6 || num ===9){
            answer += 'R';
            rHand = num;
        }
        else{
            if((findDistance(lHand, num) === findDistance(rHand, num) && hand == "right") || 
              findDistance(lHand, num) > findDistance(rHand, num)){
                answer += 'R'; 
                rHand = num;
            }else{
                answer += 'L';
                lHand = num;
            }
        }
    }
    return answer;
}

function findDistance(current, target) {
    const keyPad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2],
    };
    return Math.abs(keyPad[current][0]-keyPad[target][0]) + Math.abs(keyPad[current][1]-keyPad[target][1]);
}
