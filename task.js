// Task -1: Find the lowest number in the array below.
const heights1 = [167, 190, 120, 165, 137];
function getmin(numbers){
    let min = numbers[0];
    for (const num of numbers){
        if (num < min){
            min = num;
        }
    }
    return min;
}
const min = getmin(heights1);
console.log( 'Find the lowest number in the array :', min);

// Task-2 Find the friend with the smallest name
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
let smallName = heights2[0];

for (i = 1; i < heights2.length; i++){
     if (heights2[i].length < smallName.length) 
        smallName = heights2[i];
}
// console.log( 'Find the friend with the smallest name: ', smallName);  
