class Solution {
    public int solution(int a, int b) {
        int answer = 1;
        for(int i = 1; i < b; i++){
            if((a%i==0) && (b%i==0)){
                a = a/i;
                b = b/i;
            }
        }
        int n = 2;
        while(b >= n){
            if(b%n==0){
                if(n != 2 && n != 5)
                    return 2;
                else
                    b /= n;
            }else{
                n++;
            }
        }
        return answer;
    }
}
