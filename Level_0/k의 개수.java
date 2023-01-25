class Solution {
    public int solution(int i, int j, int k) {
        int answer = 0;
        for(int l = i; l <= j; l++){
            StringBuilder sb = new StringBuilder();
            sb.append(l);
            for(int r = 0; r < sb.length(); r++){
                if(((sb.charAt(r))-'0')==k){
                    answer++;
                }
            }
        }
        return answer;
    }
}
