import java.util.*;

class Solution {
    public String[] solution(String my_str, int n) {
        int length=(int) Math.ceil((double)my_str.length()/n);  
        String[] answer=new String[length];                     
        
        int index=0;
        for(int i=0; i<length-1; i++) {                         
            answer[i] = my_str.substring(index, n*(i+1));        
            index += n;
        }
        answer[length-1]=my_str.substring(index);
        
        return answer;
    }
}
