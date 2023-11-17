function solution(ability) {
    let [students, sports] = [ability.length, ability[0].length];
    let visited = Array(students).fill(false);
    let maxSum = 0;
    
    const dfs = (sum, count) => {
    if (count === sports) {
        maxSum = Math.max(maxSum, sum);
        return;
    }
    for (let i = 0; i < students; i++) {
        if (!visited[i]) {
            visited[i] = true;
            dfs(sum + ability[i][count], count + 1);
            visited[i] = false;
      }
    }
  };
    
    dfs(0,0);

    return maxSum;
}
