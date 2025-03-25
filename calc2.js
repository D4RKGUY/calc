function Start () {
    let Preference = prompt ("Enter no. of digits!")
    if (Preference==2) {
        let I =  Number (prompt ("Enter number 1"));
        let OPPP = prompt ("Enter operator +,-,* or /(division)");
        let II =  Number (prompt ("Enter number 2"));
        CALC1 (I,OPPP,II);
    }
    else if (Preference==3) {
        let I =  Number (prompt ("Enter number 1"));
        let OPPP = prompt ("Enter operator +,-,* or /(division)");
        let II =  Number (prompt ("Enter number 2"));
        let OPP = prompt ("Enter operator +,-,* or /(division)");
        let III =  Number (prompt ("Enter number 3"));
        CALC2 (I,OPPP,II,OPP,III);
    }
    else if (Preference==4) {
        let I = Number (prompt ("Enter number 1"));
        let OPPP = prompt ("Enter operator +,-,* or /(division)");
        let II =  Number (prompt ("Enter number 2"));
        let OPP = prompt ("Enter operator +,-,* or /(division)");
        let III =  Number (prompt ("Enter number 3"));
        let OP = prompt ("Enter operator +,-,* or /(division)");
        let IV =  Number (prompt ("Enter number 4"));
        CALC3 (I,OPPP,II,OPP,III,OP,IV);
    }
    else {
        alert ("Please enter 2,3 or 4 digits only!");
    }
    
}
/* Functions */
    function CALC3 (num1,operator,num2,operator1,num3,operator2,num4) {
        if (num1==0 || num2==0) { 
            alert ("Number 1 or 2 is empty!");
        }
        let fine = evaluate(num1, operator, num2);
        let ufine = evaluate(fine, operator1, num3);
        let result = evaluate(ufine, operator2, num4);
        alert ("The Answer is " + result);
    }
    function CALC2 (num1,operator,num2,operator1,num3) {
        if (num1==0 || num2==0) { 
            alert ("Number 1 or 2 is empty!");
        }
        let fine = evaluate(num1, operator, num2);
        let result = evaluate(fine, operator1, num3);
        alert ("The Answer is " + result);
    }
    function CALC1(num1, operator, num2) {
        if (num1==0 || num2==0) { 
            alert ("Number 1 or 2 is empty!");
        }
        let result = evaluate(num1, operator, num2);
        alert("The Answer is " + result);
    }
    function evaluate(a, operator, b) {
    if (operator === "+") return a + b;
    if (operator === "-") return a - b;
    if (operator === "*") return a * b;
    if (operator === "/") return b !== 0 ? a / b : "Error: Division by zero!";
    return "Error: Invalid operator!";
    }
