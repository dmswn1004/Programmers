class Solution {
    public int solution(int[][] board) {
        int answer = 0;
        int[][] copy = new int[board.length][board.length];
        
        for(int i = 0; i < board.length; i++){
            for(int j = 0; j < board.length; j++){
                if(board[i][j]==1)
                    makeBoom(i,j,board.length,copy);
            }
        }
        
        for(int i = 0; i < board.length; i++){
            for(int j = 0; j < board.length; j++){
                if(copy[i][j]==0)
                    answer++;
            }
        }
        return answer;
    }
    
    private static void makeBoom(int row, int col, int length, int[][]copy){
        for(int i = row-1; i <= row+1; i++){
            if(i < 0 || i >= length){
                continue;
            }else{
                for(int j = col-1; j <= col+1; j++){
                    if(j < 0 || j >= length){
                        continue;
                    }else{
                        copy[i][j] = 1;
                    }
                }
            }
        }
    } 
}
