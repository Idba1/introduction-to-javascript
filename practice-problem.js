/*****Practice Problem 1 *****/
/*Task-1
You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

Input:
The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.

Output:
Print the result.

Sample Input:
1000
700

Sample Output:
300 */


var haveMoney = 1000;
var orangePrice = 400;
var applePrice = 300;
totalPrice = orangePrice + applePrice;
console.log(totalPrice);

returnMoney = haveMoney - totalPrice;
console.log(returnMoney);




/*****Practice Problem 1 *****/
/*Task-2
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.

Output:
Print the result in 2 decimal places.

Sample Input:
75.25, 65, 80, 35.45, 99.50

Sample Output:
71.04 */

var mathematicsNumber = 75.25;
var biologyNumber = 65;
var chemistryNumber = 80;
var physicsNumber = 35.45;
var banglaNumber = 99.50;

sumOfAllSubjects =( mathematicsNumber + biologyNumber + chemistryNumber + physicsNumber + banglaNumber);
console.log(sumOfAllSubjects);

average = (sumOfAllSubjects / 5);
console.log(average. toFixed(2));


