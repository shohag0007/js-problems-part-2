const jim = 56;
const tim = 89;
const kim = 68;

if(jim > tim && jim > kim){
    console.log('jim is the best');
}

else if (tim > jim && tim > kim){
    console.log('tim is the best');
}

else{
    console.log('kim is the boss');
}



function maxOfThree(num1, num2, num3){
   if(num1 > num2 && num1 > num3){
    console.log(' num1!');
}
else if(num2 > num1 && num2 > num3){
    console.log(' num2!');
}

else{
    console.log('num3!')
}
}


const threeOf = maxOfThree(50, 79, 85);


const max =Math.max(12, 15, 16, 17,);
console.log(max);