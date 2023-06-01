function fibonacci (){
    let number1 = 0;
    console.log(number1)
    let number2 = 1
    console.log(number2)
    let counter=0
    while (counter<8){
        let sum = number1+number2;
        console.log(sum)
        number1=number2;
        number2=sum;
        counter++
    }
   
}

