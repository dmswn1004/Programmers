function solution(a, b) {
    var days = [31,29,31,30,31,30,31,31,30,31,30,31];
    var date = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    var sum = 0;
    for(var i = 0; i < a - 1; i++){
        sum += days[i];
    }
    sum += b - 1;
    return date[(5 + sum) % 7];
}

// Date를 이용한 풀이
function solution(a,b){
    var date = new Date(2016, (a - 1), b);
    return date.toString().slice(0, 3).toUpperCase();
}
