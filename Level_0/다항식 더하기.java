class Solution {
    public String solution(String polynomial) {
        String answer = "";

        String[] arr = polynomial.split(" ");
        int x = 0;
        int n = 0;

        for(int i = 0; i < arr.length; i++) {
            if(!arr[i].equals("+")) {
                if(arr[i].indexOf("x") != -1) {
                    String num = arr[i].replace("x", "");
                    if(num.length() == 0) {
                        x++;
                    } else {
                        x += Integer.parseInt(num);
                    }
                } else {
                    n += Integer.parseInt(arr[i]);
                }
            }
        }

        if(x == 0) {
            answer = String.valueOf(n);
        } else {
            if(x == 1) {
                if(n != 0) {
                    answer = "x + " + n;
                } else {
                    answer = "x";
                }
            } else {
                if(n != 0) {
                    answer = x + "x" + " + " + n;
                } else {
                    answer = x + "x";
                }
            }
        }

        return answer;
    }
}
