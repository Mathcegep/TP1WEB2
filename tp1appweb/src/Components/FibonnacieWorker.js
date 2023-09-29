    port.onmessage = (e2) => 
    {
        
        let n1 = 0;
        let n2 = 1;
        let i = 1;
        let limit = 12;

        function fibonacciCalc(plimit, pi, pn1, pn2) {
            let nextTerm = pn1 + pn2;
            
            if(pi < plimit) {
                pn1 = pn2;
                pi =  pi+1;
                return fibonacciCalc(plimit, pi, pn2, nextTerm);
            } else {
                return n2;
            }
        };
    }
  


