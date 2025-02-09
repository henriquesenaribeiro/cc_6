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
