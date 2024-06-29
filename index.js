//declare global variable using var
var customerName = 'bob'

//function to reassign variable
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}
// console.log(customerName)
// upperCaseCustomerName()
// console.log(customerName)
var bestCustomer;
function setBestCustomer() {
    bestCustomer = 'not bob';
    return bestCustomer;
}
// console.log(bestCustomer);
// setBestCustomer();
// console.log(bestCustomer);

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
    return bestCustomer;
}
// console.log(bestCustomer);
// overwriteBestCustomer();
// console.log(bestCustomer);

const leastFavoriteCustomer = 'milly';
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'lisa';
    return leastFavoriteCustomer
}
// console.log(leastFavoriteCustomer);
// changeLeastFavoriteCustomer();
// console.log(leastFavoriteCustomer);