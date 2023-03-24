function solution(s) {
    var num = ["zero", "one", "two", "three", "four","five", "six", "seven", "eight", "nine"];
    for(var i = 0; i < 10; i++){
        while(s.indexOf(num[i]) != -1) s = s.replace(num[i],i);
    }
    return parseInt(s);
}
