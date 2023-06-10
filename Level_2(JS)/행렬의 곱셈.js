function solution(arr1, arr2) {
    var answer = new Array(arr1.length);

    for(var i = 0; i < arr1.length; i++){
        answer[i] = new Array(arr2[0].length);
        for(var j = 0; j < arr2[0].length; j++){
        var sum = 0;
            for (var k = 0; k < arr1[0].length; k++) {
                sum += arr1[i][k] * arr2[k][j];
            }
            answer[i][j] = sum;
        }
    }
    return answer;
}

# 다른 사람의 풀이
function solution(arr1, arr2) {
    return arr1.map((row) => arr2[0].map((x,y) => row.reduce((a,b,c) => a + b * arr2[c][y], 0)));
}
