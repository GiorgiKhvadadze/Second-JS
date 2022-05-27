

// First Task 

var myArray = ["Georgia", "Ukraine", "France", "Germany", "UK", "Spain"];
    for(var i = 0; i < myArray.length; i++){
        document.write(myArray[i] + "</br>");
    }

    
//Second Task

document.write( "</br>");

function display(x,amount){
    var market = amount(x);
        document.write(market); 
}
function product(cost){
    if(cost<20){
        return "იაფია"
    }
    else if(cost>=20 && cost<50){
        return "საშუალო ფასია"
    }
    else{
        return "ძვირია"
    }
}
display(10,product);


// Third Task

document.write( "</br>");
document.write( "</br>");

var numArray = [15,53,22,198,10,28,16,70,33,951];
    var oddNum = numArray.filter ((n) => n%2 == 1);
        document.write(oddNum + "</br>");