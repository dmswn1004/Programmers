function solution(str1, str2) {
    var answer = 0;
    var arr1 = [];
    var arr2 = [];
    // str1, str2 각 문자열 2자리씩 분리
    for(var i = 0; i < str1.length; i++){
        var substr = str1.toLowerCase().slice(i, i + 2);
        if (substr.length === 2 && /^[A-Za-z]+$/.test(substr)) {
            arr1.push(substr);
        }
    }
    for(var i = 0; i < str2.length; i++){
        var substr2 = str2.toLowerCase().slice(i, i + 2);
        if (substr2.length === 2 && /^[A-Za-z]+$/.test(substr2)) {
            arr2.push(substr2);
        }
    }
    // 교집합 배열
    var intersection = [];
    
    for (var i = 0; i < arr1.length; i++) {
        var index = arr2.indexOf(arr1[i]);
        if (index !== -1) {
            intersection.push(arr1[i]);
            arr2.splice(index, 1); 
        }
    }
    
    // 합집합이 없는 경우
    if((arr1.length + arr2.length) == 0) return 65536;
    
    answer = (intersection.length / (arr1.length + arr2.length)) * 65536;
    return Math.floor(answer);
}
