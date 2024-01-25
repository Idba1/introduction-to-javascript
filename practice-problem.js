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