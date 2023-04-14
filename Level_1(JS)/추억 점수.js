function solution(name, yearning, photo) {
    let obj = {};
    for(let i = 0; i < name.length; i++){
        obj[name[i]] = yearning[i];
    }
    return photo.map(value => value.map(v => obj[v] ? obj[v] : 0).reduce((acc,cur) => acc + cur,0))
}
