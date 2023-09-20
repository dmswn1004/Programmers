function solution(id_list, report, k) {
    var answer = new Array(id_list.length).fill(0);
    var reportList = {};
    
    report = [...new Set(report)];
    
    for(var i of report){
        let [from, to] = i.split(" ");
        
        if(!reportList[to]) reportList[to] = [];
        reportList[to].push(from);
    }

    for(var id in reportList){
        if(reportList[id].length >= k){
            reportList[id].map(a=>{answer[id_list.indexOf(a)]++})
        }
    }
    
    return answer;
}
