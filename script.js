function myFunction() {

    var number1 =parseInt(document.getElementById("num1").value) ;
    var number2 = parseInt(document.getElementById("num2").value);  
    var operand= document.getElementById("selectbox").value;

    document.getElementById("first").innerHTML = "First Number is " + number1;
    document.getElementById("second").innerHTML= "Second Number is " + number2;
    document.getElementById("third").innerHTML= "Operation choosed is " + operand;



    if(operand == "Add"){

        document.getElementById("results").innerHTML="Result is " + (number1+number2);
    }
    else if (operand =="Subtract"){

        document.getElementById("results").innerHTML="Result is " + (number1-number2);
    }
    else if (operand =="Multiply"){

        document.getElementById("results").innerHTML="Result is " + (number1*number2);
    }
    else if (operand =="Divide") {

        document.getElementById("results").innerHTML="Result is " + (number1/number2);
    }

    else {
        document.getElementById("results").innerHTML="The input is wrong";
    }


}

