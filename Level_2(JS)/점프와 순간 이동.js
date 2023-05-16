function solution(n){
    var ans = 0;
    while(n > 0){
        if(n % 2 == 1){
            ans++;
            n -= 1;
        }
        n = n / 2;
    }
    return ans;
}
