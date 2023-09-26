self.onmessage = function(message) {
    
}

fibonaccie = (limit) => {
    nb1 = 0;
    nb2 = 1;
    nextTerm = nb1 + nb2;
    finalRes = ""+nb1+nb2+" \n";
    fibonacciCalc(limit, nb1, nb2, nextTerm, finalRes);
}

function fibonacciCalc(limit, nb1, nb2, nextTerm, finalRes) {
    finalRes = finalRes+nextTerm+"\n";
    if(nextTerm <= limit) {
        nb1 = nb2;
        nb2 = nextTerm;
        nextTerm = nb1 + nb2;
        fibonacciCalc(limit, nb1, nb2, nextTerm, finalRes);
    } else {
        
    }
}