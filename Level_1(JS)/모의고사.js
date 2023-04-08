function solution(answers) {
    var answer = [];
    var count = [0,0,0];
    var num = [[1,2,3,4,5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]];
    for(var i = 0; i < 3; i++){
        for(var j = 0; j < answers.length; j++){
            if(answers[j] == num[i][j % num[i].length]) count[i]++;
        }
    }
    count.map((a,i) => a == Math.max(...count)? answer.push(i+1) : 0);
    return answer.sort((a,b)=>(a-b));
}
