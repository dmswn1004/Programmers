import java.util.*;

class Solution {
    public int solution(String before, String after) {
        int answer = 0;
        char[] bef = before.toCharArray();
        char[] aft = after.toCharArray();
        
        Arrays.sort(bef);
        Arrays.sort(aft);
        
        String b1 = new String(bef);
        String b2 = new String(aft);
        if(b1.equals(b2))
            answer = 1;
      
        return answer;
    }
}
