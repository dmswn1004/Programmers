class Solution {
  //기울기 구하는 함수
    public double inclination(int dot1[], int dot2[]){
        return (double)(dot2[1]-dot1[1])/(dot2[0]-dot1[0]);
    }
    
    public int solution(int[][] dots) {
        int answer = 0;
//         if(inclination(dots[0],dots[1]) == inclination(dots[2],dots[3]) || inclination(dots[0],dots[2])==inclination(dots[1],dots[3])||inclination(dots[0],dots[3])==inclination(dots[1],dots[2]))
//             return 1;
           if(inclination(dots[0],dots[1]) == inclination(dots[2],dots[3]))
            return 1;
           if(inclination(dots[0],dots[2]) == inclination(dots[1],dots[3]))
            return 1;
           if(inclination(dots[0],dots[3]) == inclination(dots[1],dots[2]))
            return 1;
        
        return answer;
    }
}
