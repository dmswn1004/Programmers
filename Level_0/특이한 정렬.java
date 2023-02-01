import java.util.*;

class Solution {
    public int[] solution(int[] numlist, int n) {
		List<Integer> nums = new ArrayList<>();
		Arrays.sort(numlist);
		for (int num : numlist) nums.add(num);
		nums.sort((s1, s2) -> Integer.compare(Math.abs(s2 - n), Math.abs(s1 - n)));
		Collections.reverse(nums);
		return nums.stream().mapToInt(num -> num).toArray();
    }
}
