function solution(new_id) {
    new_id = new_id.toLowerCase();
    new_id = new_id.replace(/[^a-z0-9-_.]/g, '');
    while(new_id.indexOf('..') !== -1){
        new_id = new_id.replaceAll('..', '.');
    }
    new_id = checkDot(new_id);
    
    if(new_id === "") return "aaa";
    
    if(new_id.length > 15) new_id = new_id.slice(0,15);
    new_id = checkDot(new_id);
    
    if(new_id.length <= 2) {
        while(new_id.length !== 3){
            new_id += new_id.at(-1);
        }
    }
    
    return new_id;
}

function checkDot(id) {
    if(id[0] === '.') id = id.slice(1);
    if(id.at(-1) === '.') id = id.slice(0,-1);
    return id;
}

// 다른 사람의 풀이
const solution = (new_id) => {
    const id = new_id
        .toLowerCase()
        .replace(/[^\w\d-_.]/g, '')
        .replace(/\.{2,}/g, '.')
        .replace(/^\.|\.$/g, '')
        .padEnd(1, 'a')
        .slice(0, 15)
        .replace(/^\.|\.$/g, '')        
    return id.padEnd(3, id[id.length-1])
}
