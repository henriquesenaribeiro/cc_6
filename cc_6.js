// Task 1: Business Profit Calculation

function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold;
    console.log(`Total Profit: $${profit}`);
}

calculateProfit(20, 30, 100);
calculateProfit(50, 70, 200);

// Created a formula to calculate profit based on three given parameters.

// Task 2: Sales Tax Computation

function calculateSalesTax(amount, taxRate) {
    let tax = amount * taxRate;
    console.log(`Sales Tax: $${tax}`);

};

calculateSalesTax(100, 0.07); // Expected output: "Sales Tax: $7"
calculateSalesTax(500, 0.1);  // Expected output: "Sales Tax: $50"

// Developed a function with two inputs to compute sales tax.

// Task 3: Employee Bonus Calculation

const calculateBonus = (salary, performanceRating) => 
    performanceRating === "Excellent" ? salary * 0.2 :
    performanceRating === "Good" ? salary * 0.1 :
    performanceRating === "Average" ? salary * 0.05 :
    0;

console.log(`Bonus: $${calculateBonus(5000, "Excellent")}`); // "Bonus: $1000"
console.log(`Bonus: $${calculateBonus(7000, "Good")}`); // "Bonus: $700"

calculateBonus(5000, "Excellent"); // Expected output: "Bonus: $1000"
calculateBonus(7000, "Good");      // Expected output: "Bonus: $700"

// Based on the perfomance, bonus could be calculated
