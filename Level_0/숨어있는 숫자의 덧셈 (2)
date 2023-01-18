class Solution {
    public int solution(String my_string) throws NumberFormatException{
        int answer = 0;
        String[] arr = my_string.replaceAll("[^0-9]",",").split(",");
        
        for(int i = 0; i < arr.length; i++){
            if(arr[i].equals("")){
                continue;
            }else{
                answer += Integer.parseInt(arr[i].trim());
            }    
        }
        return answer;
    }
}
