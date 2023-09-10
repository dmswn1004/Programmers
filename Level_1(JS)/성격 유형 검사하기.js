function solution(survey, choices) {
    var answer = '';
    var type = {R:0, T:0, C:0, F:0, J:0, M:0, A:0, N:0};
    var score = [0,3,2,1,0,1,2,3];
    
    for(var i = 0; i < survey.length; i++){
        var choice = choices[i];
        if(choice < 4){
            type[survey[i][0]] = type[survey[i][0]] + score[choice];
        }else{
            type[survey[i][1]] = type[survey[i][1]] + score[choice];
        }
    }
    type['R'] >= type['T']? answer += 'R' : answer += 'T';
    type['C'] >= type['F']? answer += 'C' : answer += 'F';
    type['J'] >= type['M']? answer += 'J' : answer += 'M';
    type['A'] >= type['N']? answer += 'A' : answer += 'N';
    return answer;
}
