function solution(arr1, arr2) {
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr1[0].length; j++) {
            arr1[i][j] += arr2[i][j]
        }
    }
    return arr1;
}
