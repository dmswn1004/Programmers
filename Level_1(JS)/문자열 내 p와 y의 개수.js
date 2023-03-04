function solution(s){
    var numP = 0, numY = 0;

    for(var i = 0; i < s.length; i++) {
        if (s[i] == 'p' || s[i] == 'P') numP++;
        
        if (s[i] == 'y' || s[i] == 'Y') numY++;        
    }  
    return numY == numP;
}
