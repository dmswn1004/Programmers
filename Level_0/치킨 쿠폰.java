class Solution {
    public int solution(int chicken) {
        int answer = 0;
     
        while(chicken >= 10){
            int bonus = chicken / 10;
            int rest = chicken % 10;
            chicken = bonus + rest;
            
            answer += bonus;
        }
        return answer;
    }
}
