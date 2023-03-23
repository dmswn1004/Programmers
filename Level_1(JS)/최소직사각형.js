// 처음 풀이
function solution(sizes) {
    var width = [], length = [];
    for (var i = 0; i < sizes.length; i++){
        sizes[i][0] > sizes[i][1]? 0 : sizes[i].reverse();
        width.push(sizes[i][0]);
        length.push(sizes[i][1]);
    }
    
    width.sort((a,b)=>(b-a));
    length.sort((a,b)=>(b-a));
    
    return width[0] * length[0];
}

// 다른 사람의 풀이 중 좋다고 생각하는 풀이
function solution(sizes) {
    var h = 0, w = 0;
    sizes.forEach(s => {
        const [a, b] = s.sort((a,b) => b-a);
        if (a > h) h = a;
        if (b > w) w = b;
    });
    return h * w;
}
