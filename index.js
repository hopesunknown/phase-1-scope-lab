// Write your solution in this file!
var customerName = "bob"
var bestCustomer
const leastFavoriteCustomer = 1

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = "not bob";
}

function overwriteBestCustomer() {
    return bestCustomer = "maybe bob";
}

function changeLeastFavoriteCustomer() {
    return leastFavoriteCustomer = 2;
}