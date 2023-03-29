function solution(strings, n) {
    return strings.sort((a,b)=>(a[n] != b[n]? a[n].localeCompare(b[n]) : a.localeCompare(b)));
}
