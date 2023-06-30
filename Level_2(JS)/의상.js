function solution(clothes) {
    var answer = 1;
    var cloth = {};
    clothes.forEach((a)=>(cloth[a[1]] = (cloth[a[1]] || 0) + 1));
    for(var num of Object.values(cloth)) {
        answer *= (num + 1);
    }
    return answer - 1;
}
