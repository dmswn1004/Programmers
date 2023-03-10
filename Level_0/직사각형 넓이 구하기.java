import java.util.*;

class Solution {
    public int solution(int[][] dots) {
        int[] x = new int[dots.length];
        int[] y = new int[dots.length];
        for(int i = 0; i < dots.length; i++){
            x[i] = dots[i][0];
            y[i] = dots[i][1];
        }
        Arrays.sort(x);
        Arrays.sort(y);
        
        int answer = (x[3] - x[0])*(y[3]-y[0]);
        return answer;
    }
}
