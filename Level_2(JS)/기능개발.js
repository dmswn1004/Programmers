function solution(progresses, speeds) {
    var answer = [];
    let day = 0;

    progresses.map((a,i)=>(progresses[i] = Math.ceil((100 - progresses[i]) / speeds[i])));
    
    progresses.forEach((a,i)=>{
        if(progresses[i] > day) {
            answer.push(1);
            day = progresses[i];
        }else{
            answer[answer.length - 1]++;
        }
    });
    
    return answer;
}
