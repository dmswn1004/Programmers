import java.util.stream.IntStream;

class Solution {
    public int[] solution(int num, int total) {
        int avg = (int)(total / num);
        return IntStream.range(avg - (int)((num-1)/2), avg + (int)((num + 2)/2)).toArray();
    }
}
