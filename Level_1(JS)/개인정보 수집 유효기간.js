function solution(today, terms, privacies) {
    var answer = [];
    today = today.split(".").map(a=>Number(a));
    for(var i = 0; i < privacies.length; i++){
        var [date, termType] = privacies[i].split(" ").map(a=>a.split("."));
        date = date.map(a=>Number(a));
        var month = Number(terms.filter(a=>a.indexOf(termType) != -1)[0].split(" ")[1]);

        date[1] += month;
        if (date[1] > 12) {
            date[0] += Math.floor(date[1] / 12);
            date[1] = date[1] % 12;
            
            if(date[1] === 0){
                date[1] = 12;
                date[0] -= 1;
            }
        }
        
        if(date[0] < today[0]){
            answer.push(i+1);
        } else if(date[0] === today[0]){
            if(date[1] < today[1]){
                answer.push(i+1);
            } else if(date[1] === today[1]){
                if(date[2] <= today[2]){
                    answer.push(i+1);
                }
            }
        }
    }
    return answer;
}

// 다른 사람의 풀이
function solution(today, terms, privacies) {
  const termsT = {};
  const arr = [];
  today = new Date(today);

  for (const v of terms) {
    const a = v.split(" ");
    termsT[a[0]] = Number(a[1]);
  }

  for (const idx in privacies) {
    const a = privacies[idx].split(" ");
    const b = new Date(a[0]);
    b.setMonth(b.getMonth() + termsT[a[1]]);
    if (b <= today) {
      arr.push(Number(idx) + 1);
    }
  }
  return arr;
}
