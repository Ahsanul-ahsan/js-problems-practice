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
console.log( 'Find the friend with the smallest name: ', smallName);  


// Task-3: Your task is to calculate the `total budget` required to buy electronics:
// Write a JavaScript function named `calculateElectronicsBudget` that takes in the number of laptop, tablets, and mobile` and returns the `total money required

const laptopPrice = 35000;
const tabletPrice = 15000;
const mobilePrice = 20000; 
function calculateElectronicsBudget(laptop,tablet,mobile){
    const laptopCost = laptop * laptopPrice;
    const tabletCost = tablet * tabletPrice;
    const mobileCost = mobile * mobilePrice;
    const totalMoney = laptopCost + tabletCost + mobileCost;
    return totalMoney;
}
const totalMoney = calculateElectronicsBudget(1,1,1);
console.log( 'total money required: ', totalMoney);


// Task-4: 
// You are `given an array of phone objects`, each containing information about the `model, brand, and price`. Your task is to write a JavaScript function named `findAveragePhonePrice` that takes this `array as input` and returns the `average price of phone`.
 const phones = [
            { model: "PhoneA", brand: "Iphone", price: 95000 },
            { model: "PhoneB", brand: "Samsung", price: 40000 },
            { model: "PhoneC", brand: "Oppo", price: 26000 },
            { model: "PhoneD", brand: "Nokia", price: 35000 },
            { model: "PhoneE", brand: "Iphone", price: 105000 },
            { model: "PhoneF", brand: "HTC", price: 48000 },
        ];
 function findAveragePhonePrice(price){
    let totalPrice = 0;
    for ( let i = 0; i < phones.length; i++){
    totalPrice += phones[i].price;
    }
    const averagePrice = totalPrice / phones.length;
    const roundaveragePrice = Math.round(averagePrice);
    return roundaveragePrice;
 }      
 const average = findAveragePhonePrice(phones);
 console.log('Total average Price : ', average );

// Task -5: (Hard) For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];
        function TotalSalary(employees) {
             let salaryPerPerson = 0;
             let cuttentSlary = 0;
           for(const employee of employees){
            if (employee.experience >= 0 ){
                salaryPerPerson = (employee.experience * employee.increment) + employee.starting;
                cuttentSlary += salaryPerPerson; 
            }
           }
            return cuttentSlary; 
        }

        const totalemployeeSalary = TotalSalary(employees);
        console.log( 'provided by the company in per month salary : ',  totalemployeeSalary)