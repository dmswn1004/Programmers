function solution(people, limit) {
    var answer = people.length;
    var sum = people[0];
    people.sort((a,b)=>(a-b));
    for(var i = 0; i < people.length; i++){
        if(people[i] + people[i+1] <= limit) answer--;
            if(people[i] + people[i+1] + people[i+2] <= limit) answer--;
    }      
    return answer;
}
